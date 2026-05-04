const values = [
  {
    title: '자기계발',
    icon: '📚',
    items: [
      '자신의 부족한 점이나 잠재능력을 찾아 연구·개발하는 사람',
      '자신만의 KNOW-HOW 개발에 새로운 방식을 다하는 사람',
      '미래에 요구되는 능력과 지식이 무엇인지 파악하고 노력하고 이를 습득해 나가는 사람',
    ],
  },
  {
    title: '전문성',
    icon: '🎯',
    items: [
      '담당업무에 필요한 전문지식을 보유하고 활용하는 사람',
      '업무수행에서 요구되는 지식을 보유한 사람',
      '관련 정보를 활용하여 업무를 효과적으로 진행하는 사람',
      '담당업무와 관련한 자격증/면허증 보유',
    ],
  },
  {
    title: '창의성',
    icon: '💡',
    items: [
      '업무수행에 있어 새로운 사고 방식이나 아이디어를 현실성 있게 반영하는 사람',
      '새로운 사고방식이나 아이디어를 창출해 내는 사람',
      '새로운 사고방식으로 아이디어를 업무에 활용하는 사람',
    ],
  },
];

export default function CareersPage() {
  return (
    <div>
      {/* 인재상 소개 배너 */}
      <div
        className="rounded-xl p-8 mb-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0D2B5E 0%, #1A7FC4 100%)' }}
      >
        <p className="text-blue-200 text-sm mb-2 font-medium">
          &ldquo;고객감동&rdquo;, &ldquo;최고기술&rdquo;, &ldquo;상호존중&rdquo;
        </p>
        <p className="text-base leading-relaxed">
          올윈비시지는 <strong>인간존중</strong>의 바탕 위에 다른 슬로건이 아닌
          21세기 무한경쟁 시대에 세계 최고를 지향하는 회사에 걸맞는 핵심가치를 보유한
          <strong> 인재상</strong>을 요구합니다.
        </p>
        <div className="mt-4 text-right">
          <span className="text-2xl font-black tracking-wide opacity-30">Recruit</span>
        </div>
      </div>

      {/* 인재상 항목 */}
      <div className="space-y-6">
        {values.map((v) => (
          <div key={v.title} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-3"
              style={{ backgroundColor: '#f0f4ff' }}>
              <span className="text-xl">{v.icon}</span>
              <h3 className="font-bold text-base" style={{ color: 'var(--color-primary)' }}>
                {v.title}
              </h3>
            </div>
            <ul className="divide-y divide-gray-50 px-5">
              {v.items.map((item) => (
                <li key={item} className="flex items-start gap-2 py-2.5 text-sm text-gray-700">
                  <span className="text-blue-400 mt-1">▶</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
