import {
  collection, doc, getDocs, addDoc, updateDoc, deleteDoc,
  query, orderBy, serverTimestamp, Timestamp
} from 'firebase/firestore';
import { db } from './firebase';

// ─── Types ───────────────────────────────────────────────
export interface Inquiry {
  id: string;
  company: string;
  name: string;
  phone: string;
  email: string;
  type: string;
  message: string;
  status: 'new' | 'inProgress' | 'done';
  createdAt: string;
  reply?: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Career {
  id: string;
  title: string;
  department: string;
  type: '정규직' | '계약직' | '인턴';
  deadline: string;
  description: string;
  published: boolean;
  createdAt: string;
}

export interface QAItem {
  id: string;
  question: string;
  category: string;
  answer: string;
  published: boolean;
  createdAt: string;
}

// ─── Helper ──────────────────────────────────────────────
function toStr(val: unknown): string {
  if (!val) return new Date().toISOString();
  if (val instanceof Timestamp) return val.toDate().toISOString();
  return String(val);
}

// ─── Generic CRUD ────────────────────────────────────────
async function getAll<T extends { id: string }>(col: string): Promise<T[]> {
  const q = query(collection(db, col), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data(), createdAt: toStr((d.data() as Record<string, unknown>).createdAt) } as unknown as T));
}

async function add<T extends { id?: string }>(col: string, data: Omit<T, 'id'>): Promise<string> {
  const ref = await addDoc(collection(db, col), { ...data, createdAt: serverTimestamp() });
  return ref.id;
}

async function update<T extends { id: string }>(col: string, id: string, data: Partial<Omit<T, 'id'>>): Promise<void> {
  await updateDoc(doc(db, col, id), { ...data, updatedAt: serverTimestamp() });
}

async function remove(col: string, id: string): Promise<void> {
  await deleteDoc(doc(db, col, id));
}

// ─── Exported Store ──────────────────────────────────────
export const firestoreStore = {
  inquiries: {
    getAll: () => getAll<Inquiry>('inquiries'),
    add: (data: Omit<Inquiry, 'id' | 'createdAt'>) => add<Inquiry>('inquiries', { ...data, createdAt: new Date().toISOString() }),
    update: (id: string, data: Partial<Inquiry>) => update<Inquiry>('inquiries', id, data),
    delete: (id: string) => remove('inquiries', id),
  },
  notices: {
    getAll: () => getAll<Notice>('notices'),
    add: (data: Omit<Notice, 'id' | 'createdAt' | 'updatedAt'>) =>
      add<Notice>('notices', { ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }),
    update: (id: string, data: Partial<Notice>) => update<Notice>('notices', id, { ...data, updatedAt: new Date().toISOString() }),
    delete: (id: string) => remove('notices', id),
  },
  careers: {
    getAll: () => getAll<Career>('careers'),
    add: (data: Omit<Career, 'id' | 'createdAt'>) => add<Career>('careers', { ...data, createdAt: new Date().toISOString() }),
    update: (id: string, data: Partial<Career>) => update<Career>('careers', id, data),
    delete: (id: string) => remove('careers', id),
  },
  qa: {
    getAll: () => getAll<QAItem>('qa'),
    add: (data: Omit<QAItem, 'id' | 'createdAt'>) => add<QAItem>('qa', { ...data, createdAt: new Date().toISOString() }),
    update: (id: string, data: Partial<QAItem>) => update<QAItem>('qa', id, data),
    delete: (id: string) => remove('qa', id),
  },
};
