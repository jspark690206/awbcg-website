// 관리자 데이터 로컬스토리지 스토어
// 추후 Supabase API로 교체 가능한 구조

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

const KEYS = {
  inquiries: 'admin_inquiries',
  notices: 'admin_notices',
  careers: 'admin_careers',
  qa: 'admin_qa',
};

const SAMPLE_INQUIRIES: Inquiry[] = [
  { id: '1', company: '㈜코렌스', name: '김담당', phone: '051-000-0001', email: 'test@korens.com', type: 'MES 컨설팅 문의', message: 'MES 시스템 고도화 관련 문의드립니다.', status: 'new', createdAt: '2026-05-02T09:00:00' },
  { id: '2', company: '㈜희창유업', name: '이과장', phone: '055-000-0002', email: 'test@heechang.com', type: 'AI 컨설팅 문의', message: '식품 공정 AI 검사 도입 검토 중입니다.', status: 'inProgress', createdAt: '2026-05-01T14:30:00' },
  { id: '3', company: '부산제조(주)', name: '박부장', phone: '051-000-0003', email: 'test@busan.com', type: 'BigData 컨설팅 문의', message: '빅데이터 분석 시스템 구축 비용 문의입니다.', status: 'done', createdAt: '2026-04-30T11:00:00', reply: '안녕하세요. 문의 감사합니다. 담당자가 연락드리겠습니다.' },
];

const SAMPLE_NOTICES: Notice[] = [
  { id: '1', title: '올윈비시지 홈페이지 오픈 안내', content: '(주)올윈비시지 공식 홈페이지가 새롭게 오픈되었습니다.', published: true, createdAt: '2026-05-02T09:00:00', updatedAt: '2026-05-02T09:00:00' },
];

const SAMPLE_CAREERS: Career[] = [
  { id: '1', title: 'MES 개발 엔지니어', department: '제조실행팀', type: '정규직', deadline: '2026-06-30', description: 'MES 시스템 개발 및 구축 업무를 담당하실 분을 모집합니다.', published: true, createdAt: '2026-05-02T09:00:00' },
  { id: '2', title: 'AI/빅데이터 컨설턴트', department: '인공지능팀', type: '정규직', deadline: '2026-06-30', description: 'AI·빅데이터 컨설팅 프로젝트 수행 및 기술 지원 업무', published: true, createdAt: '2026-05-02T09:00:00' },
];

const SAMPLE_QA: QAItem[] = [
  { id: '1', question: 'MES 구축 기간은 얼마나 걸리나요?', category: 'MES', answer: '기업 규모에 따라 3~8개월 소요됩니다.', published: true, createdAt: '2026-05-02T09:00:00' },
];

function getStore<T>(key: string, sample: T[]): T[] {
  if (typeof window === 'undefined') return sample;
  const raw = localStorage.getItem(key);
  if (!raw) { localStorage.setItem(key, JSON.stringify(sample)); return sample; }
  try { return JSON.parse(raw); } catch { return sample; }
}

function setStore<T>(key: string, data: T[]) {
  if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(data));
}

export const adminStore = {
  inquiries: {
    getAll: () => getStore<Inquiry>(KEYS.inquiries, SAMPLE_INQUIRIES),
    update: (id: string, patch: Partial<Inquiry>) => {
      const list = getStore<Inquiry>(KEYS.inquiries, SAMPLE_INQUIRIES);
      const updated = list.map(i => i.id === id ? { ...i, ...patch } : i);
      setStore(KEYS.inquiries, updated);
      return updated;
    },
  },
  notices: {
    getAll: () => getStore<Notice>(KEYS.notices, SAMPLE_NOTICES),
    save: (notice: Notice) => {
      const list = getStore<Notice>(KEYS.notices, SAMPLE_NOTICES);
      const exists = list.find(n => n.id === notice.id);
      const updated = exists ? list.map(n => n.id === notice.id ? notice : n) : [notice, ...list];
      setStore(KEYS.notices, updated);
      return updated;
    },
    delete: (id: string) => {
      const list = getStore<Notice>(KEYS.notices, SAMPLE_NOTICES).filter(n => n.id !== id);
      setStore(KEYS.notices, list);
      return list;
    },
  },
  careers: {
    getAll: () => getStore<Career>(KEYS.careers, SAMPLE_CAREERS),
    save: (career: Career) => {
      const list = getStore<Career>(KEYS.careers, SAMPLE_CAREERS);
      const exists = list.find(c => c.id === career.id);
      const updated = exists ? list.map(c => c.id === career.id ? career : c) : [career, ...list];
      setStore(KEYS.careers, updated);
      return updated;
    },
    delete: (id: string) => {
      const list = getStore<Career>(KEYS.careers, SAMPLE_CAREERS).filter(c => c.id !== id);
      setStore(KEYS.careers, list);
      return list;
    },
  },
  qa: {
    getAll: () => getStore<QAItem>(KEYS.qa, SAMPLE_QA),
    save: (item: QAItem) => {
      const list = getStore<QAItem>(KEYS.qa, SAMPLE_QA);
      const exists = list.find(q => q.id === item.id);
      const updated = exists ? list.map(q => q.id === item.id ? item : q) : [item, ...list];
      setStore(KEYS.qa, updated);
      return updated;
    },
    delete: (id: string) => {
      const list = getStore<QAItem>(KEYS.qa, SAMPLE_QA).filter(q => q.id !== id);
      setStore(KEYS.qa, list);
      return list;
    },
  },
};
