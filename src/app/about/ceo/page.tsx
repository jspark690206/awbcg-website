import { Quote } from 'lucide-react';
import Image from 'next/image';

const messages = [
  {
    title: '영남 제조기업에 다크 팩토리를 구축하겠습니다',
    content: `저희 올윈비시지는 낙후되어 있는 영남제조기업에 4차 산업과 맞물려 "제조기업에 인공지능(AI)을 불어넣어 다크 팩토리 구축에 기여하자"는 비전을 가지고, 제조실행시스템(MES), 빅데이터(Bigdata), 인공지능(AI)을 제조기업에 불어넣기 위한 컨설팅을 목표로 부산·경남·울산 제조기업을 대상으로 태동하게 되었습니다.`,
  },
  {
    title: "'고객의 성장'은 곧 '기업의 성장'",
    content: `저희 올윈비시지 모든 임직원은 고객의 가치를 최우선적으로 여기며, 늘 고객의 목소리에 귀를 기울이고 고객의 입장에서 생각하고, 보다 다양해지고 있는 요구 사항에 신속하고 효과적으로 대응할 수 있도록 만전을 기할 것이며, '고객의 성장'이 곧 '기업의 성장'이라는 사명으로 서비스 환경을 구축하는 데 최선을 다 할 것입니다.`,
  },
  {
    title: '영남지역 MES·BigData·AI 컨설팅의 메카로',
    content: `저희 올윈비시지의 모든 임직원은 회사 상호와 걸맞게 "AWBCG(All Winner Brilliant Consulting Group)" 당사와 거래하는 모든 고객과 동반성장을 목표로 하고 있으며, 제조기업 또한 서울·경기 도시권 중심에서 영남지역 중심으로 4차 산업의 혜택을 누릴 수 있도록 지역에서 바닥을 다져나가는 기업이 되기 위하여 최선을 다하고 있습니다.`,
  },
];

export default function CeoPage() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* 헤더 */}
      <div className="flex items-center gap-3 mb-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'rgba(13,43,94,0.08)' }}
        >
          <Quote size={20} style={{ color: 'var(--color-primary)' }} />
        </div>
        <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>CEO 인사말</h2>
      </div>

      {/* CEO 프로필 카드 */}
      <div
        className="rounded-2xl p-8 mb-10 flex flex-col sm:flex-row items-center sm:items-start gap-6"
        style={{ background: 'linear-gradient(135deg, #0D2B5E 0%, #1A4A8A 100%)' }}
      >
        <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/30">
          <Image
            src="/ceo.jpg"
            alt="대표이사 박제선"
            width={112}
            height={112}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="text-center sm:text-left">
          <p className="text-blue-200 text-sm mb-1">대표이사</p>
          <h3 className="text-2xl font-bold mb-1" style={{ color: '#ffffff' }}>박 제 선</h3>
          <p className="text-blue-300 text-sm">(주)올윈비시지 · AWBCG</p>
          <div
            className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium"
            style={{ backgroundColor: 'rgba(0,168,120,0.2)', color: '#4ECCA3' }}
          >
            All Winner Brilliant Consulting Group
          </div>
        </div>
      </div>

      {/* 인사말 본문 */}
      <div className="space-y-8">
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-sm font-bold"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                {idx + 1}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3" style={{ color: 'var(--color-primary)' }}>
                  '{msg.title}'
                </h4>
                <p className="text-gray-600 leading-relaxed">{msg.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 서명 */}
      <div className="mt-10 text-right">
        <p className="text-gray-500 text-sm">(주)올윈비시지 대표이사</p>
        <p className="text-2xl font-bold mt-1" style={{ color: 'var(--color-primary)', fontFamily: 'serif' }}>
          박 제 선
        </p>
      </div>
    </div>
  );
}
