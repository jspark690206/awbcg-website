'use client';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: '340px',
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 좌측 수직 라인 제거 */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 8%, transparent 18%)',
        }}
      />
      {/* 우측 수직 라인 제거 */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, transparent 45%, rgba(255,255,255,0.55) 65%, rgba(255,255,255,0.85) 85%, rgba(255,255,255,0.95) 100%)',
        }}
      />

      {/* 우측 텍스트 오버레이 */}
      <div className="container relative z-10 flex items-center justify-end" style={{ minHeight: '340px' }}>
        <div className="text-right py-8 pr-2" style={{ maxWidth: '55%' }}>
          <p
            className="font-medium mb-3"
            style={{
              color: '#1a3a6a',
              fontSize: '1.1rem',
              letterSpacing: '0.02em',
              textShadow: '0 1px 3px rgba(255,255,255,0.8)',
            }}
          >
            스마트공장/빅데이터/인공지능 구축 전문 컨설팅 그룹
          </p>
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontStyle: 'italic',
              fontWeight: 'bold',
              fontSize: 'clamp(1.4rem, 2.8vw, 2.8rem)',
              color: '#1a3a8a',
              lineHeight: 1.2,
              marginBottom: '0.8rem',
              textShadow: '2px 2px 0 rgba(255,255,255,0.6)',
            }}
          >
            All Winner Brilliant Consulting Group
          </h1>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              color: '#222',
              fontSize: '1.1rem',
              textShadow: '0 1px 3px rgba(255,255,255,0.8)',
            }}
          >
            <a href="/" className="hover:underline" style={{ color: '#0D2B5E' }}>http://www.awbcg.co.kr</a>
          </p>
        </div>
      </div>
    </section>
  );
}
