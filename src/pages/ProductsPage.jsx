import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, CheckCircle, ChevronRight, X, ZoomIn, Plus, Minus, 
  ArrowRight, Menu, Home, Package, Settings, Wrench, 
  Zap, Cpu, Factory, Truck, Shield, Award, ChevronDown
} from "lucide-react";

// ─── IMAGE IMPORTS ────────────────────────────────────────────────────────
// Compression Springs
import compressionImage from "../assets/images/Compression_spring/compression_first.png";
import helicalImage from "../assets/images/Compression_spring/helical_spring.png";
import ironCoilImage from "../assets/images/Compression_spring/iron_spring.png";

// Metal Springs
import heelspringImage from "../assets/images/metal_spring/heel_spring.png";
import industrialSpringImage from "../assets/images/metal_spring/industrial_spring.png";
import mildSpringImage from "../assets/images/metal_spring/mild_steel.png";
import steelSpringImage from "../assets/images/metal_spring/steel_spring.png";
import castIronImage from "../assets/images/metal_spring/cast_spring.png";

// Industrial Springs
import doubleTorsionImage from "../assets/images/industrial_spring/double_torsion.png";
import extensionSpringImage from "../assets/images/industrial_spring/extension_spring.png";
import oilSealImage from "../assets/images/industrial_spring/oil_spring.png";

// Torsion Springs
import industrialTorsionImage from "../assets/images/torsion_spring/industrial_torsion.png";
import torsionBendImage from "../assets/images/torsion_spring/torsion_Spring.png";

// Switch Springs
import electricalSwitchImage from "../assets/images/switch_spring/electric_switch.png";
import electricSwitchImage from "../assets/images/switch_spring/electrical_spring.png";

// Other Springs
import automobileSpringImage from "../assets/images/automobile_spring/automobile.png";
import batteryContactImage from "../assets/images/battery_spring/battery.png";
import coilSpringImage from "../assets/images/coil_spring/coil_spring.png";
import conicalSpringImage from "../assets/images/conical_compression_spring/double_conical.png";
import conicalSingleImage from "../assets/images/conical_spring/conical.png";
import customizedSpringImage from "../assets/images/customize_spring/customize.png";
import hookSpringImage from "../assets/images/hook_spring/hook.png";
import mechanicalSpringImage from "../assets/images/mechnical_spring/mechnical_spring.png";
import mechanicalSealImage from "../assets/images/mechnical_spring/mechnical_seal_spring.png";
import metalRodImage from "../assets/images/metal_rod/metal_rod.png";
import taperSpringImage from "../assets/images/taper_spring/taper.png";
import tensionSpringImage from "../assets/images/tension_spring/tension.png";
import torsionSpringImage from "../assets/images/tension_spring/tension_torsion.png";
import SSValveSpringImage from "../assets/images/Valve_spring/SS_vale.png";
import wireformingSpringImage from "../assets/images/wire_forming_spring/wire_forming.png";
import wireformImage from "../assets/images/wire_from_spring/wire_from.png";

const ORANGE = "#EA580C";

