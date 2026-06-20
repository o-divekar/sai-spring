import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, X, ChevronRight, ZoomIn, Plus, Minus } from "lucide-react";
import compressionImage from "../assets/images/Compression_spring/compression_first.png";
import helicalImage from "../assets/images/Compression_spring/helical_spring.png";
import ironCoilImage from "../assets/images/Compression_spring/iron_spring.png";

import heelspringImage from "../assets/images/metal_spring/heel_spring.png";
import industrialSpringImage from "../assets/images/metal_spring/industrial_spring.png";
import mildSpringImage from "../assets/images/metal_spring/mild_steel.png";
import steelSpringImage from "../assets/images/metal_spring/steel_spring.png"
import castIronImage from "../assets/images/metal_spring/cast_spring.png";

import doubleTorsionImage from "../assets/images/industrial_spring/double_torsion.png";
import extensionSpringImage from "../assets/images/industrial_spring/extension_spring.png";
import oilSealImage from "../assets/images/industrial_spring/oil_spring.png";

import industrialTorsionImage from "../assets/images/torsion_spring/industrial_torsion.png";
import torsionBendImage from "../assets/images/torsion_spring/torsion_Spring.png";

import electricalSwitchImage from "../assets/images/switch_spring/electric_switch.png";
import electricSwitchImage from "../assets/images/switch_spring/electrical_spring.png";

const ORANGE = "#EA580C"; // orange-600

