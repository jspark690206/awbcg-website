const clients = [
  { name: '㈜코렌스', desc: '자동차부품 제조 (BMW·PASTE·로 라인 MES, 디지털트윈, AI 자율제어)', url: '#' },
  { name: '㈜에이치씨글로벌', desc: '식품 제조 (MES, 스마트HACCP, 데이터바우처)', url: '#' },
  { name: '㈜희창유업', desc: '유제품 제조 (MES, 스마트HACCP, Digital Twin)', url: '#' },
];

export default function ClientsPage() {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-6">
        올윈비시지와 함께 스마트팩토리를 구축한 고객사 사이트를 소개합니다.
      </p>

      <div className="space-y-4">
        {clients.map((c) => (
          <div key={c.name} className="flex items-center gap-4 p-5 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
            {/* 아이콘 */}
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-lg"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              {c.name.charAt(1)}
            </div>
            <div className="flex-1">
              <p className="font-bold text-base" style={{ color: 'var(--color-primary)' }}>{c.name}</p>
              <p className="text-sm text-gray-500 mt-0.5">{c.desc}</p>
            </div>
            {c.url !== '#' ? (
              <a href={c.url} target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 text-xs px-3 py-1.5 rounded text-white"
                style={{ backgroundColor: 'var(--color-secondary)' }}>
                사이트 방문
              </a>
            ) : (
              <span className="flex-shrink-0 text-xs px-3 py-1.5 rounded text-gray-400 bg-gray-100">
                준비 중
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-6 text-center">
        * 고객사 사이트 등록 문의: admin@awbcg.co.kr
      </p>
    </div>
  );
}
