import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";

import founderImage from "../assets/images/team_images/founder.jpeg";
import operatingimage from "../assets/images/team_images/Operation_manager.jpeg";

const ORANGE = "#EA580C";

const teamMembers = [
  {
    id: 1,
    image: founderImage,
    name: "Mr. Sunil Satam",
    role: "Founder & CEO",
    bio: "With over 25 years of experience in spring manufacturing, leading the company with vision and expertise.",
    email: "xyz@saispringworks.com",
    expertise: ["Strategic Planning", "Business Development", "Industry 4.0"],
  },
  {
    id: 2,
    image: operatingimage,
    name: "Mr. Siddhant Satam",
    role: "Production Manager",
    bio: "Expert in optimizing manufacturing processes and ensuring operational excellence across all production lines.",
    email: "abc@saispringworks.com",
    expertise: ["Lean Manufacturing", "Production Planning", "Quality Control"],
  },
];

export default function Team() {
  return (
    <>
      <style>{`
        .team-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #F0F0F0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          transition: box-shadow 0.3s, transform 0.3s;
          display: flex;
          flex-direction: column;
        }
        .team-card:hover {
          box-shadow: 0 12px 40px rgba(234,88,12,0.14);
          transform: translateY(-6px);
        }
        .team-img-wrap {
          position: relative;
          height: 300px;
          background: linear-gradient(135deg, ${ORANGE}, #C2410C);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .team-img {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          object-position: 50% 20%; /* ← Shift image down to reveal top (hair) */
          border: 4px solid rgba(255,255,255,0.35);
          transition: transform 0.3s;
          position: relative;
          z-index: 1;
          display: block;
          margin: 0 auto;
        }
        .team-card:hover .team-img { transform: scale(1.07); }
        .team-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.52);
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          z-index: 2;
        }
        .team-card:hover .team-overlay { opacity: 1; }
        .team-icon-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background 0.2s;
          color: ${ORANGE};
        }
        .team-icon-btn:hover { background: ${ORANGE}; }
        .team-icon-btn:hover svg { color: #fff !important; stroke: #fff !important; }
        .team-bottom-bar {
          height: 3px;
          background: linear-gradient(90deg, ${ORANGE}, #C2410C);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s;
        }
        .team-card:hover .team-bottom-bar { transform: scaleX(1); }
        .skill-tag {
          font-size: 11px;
          font-weight: 600;
          background: #FFF0E6;
          color: ${ORANGE};
          padding: 4px 10px;
          border-radius: 20px;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 420px));
          gap: 32px;
          justify-content: center;
        }
        @media (max-width: 700px) {
          .team-grid { grid-template-columns: 1fr; }
        }
        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: ${ORANGE};
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: gap 0.2s;
        }
        .contact-link:hover { gap: 10px; }
        .cta-box {
          background: linear-gradient(135deg, #FFF5F0, #FFF0E6);
          border: 1px solid #FFE4D4;
          border-radius: 20px;
          padding: 48px 32px;
          text-align: center;
          margin-top: 64px;
        }
      `}</style>

      <section style={{
        padding: "64px 24px 80px",
        background: "linear-gradient(180deg, #FAFAF8 0%, #fff 100%)",
        fontFamily: "'Inter','Segoe UI',sans-serif",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* ── Header ── */}
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{
              display: "inline-block",
              background: "#FFF0E6", color: ORANGE,
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "5px 18px",
              borderRadius: 20, marginBottom: 14,
            }}>
              Our Leadership
            </span>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800, color: "#111",
              letterSpacing: "-0.02em", margin: "0 0 12px",
            }}>
              Meet Our Team
            </h2>
            <div style={{ width: 48, height: 3, background: ORANGE, borderRadius: 2, margin: "0 auto 16px" }} />
            <p style={{ fontSize: 16, color: "#666", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Dedicated professionals committed to delivering excellence in every spring we manufacture
            </p>
          </div>

          {/* ── Team Cards ── */}
          <div className="team-grid">
            {teamMembers.map((member) => {
              const firstName = member.name.split(" ").slice(1).join(" ");
              return (
                <div key={member.id} className="team-card">

                  {/* Image area */}
                  <div className="team-img-wrap">
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)",
                    }} />

                    {member.image ? (
                      <img src={member.image} alt={member.name} className="team-img" />
                    ) : (
                      <div className="team-img" style={{
                        background: "rgba(255,255,255,0.18)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 56,
                      }}>👤</div>
                    )}

                    {/* Hover overlay – only email icon */}
                    <div className="team-overlay">
                      <a href={`mailto:${member.email}`} className="team-icon-btn" aria-label="Email">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: "#111", margin: "0 0 4px" }}>
                      {member.name}
                    </h3>
                    <p style={{ fontSize: 13, fontWeight: 700, color: ORANGE, margin: "0 0 12px", letterSpacing: "0.02em" }}>
                      {member.role}
                    </p>
                    <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.7, margin: "0 0 16px" }}>
                      {member.bio}
                    </p>

                    {/* Expertise tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 20 }}>
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>

                    {/* Contact link */}
                    <Link to="/contact" className="contact-link" style={{ marginTop: "auto" }}>
                      Contact {firstName}
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Animated bottom accent bar */}
                  <div className="team-bottom-bar" />
                </div>
              );
            })}
          </div>

          {/* ── Join Our Team CTA ── */}
          <div className="cta-box">
            <span style={{
              display: "inline-block", background: "#FFE4D4", color: ORANGE,
              fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "4px 14px", borderRadius: 20, marginBottom: 16,
            }}>
              We're Hiring
            </span>
            <h3 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#111", margin: "0 0 12px" }}>
              Want to Join Our Team?
            </h3>
            <p style={{ fontSize: 15, color: "#666", margin: "0 auto 28px", maxWidth: 460, lineHeight: 1.7 }}>
              We're always looking for talented individuals who are passionate about precision engineering.
            </p>
            <Link
              to="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: ORANGE, color: "#fff",
                padding: "13px 32px", borderRadius: 10,
                fontSize: 15, fontWeight: 700, textDecoration: "none",
                boxShadow: "0 4px 16px rgba(234,88,12,0.3)",
                transition: "background 0.2s",
              }}
            >
              View Open Positions <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}