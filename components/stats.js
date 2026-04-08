import { motion } from "framer-motion";

// ANIMATION VARIANTS (Snappy Spring Physics)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.8 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 10 } // Bouncy effect
  }
};

export default function Stats() {
  const data = [
    { number: "15,000+", label: "Happy Patients", icon: "👥" },
    { number: "120+", label: "Expert Doctors", icon: "👨‍⚕️" },
    { number: "24/7", label: "Emergency Care", icon: "🚑" },
    { number: "25+", label: "Years Excellence", icon: "🏆" }
  ];

  return (
    <section style={container}>
      {/* Background Subtle Gradient */}
      <div style={bgGlow}></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={grid}
      >
        {data.map((item, i) => (
          <motion.div 
            key={i} 
            variants={cardVariants}
            style={card}
            whileHover={{ 
              scale: 1.05, 
              background: "rgba(255, 255, 255, 0.08)",
              boxShadow: "0 20px 40px rgba(79, 172, 254, 0.2)" 
            }}
          >
            {/* ICON & NUMBER COMBO */}
            <div style={iconBox}>{item.icon}</div>
            
            <motion.h2 
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
              style={numberStyle}
            >
              {item.number}
            </motion.h2>

            <div style={divider}></div>
            
            <p style={labelStyle}>{item.label}</p>

            {/* Subtle Reflection Effect */}
            <div style={reflection}></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* --- ULTRA-MODERN STATS STYLES --- */

const container = {
  position: "relative",
  padding: "80px 20px",
  background: "#050b14", // Website dark theme match
  overflow: "hidden"
};

const bgGlow = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  background: "radial-gradient(circle at 50% 50%, rgba(13, 110, 253, 0.05) 0%, transparent 70%)",
  zIndex: 0
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "25px",
  maxWidth: "1200px",
  margin: "0 auto",
  position: "relative",
  zIndex: 1
};

const card = {
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(12px)",
  padding: "40px 20px",
  borderRadius: "24px",
  textAlign: "center",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  transition: "0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  position: "relative",
  overflow: "hidden",
  willChange: "transform, opacity",
  WebkitBackfaceVisibility: "hidden",
};

const iconBox = {
  fontSize: "24px",
  marginBottom: "15px",
  opacity: 0.8
};

const numberStyle = {
  fontSize: "42px",
  fontWeight: "900",
  background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "10px",
  letterSpacing: "-1px"
};

const divider = {
  width: "30px",
  height: "2px",
  background: "rgba(79, 172, 254, 0.3)",
  margin: "0 auto 15px auto",
  borderRadius: "2px"
};

const labelStyle = {
  fontSize: "14px",
  color: "#888",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "1.5px"
};

const reflection = {
  position: "absolute",
  top: "-50%",
  left: "-50%",
  width: "200%",
  height: "200%",
  background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
  pointerEvents: "none"
};
