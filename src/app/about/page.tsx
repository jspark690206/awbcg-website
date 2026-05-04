const companyInfo = [
  { label: '법인명', value: '(주)올윈비시지' },
  { label: '영문명', value: 'AWBCG (All Winner Brilliant Consulting Group)' },
  { label: '설립', value: '2019년 1월' },
  { label: '대표이사', value: '박제선' },
  { label: '주소', value: '부산광역시 북구 덕천로 155 1F' },
  { label: '전화', value: '051-343-4047' },
  { label: '팩스', value: '051-343-4048' },
  { label: '이메일', value: 'admin@awbcg.co.kr' },
  { label: '웹사이트', value: 'www.awbcg.co.kr / www.awbcg.ai' },
  { label: '사업자등록번호', value: '654-81-01275' },
  { label: '사업영역', value: '스마트공장 / 빅데이터 / 인공지능 구축 전문 컨설팅' },
];

const timeline = [
  {
    year: '2024',
    items: [
      { month: '06', content: '자율형 공장 구축 수주 — ㈜코렌스 (Data Lake, AAS 기반 디지털트윈, DT 관제상황실 고도화, AI 자율제어)' },
    ],
  },
  {
    year: '2023',
    items: [
      { month: '03', content: 'ICT 융합 제조운영체제 수주 — ㈜코렌스 (GAMMA·MPC Valve 라인 3D 모니터링 고도화, 8개 협력사 SCM 구축)' },
    ],
  },
  {
    year: '2022',
    items: [
      { month: '03', content: 'AI 융합 지역특화사업 수주 — ㈜코렌스 (검사지능화, 설계지능화)' },
    ],
  },
  {
    year: '2020',
    items: [
      { month: '11', content: '고도화2 수주 — ㈜코렌스 (GAMMA 라인 3D 모델기반 모니터링 구축)' },
      { month: '07', content: '데이터바우처 지원사업 수주 — ㈜에이치씨글로벌 (조제·건조기·내포장·외포장 데이터 분석)' },
    ],
  },
  {
    year: '2019',
    items: [
      { month: '08', content: '스마트공장 구축 및 고도화 수주 — ㈜에이치씨글로벌 / ㈜희창유업 (MES, 스마트HACCP, Digital Twin)' },
      { month: '07', content: '시범공장 구축 수주 — ㈜코렌스 (BMW·PASTE·로 라인 3D 모델기반 모니터링)' },
      { month: '04', content: '법인 설립 — (주)올윈비시지 창립' },
    ],
  },
  {
    year: '2018',
    items: [
      { month: '03', content: '3D 모델기반 모니터링 구축 수주 — ㈜코렌스 (BMW라인 CPS 3D 모니터링)' },
    ],
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* 기업 개요 표 */}
      <section className="mb-10">
        <table className="w-full text-sm border-t-2" style={{ borderColor: 'var(--color-primary)' }}>
          <tbody>
            {companyInfo.map((item) => (
              <tr key={item.label} className="border-b border-gray-200">
                <th
                  className="px-4 py-3 text-left font-semibold w-36 whitespace-nowrap"
                  style={{ backgroundColor: '#f0f4ff', color: 'var(--color-primary)' }}
                >
                  {item.label}
                </th>
                <td className="px-4 py-3 text-gray-700">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 회사 연혁 */}
      <section>
        <h3 className="text-base font-bold mb-4 pb-2 border-b-2" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
          회사 연혁
        </h3>
        <table className="w-full text-sm">
          <tbody>
            {timeline.map((group) =>
              group.items.map((item, i) => (
                <tr key={`${group.year}-${i}`} className="border-b border-gray-100">
                  {i === 0 && (
                    <td
                      rowSpan={group.items.length}
                      className="w-16 px-4 py-3 font-bold text-center align-top"
                      style={{ color: 'var(--color-primary)', backgroundColor: '#f0f4ff', borderRight: '1px solid #ddd' }}
                    >
                      {group.year}
                    </td>
                  )}
                  <td className="px-4 py-2 w-14 font-medium text-center" style={{ color: 'var(--color-secondary)' }}>
                    {item.month}월
                  </td>
                  <td className="px-2 py-2 text-gray-400 w-4">:</td>
                  <td className="px-2 py-2 text-gray-700">{item.content}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}
