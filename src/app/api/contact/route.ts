import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  company: z.string().min(1),
  name: z.string().min(1),
  phone: z.string().min(9),
  email: z.string().email(),
  type: z.string().min(1),
  message: z.string().min(10),
  agree: z.boolean().refine((v) => v === true),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // 이메일 전송 (SMTP 환경변수 설정 시 활성화)
    const smtpHost = process.env.SMTP_HOST;
    if (smtpHost) {
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.default.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const now = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

      await transporter.sendMail({
        from: `"올윈비시지 웹사이트" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO ?? 'admin@awbcg.co.kr',
        subject: `[올윈비시지 문의] ${data.type} — ${data.company} ${data.name}`,
        html: `
<div style="font-family:'Malgun Gothic',sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
  <div style="background:linear-gradient(135deg,#0D2B5E,#1A4A8A);padding:24px 32px;">
    <h2 style="color:white;margin:0;font-size:18px;">온라인 문의 접수</h2>
    <p style="color:#93C5FD;margin:4px 0 0;font-size:12px;">${now}</p>
  </div>
  <div style="padding:32px;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${[
        ['문의 유형', data.type],
        ['회사명', data.company],
        ['담당자명', data.name],
        ['연락처', data.phone],
        ['이메일', data.email],
      ].map(([k, v]) => `
        <tr style="border-bottom:1px solid #f3f4f6;">
          <td style="padding:10px 0;color:#6B7280;width:100px;font-weight:600;">${k}</td>
          <td style="padding:10px 0;color:#1F2937;">${v}</td>
        </tr>
      `).join('')}
    </table>
    <div style="margin-top:20px;padding:16px;background:#F9FAFB;border-radius:8px;font-size:14px;line-height:1.8;color:#374151;">
      <strong style="color:#0D2B5E;">문의 내용</strong><br/>
      ${data.message.replace(/\n/g, '<br/>')}
    </div>
  </div>
  <div style="padding:16px 32px;background:#F3F4F6;font-size:11px;color:#9CA3AF;">
    본 메일은 올윈비시지 공식 홈페이지 문의 폼을 통해 자동 발송되었습니다.
  </div>
</div>`,
      });

      // 접수 확인 메일 발신자에게도 발송
      await transporter.sendMail({
        from: `"(주)올윈비시지" <${process.env.SMTP_USER}>`,
        to: data.email,
        subject: `[올윈비시지] 문의가 접수되었습니다 — ${data.type}`,
        html: `
<div style="font-family:'Malgun Gothic',sans-serif;max-width:600px;margin:0 auto;">
  <div style="background:linear-gradient(135deg,#0D2B5E,#1A4A8A);padding:24px 32px;border-radius:12px 12px 0 0;">
    <h2 style="color:white;margin:0;font-size:18px;">문의 접수 확인</h2>
  </div>
  <div style="padding:32px;border:1px solid #e5e7eb;border-top:0;border-radius:0 0 12px 12px;">
    <p style="font-size:15px;color:#1F2937;">${data.name} 담당자님, 안녕하세요.</p>
    <p style="font-size:14px;color:#4B5563;line-height:1.8;">
      올윈비시지에 문의해 주셔서 감사합니다.<br/>
      접수하신 <strong>${data.type}</strong> 문의는 담당자 확인 후 <strong>1~2 영업일 내</strong> 답변드리겠습니다.
    </p>
    <div style="margin:20px 0;padding:16px;background:#F0F9FF;border-left:4px solid #1A7FC4;border-radius:4px;font-size:13px;color:#1E40AF;">
      📞 빠른 상담이 필요하신 경우: <strong>051-343-4047</strong>
    </div>
    <p style="font-size:12px;color:#9CA3AF;">
      (주)올윈비시지 | 부산광역시 북구 덕천로 155 1F | admin@awbcg.co.kr
    </p>
  </div>
</div>`,
      });
    }

    return NextResponse.json({ ok: true, message: '문의가 접수되었습니다.' });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ ok: false, message: '입력값을 확인해 주세요.' }, { status: 400 });
    }
    console.error('[contact API]', err);
    return NextResponse.json({ ok: false, message: '서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' }, { status: 500 });
  }
}
