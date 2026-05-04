'use client';

import { useEffect, useState } from 'react';
import { adminStore, Notice } from '@/lib/adminStore';

const PAGE_SIZE = 10;

export default function NewsPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    setNotices(adminStore.notices.getAll().filter((n) => n.published));
  }, []);

  const filtered = notices.filter((n) =>
    query === '' || n.title.includes(query) || n.content.includes(query)
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      {/* 총 글수 */}
      <p className="text-xs text-gray-500 mb-3">
        총 <strong>{filtered.length}</strong>개의 글이 있습니다.
        ({page}/{totalPages} 페이지)
      </p>

      {/* 게시판 테이블 */}
      <table className="w-full text-sm border-t-2" style={{ borderColor: 'var(--color-primary)' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--color-primary)' }}>
            {['번호', '제목', '작성자', '작성일', '조회수'].map((h) => (
              <th key={h} className="py-2.5 px-3 text-white font-semibold text-center text-xs">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paged.length > 0 ? paged.map((n, idx) => (
            <tr key={n.id} className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
              <td className="py-2.5 px-3 text-center text-gray-500 text-xs">
                {filtered.length - (page - 1) * PAGE_SIZE - idx}
              </td>
              <td className="py-2.5 px-3 text-gray-800">{n.title}</td>
              <td className="py-2.5 px-3 text-center text-gray-500 text-xs whitespace-nowrap">관리자</td>
              <td className="py-2.5 px-3 text-center text-gray-500 text-xs whitespace-nowrap">
                {n.createdAt.slice(0, 10)}
              </td>
              <td className="py-2.5 px-3 text-center text-gray-500 text-xs">-</td>
            </tr>
          )) : (
            <tr>
              <td colSpan={5} className="py-10 text-center text-gray-400 text-sm">
                등록된 뉴스가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-1 mt-4">
          <button onClick={() => setPage(1)} className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-100">«처음</button>
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-100">‹이전</button>
          {Array.from({ length: Math.min(10, totalPages) }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className="px-2.5 py-1 text-xs border rounded"
              style={page === p
                ? { backgroundColor: 'var(--color-primary)', color: '#fff', borderColor: 'var(--color-primary)' }
                : { borderColor: '#ddd', color: '#555' }}
            >
              {p}
            </button>
          ))}
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-100">다음›</button>
          <button onClick={() => setPage(totalPages)} className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-100">끝»</button>
        </div>
      )}

      {/* 검색 */}
      <div className="flex justify-center gap-2 mt-4">
        <select className="px-2 py-1.5 text-xs border border-gray-300 rounded">
          <option>제목</option>
          <option>내용</option>
        </select>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { setQuery(search); setPage(1); } }}
          className="px-3 py-1.5 text-xs border border-gray-300 rounded w-40 outline-none focus:border-blue-400"
          placeholder="검색어 입력"
        />
        <button
          onClick={() => { setQuery(search); setPage(1); }}
          className="px-3 py-1.5 text-xs text-white rounded"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          검색
        </button>
      </div>
    </div>
  );
}
