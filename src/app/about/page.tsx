import { Building2, Calendar } from 'lucide-react';

const companyInfo = [
  { label: '법인명', value: '(주)올윈비시지' },
  { label: '영문명', value: 'AWBCG (All Winner Brilliant Consulting Group)' },
  { label: '설립', value: '2019년 4월' },
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
      { month: '04', content: '법인 설립 — (주)올윈비시지 창립' },
      { month: '03', content: '시범공장 구축 수주 — ㈜코렌스 (BMW·PASTE·로 라인 3D 모델기반 모니터링)' },
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
    <div className="space-y-12">
      {/* 기업 개요 */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: 'rgba(13,43,94,0.08)' }}
          >
            <Building2 size={20} style={{ color: 'var(--color-primary)' }} />
          </div>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>기업현황</h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {companyInfo.map((item, idx) => (
                <tr key={item.label} className={`border-b border-gray-100 last:border-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <th
                    className="px-6 py-4 text-left font-semibold w-40 whitespace-nowrap"
                    style={{ color: 'var(--color-primary)', backgroundColor: idx % 2 === 0 ? 'rgba(13,43,94,0.03)' : 'rgba(13,43,94,0.05)' }}
                  >
                    {item.label}
                  </th>
                  <td className="px-6 py-4 text-gray-700">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 연혁 타임라인 */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: 'rgba(13,43,94,0.08)' }}
          >
            <Calendar size={20} style={{ color: 'var(--color-primary)' }} />
          </div>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>회사 연혁</h2>
        </div>

        <div className="space-y-6">
          {timeline.map((group) => (
            <div key={group.year} className="flex gap-6">
              {/* 연도 */}
              <div className="flex-shrink-0 w-16 text-right">
                <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                  {group.year}
                </span>
              </div>

              {/* 라인 + 내용 */}
              <div className="flex gap-4 flex-1">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--color-secondary)' }} />
                  <div className="w-0.5 flex-1 mt-2" style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.2 }} />
                </div>
                <div className="flex-1 pb-2">
                  {group.items.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 mb-3 last:mb-0">
                      <div className="flex items-start gap-3">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: 'rgba(26,127,196,0.1)', color: 'var(--color-secondary)' }}
                        >
                          {item.month}월
                        </span>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
