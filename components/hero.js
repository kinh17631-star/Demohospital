import { motion } from "framer-motion";

// ANIMATION VARIANTS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
  },
};

export default function Hero() {
  return (
    <section style={container}>
      {/* ADVANCED GRADIENT OVERLAY */}
      <div style={overlay}></div>

      {/* FLOATING DECORATION (Adds Depth) */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={floatingGlow}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={content}
      >
        <motion.h1 variants={textVariants} style={heading}>
          Your Health, <br /> Our <span style={highlightText}>Mission.</span>
        </motion.h1>

        <motion.div variants={textVariants} style={divider}></motion.div>

        <motion.p variants={textVariants} style={text}>
          Welcome to <span style={{fontWeight: "bold", color: "#fff"}}>Demo Hospital</span>. 
          Experience world-class healthcare with state-of-the-art technology 
          and Meerut's most expert medical team.
        </motion.p>

        <motion.div
          variants={textVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/appointment" style={{ textDecoration: "none" }}>
            <button style={btn}>
              Explore Services
              <span style={btnArrow}>→</span>
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* ANIMATED SCROLL INDICATOR (Very Professional) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={scrollIndicator}
      >
        <div style={mouseIcon}>
          <div style={mouseWheel}></div>
        </div>
        <p style={{fontSize: "10px", marginTop: "5px", letterSpacing: "2px"}}>SCROLL</p>
      </motion.div>
    </section>
  );
}

/* --- ULTRA-PREMIUM HERO STYLES --- */

const container = {
  position: "relative",
  width: "100%",
  height: "100vh", // Full screen for cinematic feel
  backgroundImage: "url('/IMG_4538.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundAttachment: "fixed", // Parallax effect for desktop
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to bottom, rgba(5, 11, 20, 0.8) 0%, rgba(5, 11, 20, 0.4) 50%, rgba(5, 11, 20, 0.9) 100%)",
  zIndex: 1,
};

const floatingGlow = {
  position: "absolute",
  top: "20%",
  left: "10%",
  width: "300px",
  height: "300px",
  background: "#4facfe",
  filter: "blur(150px)",
  zIndex: 1,
};

const content = {
  position: "relative",
  color: "white",
  textAlign: "center",
  zIndex: 2,
  padding: "0 20px",
  maxWidth: "900px",
};

const heading = {
  fontSize: "clamp(45px, 10vw, 85px)", // iPhone par perfect size
  marginBottom: "20px",
  fontWeight: "900",
  lineHeight: "1",
  letterSpacing: "-2px",
  textShadow: "0 10px 30px rgba(0,0,0,0.5)",
};

const highlightText = {
  background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const divider = {
  width: "80px",
  height: "4px",
  background: "#4facfe",
  margin: "0 auto 30px auto",
  borderRadius: "2px",
};

const text = {
  fontSize: "clamp(16px, 2vw, 20px)",
  marginBottom: "40px",
  lineHeight: "1.7",
  color: "#ccc",
  maxWidth: "600px",
  margin: "0 auto 40px auto",
};

const btn = {
  padding: "18px 45px",
  borderRadius: "50px",
  border: "none",
  background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
  color: "#000",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  margin: "0 auto",
  boxShadow: "0 15px 30px rgba(79, 172, 254, 0.3)",
};

const btnArrow = {
  fontSize: "20px",
  transition: "0.3s",
};

const scrollIndicator = {
  position: "absolute",
  bottom: "30px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  opacity: 0.6,
};

const mouseIcon = {
  width: "24px",
  height: "40px",
  border: "2px solid #fff",
  borderRadius: "15px",
  position: "relative",
};

const mouseWheel = {
  width: "4px",
  height: "8px",
  background: "#4facfe",
  position: "absolute",
  top: "8px",
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: "2px",
};
