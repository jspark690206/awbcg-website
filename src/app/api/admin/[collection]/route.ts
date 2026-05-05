import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

function getAdminDb() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  }
  return getFirestore();
}

const ALLOWED = ['notices', 'careers', 'qa', 'inquiries'];

// GET: 전체 조회
export async function GET(req: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  if (!ALLOWED.includes(collection)) return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
  try {
    const db = getAdminDb();
    const snap = await db.collection(collection).orderBy('createdAt', 'desc').get();
    const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    return NextResponse.json({ ok: true, data: docs });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

// POST: 새 문서 추가
export async function POST(req: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  if (!ALLOWED.includes(collection)) return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
  try {
    const body = await req.json();
    const db = getAdminDb();
    const ref = await db.collection(collection).add({ ...body, createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() });
    return NextResponse.json({ ok: true, id: ref.id });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

// PUT: 문서 업데이트
export async function PUT(req: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  if (!ALLOWED.includes(collection)) return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
  try {
    const { id, ...data } = await req.json();
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });
    const db = getAdminDb();
    await db.collection(collection).doc(id).update({ ...data, updatedAt: FieldValue.serverTimestamp() });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

// DELETE: 문서 삭제
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  if (!ALLOWED.includes(collection)) return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });
    const db = getAdminDb();
    await db.collection(collection).doc(id).delete();
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
