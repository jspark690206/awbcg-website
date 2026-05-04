export default function ResearchPage() {
  return (
    <div>
      {/* 연구소 소개 */}
      <section className="mb-8">
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          (주)올윈비시지 기술연구소는 스마트공장 · 빅데이터 · 인공지능 분야의 핵심 기술을 연구개발하며,
          영남지역 제조기업의 경쟁력 강화를 위한 솔루션을 제공합니다.
        </p>
        <table className="w-full text-sm border-t-2 mb-6" style={{ borderColor: 'var(--color-primary)' }}>
          <tbody>
            {[
              { label: '연구소명', value: '(주)올윈비시지 기술연구소' },
              { label: '소재지', value: '부산광역시 북구 덕천로 155 1F' },
              { label: '전화', value: '051-343-4047' },
              { label: '팩스', value: '051-343-4048' },
              { label: '이메일', value: 'admin@awbcg.co.kr' },
              { label: '주요 연구분야', value: 'MES · 빅데이터(BigData) · 인공지능(AI) · 디지털트윈(Digital Twin)' },
            ].map((row) => (
              <tr key={row.label} className="border-b border-gray-200">
                <th className="px-4 py-3 text-left font-semibold w-36 whitespace-nowrap"
                  style={{ backgroundColor: '#f0f4ff', color: 'var(--color-primary)' }}>
                  {row.label}
                </th>
                <td className="px-4 py-3 text-gray-700">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 지도 */}
      <section>
        <h3 className="text-base font-bold mb-3 pb-2 border-b-2"
          style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
          오시는 길
        </h3>
        <div className="w-full overflow-hidden rounded border border-gray-200" style={{ height: '400px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.3!2d128.9977!3d35.2094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568eda6c5f5b5b5%3A0x0!2z67aA7IKw6rSR7Jet7IucIOuqheyLnCDrp5Tsoow!5e0!3m2!1sko!2skr!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">
          📍 부산광역시 북구 덕천로 155 1F &nbsp;|&nbsp; ☎ 051-343-4047
        </p>
      </section>
    </div>
  );
}
