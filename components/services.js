import { motion } from "framer-motion";

// ANIMATION VARIANTS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Har service card ek ke baad ek aayega
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

export default function Services() {
  const services = [
    { title: "Cardiology", desc: "Advanced heart care with cutting-edge diagnostic and surgical tools.", icon: "❤️" },
    { title: "Neurology", desc: "Expert treatment for brain, spine, and complex nervous system disorders.", icon: "🧠" },
    { title: "Orthopedics", desc: "Comprehensive bone and joint care with modern replacement surgeries.", icon: "🦴" },
    { title: "Pediatrics", desc: "Dedicated and compassionate healthcare services for children and infants.", icon: "👶" },
    { title: "Emergency Care", desc: "Round-the-clock emergency support with trauma care specialists.", icon: "🚑" },
    { title: "Laboratory", desc: "High-precision testing and fast reporting with automated systems.", icon: "🧪" }
  ];

  return (
    <section style={container}>
      {/* SECTION HEADER */}
      <div style={headerContent}>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={subTitle}
        >
          OUR EXPERTISE
        </motion.span>
        <motion.h2 
          style={heading}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          World-Class <span style={{color: "#4facfe"}}>Medical Services</span>
        </motion.h2>
        <div style={underline}></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={grid}
      >
        {services.map((item, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            style={card}
            whileHover={{ 
              y: -10, 
              borderColor: "#4facfe",
              boxShadow: "0 20px 40px rgba(79, 172, 254, 0.15)" 
            }}
          >
            {/* ICON WITH GLOW */}
            <div style={iconWrapper}>
              <div style={iconInner}>{item.icon}</div>
              <div style={iconGlow}></div>
            </div>

            <h3 style={titleStyle}>{item.title}</h3>
            <p style={descStyle}>{item.desc}</p>
            
            {/* DECORATIVE LINE */}
            <div style={cardFooter}>
              <span style={learnMore}>Learn More →</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* --- ADVANCED PREMIUM STYLES --- */

const container = {
  padding: "100px 20px",
  background: "#050b14", // Matches the Dark Theme
  position: "relative",
  overflow: "hidden"
};

const headerContent = {
  textAlign: "center",
  marginBottom: "60px"
};

const subTitle = {
  color: "#4facfe",
  fontSize: "12px",
  fontWeight: "bold",
  letterSpacing: "3px",
  textTransform: "uppercase"
};

const heading = {
  fontSize: "clamp(30px, 5vw, 42px)",
  color: "#fff",
  fontWeight: "900",
  marginTop: "10px",
  marginBottom: "15px"
};

const underline = {
  width: "60px",
  height: "4px",
  background: "#4facfe",
  margin: "0 auto",
  borderRadius: "2px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const card = {
  background: "rgba(255, 255, 255, 0.02)",
  backdropFilter: "blur(10px)",
  padding: "40px 30px",
  borderRadius: "24px",
  textAlign: "left", // Professional left-align
  border: "1px solid rgba(255, 255, 255, 0.05)",
  transition: "0.4s all ease",
  position: "relative",
  overflow: "hidden",
  willChange: "transform, opacity",
  WebkitBackfaceVisibility: "hidden",
};

const iconWrapper = {
  position: "relative",
  width: "60px",
  height: "60px",
  marginBottom: "25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const iconInner = {
  fontSize: "35px",
  zIndex: 2
};

const iconGlow = {
  position: "absolute",
  inset: 0,
  background: "#4facfe",
  filter: "blur(20px)",
  opacity: 0.2,
  borderRadius: "50%",
  zIndex: 1
};

const titleStyle = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "#fff",
  marginBottom: "15px"
};

const descStyle = {
  fontSize: "15px",
  color: "#888",
  lineHeight: "1.7",
  marginBottom: "25px"
};

const cardFooter = {
  marginTop: "auto"
};

const learnMore = {
  fontSize: "13px",
  color: "#4facfe",
  fontWeight: "bold",
  cursor: "pointer",
  textTransform: "uppercase",
  letterSpacing: "1px"
};
