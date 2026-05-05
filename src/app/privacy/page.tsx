import { Shield } from 'lucide-react';

export const metadata = { title: '개인정보보호정책' };

export default function PrivacyPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(13,43,94,0.08)' }}>
          <Shield size={20} style={{ color: 'var(--color-primary)' }} />
        </div>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>개인정보보호정책</h1>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-8 text-sm text-gray-700 leading-relaxed">

        <p className="text-gray-500">
          (주)올윈비시지(이하 "회사")는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.
        </p>

        {[
          {
            title: '제1조 (개인정보의 처리목적)',
            content: '회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.\n\n① 온라인 서비스 문의 접수 및 처리\n② 고객 상담 및 불만 처리\n③ 채용 공고 지원자 관리',
          },
          {
            title: '제2조 (개인정보의 처리 및 보유기간)',
            content: '① 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.\n② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.\n\n- 온라인 문의: 문의 처리 완료 후 1년\n- 채용 지원: 채용 절차 완료 후 6개월',
          },
          {
            title: '제3조 (처리하는 개인정보의 항목)',
            content: '회사는 다음의 개인정보 항목을 처리하고 있습니다.\n\n① 온라인 문의\n- 필수항목: 회사명, 담당자명, 연락처, 이메일, 문의내용\n\n② 서비스 로그인(Google 계정)\n- 수집항목: 이름, 이메일 주소, 프로필 사진',
          },
          {
            title: '제4조 (개인정보의 제3자 제공)',
            content: '회사는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.',
          },
          {
            title: '제5조 (정보주체의 권리·의무 및 행사방법)',
            content: '정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.\n\n① 개인정보 열람 요구\n② 오류 등이 있을 경우 정정 요구\n③ 삭제 요구\n④ 처리정지 요구',
          },
          {
            title: '제6조 (개인정보 보호책임자)',
            content: '회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.\n\n▶ 개인정보 보호책임자\n- 성명: 박제선\n- 직책: 대표이사\n- 연락처: 051-343-4047 / admin@awbcg.co.kr',
          },
          {
            title: '제7조 (개인정보처리방침의 변경)',
            content: '이 개인정보처리방침은 2024년 1월 1일부터 적용됩니다.',
          },
        ].map((section) => (
          <section key={section.title}>
            <h2 className="text-base font-bold mb-3" style={{ color: 'var(--color-primary)' }}>{section.title}</h2>
            <p className="whitespace-pre-line text-gray-600">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
