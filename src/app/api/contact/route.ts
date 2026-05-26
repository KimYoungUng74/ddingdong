import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, age, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "naver",
      host: "smtp.naver.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NAVER_USER,
        pass: process.env.NAVER_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NAVER_USER,
      to: "titania32@naver.com",
      subject: `[문의접수] ${name}님의 상담 신청입니다.`,
      text: `
        이름: ${name}
        연락처: ${phone}
        자녀 연령: ${age || "미입력"}
        문의 내용: ${message || "내용 없음"}
      `,
      html: `
        <h3>새로운 상담 신청이 접수되었습니다.</h3>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>연락처:</strong> ${phone}</p>
        <p><strong>자녀 연령:</strong> ${age || "미입력"}</p>
        <p><strong>문의 내용:</strong></p>
        <p>${message ? message.replace(/\n/g, "<br>") : "내용 없음"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
