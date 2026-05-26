"use client";

import { scrollTo } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        paddingTop: 140,
        paddingBottom: 80,
        overflow: "hidden",
        background: "linear-gradient(180deg, #fff7f4 0%, #ffffff 70%, #f0f4ff 100%)",
      }}
    >
      {/* Background halos */}
      <div style={{ position: "absolute", top: -100, left: -60, width: 380, height: 380, background: "rgba(255,143,122,0.35)", filter: "blur(80px)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: 200, right: -120, width: 460, height: 460, background: "rgba(79,124,255,0.28)", filter: "blur(80px)", borderRadius: "50%" }} />

      {/* Floating decorative shapes */}
      <div style={{ position: "absolute", top: 180, right: "12%" }} className="animate-float">
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--coral)", opacity: 0.25 }} />
      </div>
      <div style={{ position: "absolute", top: 320, left: "8%", animationDelay: "1s" }} className="animate-float-soft">
        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--blue)", opacity: 0.35 }} />
      </div>
      <div style={{ position: "absolute", bottom: 200, right: "8%" }} className="animate-float-soft">
        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--coral)", opacity: 0.4 }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[60px] items-center">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <div style={{ 
              display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px",
              borderRadius: "var(--radius-pill)", background: "var(--coral-bg)", color: "var(--coral)",
              fontSize: 13, fontWeight: 800, letterSpacing: "-0.01em", marginBottom: 24
             }}>
              <span className="animate-bounce-soft" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--coral)", display: "inline-block" }}></span>
              유아·아동 체육 전문 교육기관
            </div>

            <h1 style={{
              fontSize: "clamp(40px, 5.6vw, 76px)",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              lineHeight: 1.05,
              margin: 0,
              color: "var(--ink)",
            }}>
              아이의 첫 운동친구,<br/>
              <span style={{ color: "var(--coral)" }}>띵</span><span style={{ color: "var(--blue)" }}>동</span>이 함께해요
            </h1>

            <p style={{
              fontSize: 19,
              lineHeight: 1.65,
              color: "var(--ink-2)",
              marginTop: 28,
              marginBottom: 36,
              maxWidth: 540,
              fontWeight: 500,
            }}>
              안전한 환경에서 마음껏 뛰놀며 건강한 몸과 즐거운 마음을 키워요.
              5세부터 초등까지, 연령별 맞춤 커리큘럼으로 우리 아이의 운동 자신감을 길러드립니다.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button 
                onClick={() => scrollTo("contact")} 
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "16px 28px", borderRadius: "var(--radius-pill)",
                  background: "var(--blue)", color: "var(--white)",
                  fontSize: 16, fontWeight: 800,
                  boxShadow: "var(--shadow-blue)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "var(--blue-dark)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "var(--blue)"; }}
              >
                무료 상담 신청하기
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
              <button 
                onClick={() => scrollTo("programs")} 
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "16px 28px", borderRadius: "var(--radius-pill)",
                  background: "var(--white)", color: "var(--ink)",
                  border: "1.5px solid var(--line-2)",
                  fontSize: 16, fontWeight: 800,
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--white)"; e.currentTarget.style.borderColor = "var(--ink)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--white)"; e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.borderColor = "var(--line-2)"; }}
              >
                프로그램 둘러보기
              </button>
            </div>

            {/* Trust stats */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24, marginTop: 64,
              paddingTop: 32, borderTop: "1px solid var(--line)",
            }}>
              {[
                { n: "200+", l: "제휴 유치원·어린이집" },
                { n: "5,000명", l: "누적 수강생" },
                { n: "8년", l: "아동 체육 운영 노하우" },
              ].map((s) => (
                <div key={s.l}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                    {s.n}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-3)", marginTop: 8 }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div className="animate-fade-up relative h-[400px] lg:h-[580px] mt-12 lg:mt-0" style={{ animationDelay: "0.2s" }}>

            {/* Main character image — large floating */}
            <div style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "92%",
              filter: "drop-shadow(0 24px 40px rgba(50,67,92,0.18))",
            }} className="animate-float">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo-horizontal.png" alt="띵동 캐릭터" style={{ width: "100%" }} />
            </div>

            {/* Sticker labels */}
            <div style={{
              position: "absolute", top: 40, right: "5%",
              padding: "14px 20px",
              background: "var(--white)",
              borderRadius: 20,
              boxShadow: "var(--shadow-md)",
              display: "flex", alignItems: "center", gap: 10,
              transform: "rotate(6deg)",
            }} className="animate-float-soft">
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--coral-bg)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "var(--ink-3)", letterSpacing: "0.08em" }}>SAFE & FUN</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "var(--ink)" }}>안전 매뉴얼 100%</div>
              </div>
            </div>

            <div style={{
              position: "absolute", bottom: 100, left: 0,
              padding: "14px 20px",
              background: "var(--white)",
              borderRadius: 20,
              boxShadow: "var(--shadow-md)",
              display: "flex", alignItems: "center", gap: 10,
              transform: "rotate(-5deg)",
              animationDelay: "0.5s"
            }} className="animate-float-soft">
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--blue-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "var(--ink-3)", letterSpacing: "0.08em" }}>PARENTS LOVE</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "var(--ink)" }}>학부모 만족도 98%</div>
              </div>
            </div>

            <div style={{
              position: "absolute", bottom: 30, right: "10%",
              width: 84, height: 84, borderRadius: "50%",
              background: "var(--yellow)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: 11, letterSpacing: "0.1em",
              color: "var(--ink)", textAlign: "center",
              boxShadow: "0 12px 24px rgba(255, 217, 100, 0.6)",
            }} className="animate-spin-slow">
              <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ position: "absolute" }}>
                <defs>
                  <path id="circlePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"/>
                </defs>
                <text fontSize="11" fontWeight="900" fill="var(--ink)" letterSpacing="2">
                  <textPath href="#circlePath">★ HAPPY · KIDS · DDINGDONG · </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
