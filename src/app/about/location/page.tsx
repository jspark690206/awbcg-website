import { MapPin, Phone, Printer, Mail, Clock } from 'lucide-react';

export default function LocationPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'rgba(13,43,94,0.08)' }}
        >
          <MapPin size={20} style={{ color: 'var(--color-primary)' }} />
        </div>
        <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>사업장안내</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 지도 */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=35.2082,128.9974&z=17&t=m&hl=ko&output=embed"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="올윈비시지 위치"
          />
        </div>

        {/* 연락처 정보 */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--color-primary)' }}>
              연락처 정보
            </h3>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: '주소', value: '부산광역시 북구 덕천로 155 1F' },
                { icon: Phone, label: '전화', value: '051-343-4047' },
                { icon: Printer, label: '팩스', value: '051-343-4048' },
                { icon: Mail, label: '이메일', value: 'admin@awbcg.co.kr' },
                { icon: Clock, label: '업무시간', value: '평일 09:00 ~ 18:00 (토·일·공휴일 휴무)' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(13,43,94,0.06)' }}
                  >
                    <Icon size={15} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-gray-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 교통 안내 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-base mb-4" style={{ color: 'var(--color-primary)' }}>
              교통 안내
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-semibold mr-2"
                  style={{ backgroundColor: 'rgba(26,127,196,0.1)', color: 'var(--color-secondary)' }}
                >
                  지하철
                </span>
                부산 2호선 덕천역 2번 출구 도보 5분
              </div>
              <div>
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-semibold mr-2"
                  style={{ backgroundColor: 'rgba(0,168,120,0.1)', color: 'var(--color-accent)' }}
                >
                  버스
                </span>
                덕천교차로 정류장 하차
              </div>
              <div>
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-semibold mr-2"
                  style={{ backgroundColor: 'rgba(245,158,11,0.1)', color: '#F59E0B' }}
                >
                  주차
                </span>
                건물 내 주차장 이용 가능
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