const categories = [
  {
    id: "compression",
    name: "Compression Spring",
    shortDesc: "Resists compressive forces with high load-bearing capacity.",
    image: ironCoilImage,
    subtypes: [
      {
        name: "SS Compression Spring",
        desc: "Stainless steel body, high corrosion resistance — ideal for food, pharma & marine use.",
        image: compressionImage,
        price: "₹ 2.50 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement, 0.50 mm",
        material: "Spring Steel, Stainless steel",
        shape: "Round",
        usage: "Industrial",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription:
          "We are engaged in offering SS Compression Spring to our clients. Our range of all products is widely appreciated by our clients.",
      },
      {
        name: "Helical Compression Spring",
        desc: "Uniform pitch helix delivering consistent load distribution across the full compression range.",
        image: helicalImage,
        price: "₹ 3.00 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement",
        material: "Spring Steel",
        shape: "Round",
        usage: "Industrial",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription:
          "Our Helical Compression Springs are precision engineered for consistent performance.",
      },
      {
        name: "Iron Coil Springs",
        desc: "Heavy-duty cast iron coils engineered for high static load in press and stamping equipment.",
        image: ironCoilImage,
        price: "₹ 4.00 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement",
        material: "Cast Iron",
        shape: "Round",
        usage: "Industrial",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription: "Heavy-duty iron coil springs for demanding industrial applications.",
      },
    ],
  },
  {
    id: "metal",
    name: "Metal Spring",
    shortDesc: "Mild steel, cast iron & alloy springs for OEM requirements.",
    image: steelSpringImage,
    subtypes: [
      {
        name: "Cast Iron Spring",
        desc: "Ideal for high-compression mechanical systems where rigidity and mass are critical.",
        image: castIronImage,
        price: "₹ 3.50 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement",
        material: "Cast Iron",
        shape: "Round",
        usage: "Industrial",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription: "Premium cast iron springs for heavy-duty mechanical systems.",
      },
      {
        name: "Mild Steel Compression Spring",
        desc: "Cost-effective and versatile — wide range of standard industrial applications.",
        image: mildSpringImage,
        price: "₹ 2.00 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement",
        material: "Mild Steel",
        shape: "Round",
        usage: "Industrial",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription: "Cost-effective mild steel springs for standard industrial applications.",
      },
      {
        name: "Industrial Metal Spring",
        desc: "Heavy gauge coils for demanding factory environments requiring long cycle life.",
        image: industrialSpringImage,
        price: "₹ 5.00 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement",
        material: "Alloy Steel",
        shape: "Round",
        usage: "Industrial",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription: "Heavy-duty industrial metal springs for demanding environments.",
      },
      {
        name: "Helical Compression Spring",
        desc: "Multi-material helical coil with custom pitches, wire diameters, and end treatments.",
        image: helicalImage,
        price: "₹ 3.00 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement",
        material: "Spring Steel",
        shape: "Round",
        usage: "Industrial",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription: "Custom helical compression springs with various material options.",
      },
    ],
  },
  {
    id: "industrial",
    name: "Industrial Spring",
    shortDesc: "Oil seals, torsion & extension springs for extreme environments.",
    image: doubleTorsionImage,
    subtypes: [
      {
        name: "Oil Seal Spring",
        desc: "Seals and retains lubricant in rotating shaft assemblies — precision ground ends for leak-proof mating.",
        image: oilSealImage,
        price: "₹ 2.00 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement, 0.50 mm",
        material: "Spring Steel, Stainless steel",
        shape: "Round",
        usage: "Industrial",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription:
          "We are engaged in offering Oil Seal Spring to our clients. Our range of all products is widely appreciated by our clients.",
      },
      {
        name: "Double Torsion Spring",
        desc: "Dual-leg design delivering balanced rotational force for symmetrical hinge and latch systems.",
        image: doubleTorsionImage,
        price: "₹ 4.50 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement",
        material: "Spring Steel",
        shape: "Round",
        usage: "Industrial",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription: "Double torsion springs for balanced rotational force applications.",
      },
      {
        name: "Extension Springs",
        desc: "Absorbs and stores tensile energy — ideal for pull-back mechanisms in agricultural machinery.",
        image: extensionSpringImage,
        price: "₹ 3.00 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement",
        material: "Spring Steel",
        shape: "Round",
        usage: "Industrial",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription: "High-quality extension springs for tensile energy absorption.",
      },
    ],
  },
  {
    id: "torsion",
    name: "Torsion Spring",
    shortDesc: "Consistent angular torque for rotation-based mechanisms.",
    image: industrialSpringImage,
    subtypes: [
      {
        name: "Torsion Spring with Rotation Bend",
        desc: "Custom bend angles and leg lengths for precise actuation in clips, hinges, and door closers.",
        image: torsionBendImage,
        price: "₹ 3.50 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement",
        material: "Spring Steel",
        shape: "Round",
        usage: "Industrial",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription: "Custom torsion springs with rotation bend for precise actuation.",
      },
      {
        name: "Industrial Torsion Spring",
        desc: "Heavy-duty torque delivery for industrial door systems, valve actuators, and garage mechanisms.",
        image: industrialTorsionImage,
        price: "₹ 5.00 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement",
        material: "Alloy Steel",
        shape: "Round",
        usage: "Industrial",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription: "Heavy-duty torsion springs for industrial applications.",
      },
    ],
  },
  {
    id: "switch",
    name: "Switch Spring",
    shortDesc: "Miniature precision springs for reliable switch actuation.",
    image: electricalSwitchImage,
    subtypes: [
      {
        name: "Electrical Switches Springs",
        desc: "High-cycle fatigue life engineered for toggle, rocker, and micro-switch assemblies.",
        image: electricalSwitchImage,
        price: "₹ 1.50 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement",
        material: "Spring Steel",
        shape: "Round",
        usage: "Electrical",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription: "Precision springs for electrical switch applications.",
      },
      {
        name: "Electric Switch Spring",
        desc: "Micro-precision coils with consistent return force for circuit breakers and electrical contactors.",
        image: electricSwitchImage,
        price: "₹ 1.80 / Piece",
        moq: "5000 Piece",
        size: "As per Requirement",
        material: "Spring Steel",
        shape: "Round",
        usage: "Electrical",
        countryOfOrigin: "Made in India",
        productionCapacity: "10000–20000 piece per day",
        deliveryTime: "Within Week",
        fullDescription: "Micro-precision springs for circuit breakers and electrical contactors.",
      },
    ],
  },
];

// ─── IMAGE PLACEHOLDER ───────────────────────────────────────────────────────
function ImgSlot({ src, alt, height = 200, onClick }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        style={{ width: "100%", height, objectFit: "cover", display: "block", cursor: onClick ? "pointer" : "default" }}
      />
    );
  }
  return (
    <div
      onClick={onClick}
      style={{
        width: "100%",
        height,
        background: "#F5EEE8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        cursor: "pointer",
      }}
    >
      <svg width="36" height="36" fill="none" stroke="#D4B8A8" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span style={{ fontSize: 12, color: "#C4A898" }}>Add image here</span>
    </div>
  );
}