// ─── PRODUCT DATA ──────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: "Compression Springs",
    shortDesc: "Resists compressive forces with high load-bearing capacity.",
    description: "Designed to resist compressive forces with high durability and excellent load-bearing capacity.",
    longDescription: "Our compression springs are manufactured using high-grade steel and advanced coiling technology.",
    image: compressionImage,
    features: ["High tensile strength", "Corrosion resistant", "Custom dimensions", "Various wire gauges"],
    applications: ["Automotive suspensions", "Industrial machinery", "Valve systems", "Heavy equipment"],
    category: "Compression",
    subtypes: [
      { name: "SS Compression Spring", desc: "Stainless steel body, high corrosion resistance.", image: compressionImage, price: "₹ 2.50 / Piece", moq: "5000 Piece", size: "As per Requirement, 0.50 mm", material: "Spring Steel, Stainless Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Helical Compression Spring", desc: "Uniform pitch helix delivering consistent load distribution.", image: helicalImage, price: "₹ 3.00 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Iron Coil Springs", desc: "Heavy-duty cast iron coils for high static load.", image: ironCoilImage, price: "₹ 4.00 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Cast Iron", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 2,
    name: "Metal Springs",
    shortDesc: "Premium metal springs for OEM requirements.",
    description: "Used to absorb and store energy while resisting tension with precision engineering.",
    longDescription: "Our metal springs are designed to operate with precision and reliability.",
    image: steelSpringImage,
    features: ["Precision hooks", "High fatigue life", "Custom tension rates", "Smooth operation"],
    applications: ["Garage doors", "Agricultural equipment", "Medical devices", "Exercise equipment"],
    category: "Metal",
    subtypes: [
      { name: "Extension Spring", desc: "Standard extension spring with precision hooks.", image: heelspringImage, price: "₹ 3.00 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Industrial Metal Spring", desc: "Heavy gauge coils for demanding factory environments.", image: industrialSpringImage, price: "₹ 5.00 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Alloy Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Mild Steel Spring", desc: "Cost-effective and versatile for standard applications.", image: mildSpringImage, price: "₹ 2.00 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Mild Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Steel Spring", desc: "Premium steel springs for high-performance applications.", image: steelSpringImage, price: "₹ 4.50 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Cast Iron Spring", desc: "Ideal for high-compression mechanical systems.", image: castIronImage, price: "₹ 3.50 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Cast Iron", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 3,
    name: "Industrial Springs",
    shortDesc: "Oil seals, torsion & extension springs for extreme environments.",
    description: "Engineered to provide rotational force and torque for various mechanical applications.",
    longDescription: "Our industrial springs are precision-wound to deliver consistent performance.",
    image: oilSealImage,
    features: ["Consistent torque", "Various angles", "Custom winding", "Durable construction"],
    applications: ["Clips & clamps", "Switches", "Hinges", "Industrial controls"],
    category: "Industrial",
    subtypes: [
      { name: "Double Torsion Spring", desc: "Dual-leg design for balanced rotational force.", image: doubleTorsionImage, price: "₹ 4.50 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Extension Springs", desc: "Absorbs and stores tensile energy.", image: extensionSpringImage, price: "₹ 3.00 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Oil Seal Spring", desc: "Seals and retains lubricant in rotating shaft assemblies.", image: oilSealImage, price: "₹ 2.00 / Piece", moq: "5000 Piece", size: "As per Requirement, 0.50 mm", material: "Spring Steel, Stainless steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 4,
    name: "Torsion Springs",
    shortDesc: "Consistent angular torque for rotation-based mechanisms.",
    description: "Custom wire forms for industrial applications with precision manufacturing.",
    longDescription: "We manufacture custom torsion springs to your exact specifications.",
    image: torsionBendImage,
    features: ["Custom shapes", "Multiple materials", "Tight tolerances", "Cost-effective"],
    applications: ["Retaining rings", "Custom brackets", "Wire clips", "Specialized fasteners"],
    category: "Torsion",
    subtypes: [
      { name: "Torsion Spring with Rotation Bend", desc: "Custom bend angles for precise actuation.", image: torsionBendImage, price: "₹ 3.50 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Industrial Torsion Spring", desc: "Heavy-duty torque delivery for industrial systems.", image: industrialTorsionImage, price: "₹ 5.00 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Alloy Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 5,
    name: "Switch Springs",
    shortDesc: "Miniature precision springs for reliable switch actuation.",
    description: "Precision metal springs for switch and electrical applications.",
    longDescription: "We manufacture switch springs in a wide range of materials for reliable actuation.",
    image: electricalSwitchImage,
    features: ["Multiple material grades", "OEM tolerances", "Custom gauges", "High fatigue life"],
    applications: ["OEM machinery", "Factory automation", "Press equipment", "Heavy industry"],
    category: "Switch",
    subtypes: [
      { name: "Electrical Switches Springs", desc: "High-cycle fatigue life for switch assemblies.", image: electricalSwitchImage, price: "₹ 1.50 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Electrical", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Electric Switch Spring", desc: "Micro-precision coils for circuit breakers.", image: electricSwitchImage, price: "₹ 1.80 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Electrical", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 6,
    name: "Conical Springs",
    shortDesc: "Tapered profile springs for compact applications.",
    description: "Conical compression springs with tapered profile design.",
    longDescription: "Our conical springs feature a progressively varying coil diameter for minimal solid height.",
    image: conicalSpringImage,
    features: ["Low solid height", "Anti-buckling design", "Custom taper angles", "Compact profile"],
    applications: ["Battery contacts", "Switches", "Valves", "Space-constrained assemblies"],
    category: "Conical",
    subtypes: [
      { name: "Double Conical Spring", desc: "Symmetrical double-cone profile for balanced load.", image: conicalSpringImage, price: "₹ 4.00 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Conical Compression Spring", desc: "Single taper design with progressive spring rate.", image: conicalSingleImage, price: "₹ 3.50 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 7,
    name: "Mechanical Springs",
    shortDesc: "Precision springs for mechanical and sealing applications.",
    description: "High-performance mechanical springs for dynamic systems.",
    longDescription: "Our mechanical springs are manufactured to the tightest tolerances.",
    image: mechanicalSpringImage,
    features: ["Tight tolerances", "High cycle life", "Custom end types", "Multiple materials"],
    applications: ["Mechanical seals", "Pumps", "Compressors", "General machinery"],
    category: "Mechanical",
    subtypes: [
      { name: "Mechanical Seal Spring", desc: "Precision spring for mechanical face seals.", image: mechanicalSealImage, price: "₹ 3.00 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Stainless Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Mechanical Springs", desc: "General-purpose springs for diverse applications.", image: mechanicalSpringImage, price: "₹ 2.50 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 8,
    name: "Valve Springs",
    shortDesc: "Stainless steel valve springs for high-temperature systems.",
    description: "Precision valve springs in stainless steel for demanding applications.",
    longDescription: "Our valve springs are manufactured from premium stainless steel.",
    image: SSValveSpringImage,
    features: ["High-temp rated", "Corrosion resistant", "Precise spring rates", "Long service life"],
    applications: ["Engine valves", "Industrial valves", "Hydraulic systems", "Pneumatic systems"],
    category: "Valve",
    subtypes: [
      { name: "SS Valve Springs", desc: "Stainless steel springs for high-temperature environments.", image: SSValveSpringImage, price: "₹ 4.50 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Stainless Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 9,
    name: "Automobile Springs",
    shortDesc: "Automotive-grade springs for vehicles.",
    description: "Heavy-duty automobile springs for suspension and engine systems.",
    longDescription: "Our automobile springs meet the rigorous demands of the automotive industry.",
    image: automobileSpringImage,
    features: ["Automotive grade steel", "High cycle fatigue life", "SAE compliant", "Custom spring rates"],
    applications: ["Suspension systems", "Engine assemblies", "Brake systems", "Seat mechanisms"],
    category: "Automobile",
    subtypes: [
      { name: "Automobile Compression Springs", desc: "High-strength springs for automotive applications.", image: automobileSpringImage, price: "₹ 6.00 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Alloy Steel", usage: "Automobile", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 10,
    name: "Tension Springs",
    shortDesc: "High-tension springs for heavy-duty applications.",
    description: "Heavy-duty tension springs for high tensile loads.",
    longDescription: "Our tension springs are precision-wound for strong and consistent pull force.",
    image: tensionSpringImage,
    features: ["High tensile load", "Precision wound", "Custom hook styles", "Durable construction"],
    applications: ["Heavy machinery", "Agricultural equipment", "Garage doors", "Industrial closures"],
    category: "Tension",
    subtypes: [
      { name: "High Tension Spring", desc: "Heavy-duty tension spring for maximum tensile load.", image: tensionSpringImage, price: "₹ 5.00 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Tension Torsion Spring", desc: "Combines torsional and tensile loading.", image: torsionSpringImage, price: "₹ 4.00 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 11,
    name: "Customized Springs",
    shortDesc: "Fully custom springs built to your specifications.",
    description: "Bespoke spring solutions and custom wire forms.",
    longDescription: "We specialize in designing fully customized springs and wire forms.",
    image: customizedSpringImage,
    features: ["Any shape or size", "Custom materials", "Drawing-based production", "Prototype to bulk"],
    applications: ["OEM components", "Special machinery", "Medical devices", "Defence & aerospace"],
    category: "Custom",
    subtypes: [
      { name: "Custom Springs", desc: "Precision springs built to customer drawings.", image: customizedSpringImage, price: "Get Quote", moq: "1000 Piece", size: "As per Drawing", material: "As per Requirement", usage: "Custom", productionCapacity: "Varies by design", deliveryTime: "2–3 Weeks" },
    ],
  },
  {
    id: 12,
    name: "Wire Forms",
    shortDesc: "Industrial wire forms for mechanical assemblies.",
    description: "Precision wire forming springs and components.",
    longDescription: "Our wire forming capabilities produce complex bent wire components.",
    image: wireformImage,
    features: ["Complex geometries", "Tight tolerances", "Multiple wire gauges", "Cost-effective"],
    applications: ["Industrial assemblies", "Clips and retainers", "Brackets", "Custom fasteners"],
    category: "Wire Form",
    subtypes: [
      { name: "Wire Form Springs", desc: "Precision spring and wire form combined.", image: wireformImage, price: "₹ 2.50 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
      { name: "Wire Forming Springs", desc: "Complex bent wire components for assemblies.", image: wireformingSpringImage, price: "₹ 3.00 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 13,
    name: "Hook Springs",
    shortDesc: "Heavy-duty hook springs for tensile applications.",
    description: "Robust hook springs with reinforced end hooks.",
    longDescription: "Our hook springs are engineered for reliable performance under high tensile loads.",
    image: hookSpringImage,
    features: ["Reinforced hooks", "High load rating", "Anti-fatigue design", "Custom hook profiles"],
    applications: ["Industrial hoisting", "Agricultural machinery", "Suspension systems", "Door closures"],
    category: "Hook",
    subtypes: [
      { name: "Heavy Duty Hook Spring", desc: "Reinforced end-hook extension spring.", image: hookSpringImage, price: "₹ 5.50 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Alloy Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 14,
    name: "Coil Springs",
    shortDesc: "Industrial coil springs for compression applications.",
    description: "Precision coil springs for general industrial use.",
    longDescription: "Our industrial coil springs are manufactured from high-quality spring steel.",
    image: coilSpringImage,
    features: ["Consistent spring rate", "Heat treated", "Custom coil counts", "Multiple end types"],
    applications: ["Industrial machinery", "Vibration isolation", "Return mechanisms", "Press tools"],
    category: "Coil",
    subtypes: [
      { name: "Coil Industrial Spring", desc: "Heavy-duty coiled spring for industrial applications.", image: coilSpringImage, price: "₹ 3.50 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 15,
    name: "Taper Springs",
    shortDesc: "Double taper springs for progressive load response.",
    description: "Taper springs with barrel profile design.",
    longDescription: "Taper springs feature a variable coil diameter for progressive spring rate.",
    image: taperSpringImage,
    features: ["Progressive spring rate", "Barrel profile option", "Low solid height", "Lateral stability"],
    applications: ["Shock absorbers", "Vibration damping", "Seating systems", "Heavy vehicle suspensions"],
    category: "Taper",
    subtypes: [
      { name: "Double Taper Spring", desc: "Barrel-profile double-taper spring.", image: taperSpringImage, price: "₹ 4.50 / Piece", moq: "5000 Piece", size: "As per Requirement", material: "Spring Steel", usage: "Industrial", productionCapacity: "10000–20000 piece per day", deliveryTime: "Within Week" },
    ],
  },
  {
    id: 16,
    name: "Metal Rods",
    shortDesc: "Precision knurled metal rods for industrial use.",
    description: "Straight knurled metal rods for grip applications.",
    longDescription: "Our knurled metal rods are precision machined to exact specifications.",
    image: metalRodImage,
    features: ["Diamond/straight knurl patterns", "Precision diameter", "Custom lengths", "Multiple materials"],
    applications: ["Press-fit assemblies", "Anti-rotation pins", "Handles and grips", "Tooling components"],
    category: "Rod",
    subtypes: [
      { name: "Straight Knurled Rod", desc: "Precision-machined knurled rod.", image: metalRodImage, price: "₹ 8.00 / Piece", moq: "1000 Piece", size: "As per Requirement", material: "Mild Steel / SS", usage: "Industrial", productionCapacity: "5000–10000 piece per day", deliveryTime: "Within Week" },
    ],
  },
];

// ─── SIDE MENU COMPONENT ─────────────────────────────────────────────────
function SideMenu({ isOpen, onClose, products, onProductSelect }) {
  const categories = [...new Set(products.map(p => p.category))];
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
        />
      )}

      {/* Side Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 320,
          height: "100%",
          background: "#fff",
          zIndex: 999,
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          boxShadow: "2px 0 20px rgba(0,0,0,0.1)",
          overflowY: "auto",
          fontFamily: "'Inter','Segoe UI',sans-serif",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Menu Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid #F0F0F0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: ORANGE,
            color: "#fff",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <div>
            <span style={{ fontSize: 12, fontWeight: 600, opacity: 0.8 }}>MENU</span>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>Our Products</h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "none",
              borderRadius: 8,
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Content */}
        <div style={{ padding: "16px 0", flex: 1 }}>
          {/* Home Link */}
          <Link
            to="/"
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 24px",
              textDecoration: "none",
              color: "#333",
              fontSize: 14,
              fontWeight: 600,
              transition: "background 0.2s",
              borderBottom: "1px solid #F5F5F5",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#FFF5F0"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            <Home size={18} color={ORANGE} />
            Home
          </Link>

          {/* Category Links */}
          {categories.map((category) => {
            const categoryProducts = products.filter(p => p.category === category);
            const isExpanded = expandedCategory === category;
            const iconMap = {
              "Compression": <Package size={18} />,
              "Metal": <Settings size={18} />,
              "Industrial": <Factory size={18} />,
              "Torsion": <Wrench size={18} />,
              "Switch": <Zap size={18} />,
              "Conical": <ChevronDown size={18} />,
              "Mechanical": <Settings size={18} />,
              "Valve": <Shield size={18} />,
              "Automobile": <Truck size={18} />,
              "Tension": <ArrowRight size={18} />,
              "Custom": <Award size={18} />,
              "Wire Form": <Wrench size={18} />,
              "Hook": <ChevronRight size={18} />,
              "Coil": <Package size={18} />,
              "Taper": <ChevronDown size={18} />,
              "Rod": <Settings size={18} />,
            };

            return (
              <div key={category}>
                <button
                  onClick={() => toggleCategory(category)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "12px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#333",
                    transition: "background 0.2s",
                    borderBottom: "1px solid #F5F5F5",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#FFF5F0"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ color: ORANGE }}>{iconMap[category] || <Package size={18} />}</span>
                    {category}
                    <span style={{ fontSize: 11, color: "#999", fontWeight: 400 }}>
                      ({categoryProducts.length})
                    </span>
                  </span>
                  <ChevronDown
                    size={16}
                    style={{
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s",
                      color: "#999",
                    }}
                  />
                </button>

                {isExpanded && (
                  <div style={{ padding: "4px 0", background: "#FAFAFA" }}>
                    {categoryProducts.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => {
                          onProductSelect(product);
                          onClose();
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          width: "100%",
                          padding: "8px 24px 8px 48px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: 13,
                          color: "#555",
                          transition: "background 0.2s, color 0.2s",
                          textAlign: "left",
                          borderBottom: "1px solid #F5F5F5",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#FFF5F0";
                          e.currentTarget.style.color = ORANGE;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "#555";
                        }}
                      >
                        <span style={{ 
                          width: 6, 
                          height: 6, 
                          borderRadius: "50%", 
                          background: ORANGE,
                          flexShrink: 0,
                          opacity: 0.5,
                        }} />
                        {product.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// ─── IMAGE PLACEHOLDER ─────────────────────────────────────────────────────
function ImgSlot({ src, alt, height = 180, onClick }) {
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
        gap: 6,
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <svg width="28" height="28" fill="none" stroke="#D4B8A8" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span style={{ fontSize: 10, color: "#C4A898", fontFamily: "sans-serif" }}>Add image here</span>
    </div>
  );
}

// ─── IMAGE ZOOM MODAL ──────────────────────────────────────────────────────
function ImageZoomModal({ src, alt, onClose }) {
  const [scale, setScale] = useState(1);
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.88)",
        zIndex: 1100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", background: "#fff", borderRadius: 12, overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            display: "flex",
            gap: 6,
            zIndex: 10,
            background: "rgba(255,255,255,0.95)",
            padding: "5px 8px",
            borderRadius: 8,
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
          }}
        >
          <button
            onClick={() => setScale((p) => Math.max(p - 0.25, 0.5))}
            style={{
              background: "#F0F0F0",
              border: "none",
              borderRadius: 4,
              width: 26,
              height: 26,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Minus size={14} />
          </button>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "#444",
              display: "flex",
              alignItems: "center",
              minWidth: 36,
              justifyContent: "center",
            }}
          >
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => setScale((p) => Math.min(p + 0.25, 3))}
            style={{
              background: "#F0F0F0",
              border: "none",
              borderRadius: 4,
              width: 26,
              height: 26,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Plus size={14} />
          </button>
          <button
            onClick={onClose}
            style={{
              background: ORANGE,
              border: "none",
              borderRadius: 4,
              width: 26,
              height: 26,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={13} color="#fff" />
          </button>
        </div>
        <div
          style={{
            overflow: "auto",
            maxHeight: "88vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            minWidth: 300,
            minHeight: 200,
          }}
        >
          {src ? (
            <img
              src={src}
              alt={alt}
              style={{
                transform: `scale(${scale})`,
                transition: "transform 0.25s",
                maxWidth: "80vw",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
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

// ─── SUBTYPE MODAL ──────────────────────────────────────────────────────────
function SubtypeModal({ product, onClose }) {
  const [zoomImage, setZoomImage] = useState(null);
  if (!product) return null;
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#fff",
            borderRadius: 16,
            width: "100%",
            maxWidth: 640,
            maxHeight: "90vh",
            overflowY: "auto",
            boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
            fontFamily: "'Inter','Segoe UI',sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px 14px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "sticky",
              top: 0,
              background: "#fff",
              zIndex: 2,
              borderBottom: "1px solid #F0F0F0",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: ORANGE,
                }}
              >
                {product.name}
              </span>
              <h2
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#111",
                  margin: "2px 0 0",
                }}
              >
                {product.subtypes.length} {product.subtypes.length === 1 ? "Variant" : "Variants"}
              </h2>
            </div>
            <button
              onClick={onClose}
              style={{
                border: "1px solid #E8E8E8",
                background: "#F5F5F5",
                borderRadius: "50%",
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={14} color="#555" />
            </button>
          </div>

          {/* Subtype cards */}
          <div style={{ padding: "14px 18px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
            {product.subtypes.map((sub, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid #EAEAEA",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ position: "relative" }}>
                  <ImgSlot
                    src={sub.image}
                    alt={sub.name}
                    height={150}
                    onClick={() => setZoomImage({ src: sub.image, alt: sub.name })}
                  />
                  <div
                    onClick={() => setZoomImage({ src: sub.image, alt: sub.name })}
                    style={{
                      position: "absolute",
                      bottom: 8,
                      right: 8,
                      background: "rgba(0,0,0,0.55)",
                      color: "#fff",
                      padding: "3px 8px",
                      borderRadius: 4,
                      fontSize: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      cursor: "pointer",
                    }}
                  >
                    <ZoomIn size={11} /> Click to zoom
                  </div>
                </div>
                <div style={{ padding: "12px 14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span
                      style={{
                        width: 14,
                        height: 3,
                        background: ORANGE,
                        borderRadius: 2,
                        flexShrink: 0,
                      }}
                    />
                    <p style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>
                      {sub.name}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "4px 0 6px" }}>
                    <span style={{ fontSize: 19, fontWeight: 800, color: ORANGE }}>{sub.price}</span>
                    <span style={{ fontSize: 11, color: "#999" }}>Get Latest Price</span>
                  </div>
                  <p style={{ fontSize: 12.5, color: "#666", lineHeight: 1.6, margin: "0 0 10px" }}>
                    {sub.desc}
                  </p>
                  <div
                    style={{
                      background: "#FBF8F5",
                      border: "1px solid #F0EBE5",
                      borderRadius: 8,
                      padding: "10px 12px",
                      marginBottom: 10,
                    }}
                  >
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px 12px", fontSize: 11.5 }}>
                      {[
                        ["Min. Order Qty", sub.moq],
                        ["Size", sub.size],
                        ["Material", sub.material],
                        ["Usage", sub.usage],
                        ["Production Capacity", sub.productionCapacity],
                        ["Delivery Time", sub.deliveryTime],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "2px 0",
                            gap: 4,
                          }}
                        >
                          <span style={{ color: "#999" }}>{label}:</span>
                          <span style={{ fontWeight: 600, color: "#333", textAlign: "right" }}>
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <Link
                      to="/contact"
                      style={{
                        background: ORANGE,
                        color: "#fff",
                        padding: "8px 16px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 700,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      Get Best Quote <ArrowRight size={13} />
                    </Link>
                    <Link
                      to="/contact"
                      style={{
                        background: "#FFF0E6",
                        color: ORANGE,
                        border: `1px solid ${ORANGE}33`,
                        padding: "8px 16px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      Yes! I am Interested
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {zoomImage && (
        <ImageZoomModal
          src={zoomImage.src}
          alt={zoomImage.alt}
          onClose={() => setZoomImage(null)}
        />
      )}
    </>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filterProducts = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  const handleProductSelect = (product) => {
    setActiveProduct(product);
  };

  return (
    <>
      <style>{`
        .pp-card {
          background: #fff;
          border: 1px solid #E8E8E8;
          border-top: 3px solid ${ORANGE};
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow 0.25s, transform 0.25s;
          display: flex;
          flex-direction: column;
          font-family: 'Inter','Segoe UI',sans-serif;
        }
        .pp-card:hover {
          box-shadow: 0 8px 28px rgba(234,88,12,0.13);
          transform: translateY(-4px);
        }
        .pp-see-btn {
          background: none; border: none; padding: 0;
          cursor: pointer; display: inline-flex; align-items: center; gap: 4px;
          font-size: 12px; font-weight: 700; color: ${ORANGE}; font-family: inherit;
        }
        .pp-see-btn:hover { opacity: 0.75; }
        .pp-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .category-btn {
          padding: 6px 16px;
          border-radius: 20px;
          border: 2px solid #E8E8E8;
          background: transparent;
          color: #666;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .category-btn:hover {
          border-color: ${ORANGE};
          color: ${ORANGE};
        }
        .category-btn.active {
          background: ${ORANGE};
          border-color: ${ORANGE};
          color: #fff;
        }
        @media (max-width: 1200px) { .pp-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 900px)  { .pp-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 640px)  { .pp-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; } }
        @media (max-width: 400px)  { .pp-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div
        style={{
          background: "#FAFAF8",
          minHeight: "100vh",
          padding: "48px 20px 64px",
          fontFamily: "'Inter','Segoe UI',sans-serif",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Header with Menu Button */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <button
                onClick={() => setIsSideMenuOpen(true)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 12px",
                  borderRadius: 8,
                  transition: "background 0.2s",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#555",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F0F0F0")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <Menu size={22} color={ORANGE} />
                <span>Menu</span>
              </button>
              <div style={{ flex: 1 }} />
              <Link
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#666",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "8px 12px",
                  borderRadius: 8,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F0F0F0")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <Home size={18} />
                Home
              </Link>
            </div>

            <span
              style={{
                display: "inline-block",
                background: "#FFF0E6",
                color: ORANGE,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 14px",
                borderRadius: 20,
                marginBottom: 12,
              }}
            >
              All Products
            </span>
            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: "#111",
                letterSpacing: "-0.02em",
                margin: "0 0 10px",
              }}
            >
              Our Products
            </h1>
            <div
              style={{
                width: 40,
                height: 3,
                background: ORANGE,
                borderRadius: 2,
                margin: "0 auto 12px",
              }}
            />
            <p
              style={{
                fontSize: 15,
                color: "#666",
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Explore our complete range of {filteredProducts.length} precision-engineered spring solutions
            </p>

            {/* Category Filters */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => filterProducts(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="pp-grid">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="pp-card"
                onClick={() => setActiveProduct(product)}
              >
                <ImgSlot src={product.image} alt={product.name} height={130} />

                <div
                  style={{
                    padding: "12px 14px 14px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 7, marginBottom: 5 }}>
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: ORANGE,
                        flexShrink: 0,
                        marginTop: 4,
                      }}
                    />
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#1A1A1A",
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {product.name}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: 11.5,
                      color: "#777",
                      lineHeight: 1.55,
                      margin: "0 0 10px",
                      flex: 1,
                    }}
                  >
                    {product.shortDesc}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        background: "#FFF0E6",
                        color: ORANGE,
                        padding: "3px 8px",
                        borderRadius: 10,
                      }}
                    >
                      {product.subtypes.length} {product.subtypes.length === 1 ? "variant" : "variants"}
                    </span>
                    <button
                      className="pp-see-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProduct(product);
                      }}
                    >
                      See more <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side Menu */}
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
        products={products}
        onProductSelect={handleProductSelect}
      />

      {activeProduct && (
        <SubtypeModal product={activeProduct} onClose={() => setActiveProduct(null)} />
      )}
    </>
  );
}