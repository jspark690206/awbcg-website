// Admin API — Firestore 보안 규칙을 우회하여 서버(Admin SDK)로 직접 CRUD
// 관리자 페이지 전용

import { Inquiry, Notice, Career, QAItem } from './firestoreStore';

const base = '/api/admin';

async function apiGet<T>(col: string): Promise<T[]> {
  const res = await fetch(`${base}/${col}`);
  const json = await res.json();
  if (!json.ok) throw new Error(json.error);
  return json.data as T[];
}

async function apiAdd(col: string, data: Record<string, unknown>): Promise<string> {
  const res = await fetch(`${base}/${col}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error);
  return json.id as string;
}

async function apiUpdate(col: string, id: string, data: Record<string, unknown>): Promise<void> {
  const res = await fetch(`${base}/${col}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, ...data }),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error);
}

async function apiDelete(col: string, id: string): Promise<void> {
  const res = await fetch(`${base}/${col}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error);
}

function toStr(val: unknown): string {
  if (!val) return new Date().toISOString();
  if (typeof val === 'object' && '_seconds' in (val as object)) {
    return new Date((val as { _seconds: number })._seconds * 1000).toISOString();
  }
  return String(val);
}

function normalize<T extends { id: string; createdAt: unknown }>(docs: T[]): T[] {
  return docs.map(d => ({ ...d, createdAt: toStr(d.createdAt) }));
}

export const adminApi = {
  inquiries: {
    getAll: () => apiGet<Inquiry>('inquiries').then(normalize),
    update: (id: string, data: Partial<Inquiry>) => apiUpdate('inquiries', id, data as Record<string, unknown>),
    delete: (id: string) => apiDelete('inquiries', id),
  },
  notices: {
    getAll: () => apiGet<Notice>('notices').then(normalize),
    add: (data: Omit<Notice, 'id' | 'createdAt' | 'updatedAt'>) =>
      apiAdd('notices', data as Record<string, unknown>),
    update: (id: string, data: Partial<Notice>) => apiUpdate('notices', id, data as Record<string, unknown>),
    delete: (id: string) => apiDelete('notices', id),
  },
  careers: {
    getAll: () => apiGet<Career>('careers').then(normalize),
    add: (data: Omit<Career, 'id' | 'createdAt'>) => apiAdd('careers', data as Record<string, unknown>),
    update: (id: string, data: Partial<Career>) => apiUpdate('careers', id, data as Record<string, unknown>),
    delete: (id: string) => apiDelete('careers', id),
  },
  qa: {
    getAll: () => apiGet<QAItem>('qa').then(normalize),
    add: (data: Omit<QAItem, 'id' | 'createdAt'>) => apiAdd('qa', data as Record<string, unknown>),
    update: (id: string, data: Partial<QAItem>) => apiUpdate('qa', id, data as Record<string, unknown>),
    delete: (id: string) => apiDelete('qa', id),
  },
};
