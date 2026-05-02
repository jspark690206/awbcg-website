const achievements = [
  { no: 1, title: '3D 모델기반 모니터링 구축', period: '2018.03 ~ 2019.03', client: '㈜코렌스' },
  { no: 2, title: '시범공장 구축', period: '2019.03 ~ 2020.03', client: '㈜코렌스' },
  { no: 3, title: '스마트공장 구축 및 고도화', period: '2019.08 ~ 2020.05', client: '㈜에이치씨글로벌' },
  { no: 4, title: '스마트공장 구축 및 고도화', period: '2019.08 ~ 2020.05', client: '㈜희창유업' },
  { no: 5, title: '데이터바우처 지원사업', period: '2020.07 ~ 2020.11', client: '㈜에이치씨글로벌' },
  { no: 6, title: '고도화2', period: '2020.11 ~ 2021.11', client: '㈜코렌스' },
  { no: 7, title: 'AI 융합 지역특화사업', period: '2022.03 ~ 2023.12', client: '㈜코렌스' },
  { no: 8, title: 'ICT 융합 제조운영체제', period: '2023.03 ~ 2024.12', client: '㈜코렌스' },
  { no: 9, title: '자율형 공장 구축', period: '2024.06 ~ 2026.06', client: '㈜코렌스' },
];

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{ backgroundColor: 'rgba(13,43,94,0.08)', color: 'var(--color-primary)' }}
          >
            ACHIEVEMENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            주요 수주 실적
          </h2>
          <p className="text-gray-500">2018년부터 영남 제조기업과 함께 스마트팩토리 구축을 실현해 왔습니다.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary)' }} className="text-white">
                <th className="px-4 py-3 text-left font-semibold w-10">No</th>
                <th className="px-4 py-3 text-left font-semibold">사업명</th>
                <th className="px-4 py-3 text-left font-semibold w-44">수행 기간</th>
                <th className="px-4 py-3 text-left font-semibold w-36">발주처</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((item, idx) => (
                <tr
                  key={item.no}
                  className="border-t border-gray-100 hover:bg-blue-50/50 transition-colors"
                  style={{ backgroundColor: idx % 2 === 0 ? 'white' : 'rgba(244,246,250,0.5)' }}
                >
                  <td className="px-4 py-3 text-gray-400 font-medium">{item.no}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">{item.title}</td>
                  <td className="px-4 py-3 text-gray-500">{item.period}</td>
                  <td className="px-4 py-3">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-medium"
                      style={{ backgroundColor: 'rgba(26,127,196,0.1)', color: 'var(--color-secondary)' }}
                    >
                      {item.client}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3 text-right">
          출처: 정부 프로젝트 수행실적 (2025.07.01 기준)
        </p>
      </div>
    </section>
  );
}