// ─── IMAGE ZOOM MODAL ────────────────────────────────────────────────────────
function ImageZoomModal({ src, alt, onClose }) {
  const [scale, setScale] = useState(1);
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)",
        zIndex: 1100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
      }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", background: "#fff", borderRadius: 12, overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: 10, right: 10, display: "flex", gap: 6, zIndex: 10,
          background: "rgba(255,255,255,0.95)", padding: "5px 8px", borderRadius: 8,
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
        }}>
          {[
            { icon: <Minus size={14} />, action: () => setScale(p => Math.max(p - 0.25, 0.5)) },
            { icon: <Plus size={14} />, action: () => setScale(p => Math.min(p + 0.25, 3)) },
          ].map((btn, i) => (
            <button key={i} onClick={btn.action} style={{
              background: "#F0F0F0", border: "none", borderRadius: 4, width: 26, height: 26,
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            }}>{btn.icon}</button>
          ))}
          <span style={{ fontSize: 11, fontWeight: 600, color: "#444", display: "flex", alignItems: "center", minWidth: 36, justifyContent: "center" }}>
            {Math.round(scale * 100)}%
          </span>
          <button onClick={onClose} style={{
            background: ORANGE, border: "none", borderRadius: 4, width: 26, height: 26,
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}>
            <X size={13} color="#fff" />
          </button>
        </div>
        <div style={{ overflow: "auto", maxHeight: "88vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, minWidth: 300, minHeight: 200 }}>
          {src ? (
            <img src={src} alt={alt} style={{ transform: `scale(${scale})`, transition: "transform 0.25s", maxWidth: "80vw", maxHeight: "80vh", objectFit: "contain" }} />
          ) : (
            <div style={{ textAlign: "center", color: "#aaa", padding: 40 }}>
              <svg width="48" height="48" fill="none" stroke="#D4B8A8" strokeWidth="1.2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <p style={{ marginTop: 8, fontSize: 13 }}>No image added yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── PRODUCT DETAIL MODAL ────────────────────────────────────────────────────
function Modal({ cat, onClose }) {
  const [zoomImage, setZoomImage] = useState(null);

  if (!cat) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)",
          zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16,
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#fff", borderRadius: 16, width: "100%",
            maxWidth: 680, maxHeight: "90vh", overflowY: "auto",
            boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
          }}
        >
          {/* Sticky header */}
          <div style={{
            padding: "18px 22px 16px", display: "flex", justifyContent: "space-between",
            alignItems: "center", position: "sticky", top: 0, background: "#fff",
            zIndex: 2, borderBottom: "1px solid #F0F0F0",
          }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: ORANGE }}>
                {cat.name}
              </span>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111", margin: "2px 0 0" }}>
                {cat.subtypes.length} Spring Variants
              </h2>
            </div>
            <button onClick={onClose} style={{
              border: "1px solid #E8E8E8", background: "#F5F5F5", borderRadius: "50%",
              width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            }}>
              <X size={16} color="#555" />
            </button>
          </div>

          {/* Subtype cards */}
          <div style={{ padding: "18px 22px 28px", display: "flex", flexDirection: "column", gap: 18 }}>
            {cat.subtypes.map((sub, i) => (
              <div key={i} style={{
                background: "#fff", border: "1px solid #EAEAEA", borderRadius: 14,
                overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}>
                {/* Image */}
                <div style={{ position: "relative" }}>
                  <ImgSlot src={sub.image} alt={sub.name} height={200} onClick={() => setZoomImage({ src: sub.image, alt: sub.name })} />
                  <div
                    onClick={() => setZoomImage({ src: sub.image, alt: sub.name })}
                    style={{
                      position: "absolute", bottom: 10, right: 10, background: "rgba(0,0,0,0.6)",
                      color: "#fff", padding: "4px 10px", borderRadius: 4, fontSize: 11,
                      display: "flex", alignItems: "center", gap: 5, cursor: "pointer",
                    }}
                  >
                    <ZoomIn size={12} /> Click to zoom
                  </div>
                </div>

                <div style={{ padding: "16px 18px" }}>
                  {/* Name */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <span style={{ width: 18, height: 3, background: ORANGE, borderRadius: 2, flexShrink: 0 }} />
                    <p style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>{sub.name}</p>
                  </div>

                  {/* Price */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, margin: "6px 0 8px" }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: ORANGE }}>{sub.price}</span>
                    <span style={{ fontSize: 12, color: "#999" }}>Get Latest Price</span>
                  </div>

                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, margin: "0 0 12px" }}>{sub.desc}</p>

                  {/* Details table */}
                  <div style={{
                    background: "#FBF8F5", border: "1px solid #F0EBE5",
                    borderRadius: 8, padding: "12px 14px", marginBottom: 12,
                  }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 16px", fontSize: 13 }}>
                      {[
                        ["Min. Order Qty", sub.moq],
                        ["Size", sub.size],
                        ["Material", sub.material],
                        ["Shape", sub.shape],
                        ["Usage", sub.usage],
                        ["Country of Origin", sub.countryOfOrigin],
                      ].map(([label, value]) => (
                        <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "3px 0", gap: 4 }}>
                          <span style={{ color: "#999" }}>{label}:</span>
                          <span style={{ fontWeight: 600, color: "#333", textAlign: "right" }}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, margin: "0 0 12px", fontStyle: "italic" }}>
                    {sub.fullDescription}
                  </p>

                  {/* Additional info */}
                  <div style={{
                    background: "#FFF5F0", border: "1px solid #FFE4D4",
                    borderRadius: 6, padding: "8px 14px", marginBottom: 14, fontSize: 12, color: "#666",
                  }}>
                    <span style={{ fontWeight: 700, color: "#444" }}>Additional Information: </span>
                    Production Capacity: {sub.productionCapacity} &nbsp;·&nbsp; Delivery Time: {sub.deliveryTime}
                  </div>

                  {/* CTA buttons */}
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <a href="/contact" style={{
                      background: ORANGE, color: "#fff", border: "none", padding: "10px 20px",
                      borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer",
                      textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                    }}>
                      Get Best Quote <ArrowRight size={14} />
                    </a>
                    <a href="/contact" style={{
                      background: "#FFF0E6", color: ORANGE, border: `1px solid ${ORANGE}22`,
                      padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                      cursor: "pointer", textDecoration: "none",
                    }}>
                      Yes! I am Interested
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {zoomImage && <ImageZoomModal src={zoomImage.src} alt={zoomImage.alt} onClose={() => setZoomImage(null)} />}
    </>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function Products() {
  const [activeCat, setActiveCat] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .sp-card {
          background: #fff;
          border: 1px solid #E8E8E8;
          border-top: 4px solid ${ORANGE};
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow 0.3s, transform 0.3s;
          display: flex;
          flex-direction: column;
        }
        .sp-card:hover {
          box-shadow: 0 10px 32px rgba(234,88,12,0.16);
          transform: translateY(-6px);
        }
        .sp-see-btn {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          font-weight: 700;
          color: ${ORANGE};
          font-family: inherit;
        }
        .sp-see-btn:hover { opacity: 0.75; }
        .sp-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
        }
        .sp-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: ${ORANGE};
          color: #fff;
          border: none;
          padding: 14px 34px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s, transform 0.15s;
          text-decoration: none;
        }
        .sp-all-btn:hover { background: #C2410C; transform: translateY(-2px); }
        @media (max-width: 1200px) { .sp-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; } }
        @media (max-width: 992px) { .sp-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; } }
        @media (max-width: 700px)  { .sp-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; } }
        @media (max-width: 420px)  { .sp-grid { grid-template-columns: 1fr; gap: 12px; } }
      `}</style>

      <section style={{
        background: "#FAFAF8",
        padding: "56px 24px 64px",
        fontFamily: "'Inter','Segoe UI',sans-serif",
      }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span style={{
              display: "inline-block", background: "#FFF0E6", color: ORANGE,
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "5px 18px", borderRadius: 20, marginBottom: 14,
            }}>
              Our Range
            </span>
            <h2 style={{
              fontSize: "clamp(32px, 4.5vw, 44px)", fontWeight: 800,
              color: "#111", letterSpacing: "-0.02em", margin: "0 0 12px",
            }}>
              Our Products
            </h2>
            <div style={{ width: 48, height: 3, background: ORANGE, borderRadius: 2, margin: "0 auto 14px" }} />
            <p style={{ fontSize: 16, color: "#666", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
              Precision-engineered spring solutions for every industrial need
            </p>
          </div>

          {/* Cards */}
          <div className="sp-grid">
            {categories.map((cat) => (
              <div key={cat.id} className="sp-card" onClick={() => setActiveCat(cat)}>
                <ImgSlot src={cat.image} alt={cat.name} height={180} />

                <div style={{ padding: "16px 18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                    <span style={{
                      width: 10, height: 10, borderRadius: "50%", background: ORANGE,
                      flexShrink: 0, marginTop: 5,
                    }} />
                    <p style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", margin: 0, lineHeight: 1.4 }}>
                      {cat.name}
                    </p>
                  </div>

                  <p style={{ fontSize: 13, color: "#777", lineHeight: 1.6, margin: "0 0 16px", flex: 1 }}>
                    {cat.shortDesc}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600,
                      background: "#FFF0E6", color: ORANGE,
                      padding: "4px 10px", borderRadius: 12,
                    }}>
                      {cat.subtypes.length} variants
                    </span>
                    <button
                      className="sp-see-btn"
                      onClick={(e) => { e.stopPropagation(); setActiveCat(cat); }}
                    >
                      See more <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── View All Products button ── */}
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <button
              className="sp-all-btn"
              onClick={() => navigate("/products-page")}
            >
              View All Products <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {activeCat && <Modal cat={activeCat} onClose={() => setActiveCat(null)} />}
    </>
  );
}