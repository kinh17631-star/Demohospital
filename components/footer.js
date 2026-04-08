import { useState } from "react";
import { motion } from "framer-motion";

// ANIMATION VARIANTS (Advanced Logic)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Har column ek ke baad ek aayega
      delayChildren: 0.2
    }
  }
};

const columnVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setMsg("Please enter email");
      return;
    }
    setMsg("Subscribed! Welcome to the family.");
    setEmail("");
  };

  return (
    <footer style={footerWrapper}>
      {/* GLOW DECORATION */}
      <div style={footerGlow}></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={gridContainer}
      >
        {/* BRAND COLUMN */}
        <motion.div variants={columnVariants}>
          <h2 style={brandTitle}>Demo <span style={{color: "#4facfe"}}>Hospital</span></h2>
          <p style={brandDesc}>
            A benchmark of excellence in healthcare. Combining advanced technology with 
            compassionate care for a healthier tomorrow.
          </p>
          <div style={socialBox}>
            {/* Humne icons ke liye placeholder banaya hai */}
            <div style={socialCircle}>f</div>
            <div style={socialCircle}>t</div>
            <div style={socialCircle}>i</div>
          </div>
        </motion.div>

        {/* LINKS COLUMN */}
        <motion.div variants={columnVariants}>
          <h3 style={columnHeading}>Navigation</h3>
          <ul style={listStyle}>
            {["Home", "Doctors", "Services", "Appointment", "Privacy Policy"].map((item, index) => (
              <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href={`/${item.toLowerCase().replace(" ", "-")}`} style={linkStyle}>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT COLUMN */}
        <motion.div variants={columnVariants}>
          <h3 style={columnHeading}>Get In Touch</h3>
          <p style={contactText}>📍 123 Healthcare Avenue, Medical District, City Center - 001</p>
          <p style={contactText}>📞 +91 98XXX XXXXX</p>
          <p style={contactText}>✉️ info@demohospital.com</p>
          <p style={contactText}>🕒 24/7 Emergency Available</p>
        </motion.div>

        {/* NEWSLETTER COLUMN */}
        <motion.div variants={columnVariants}>
          <h3 style={columnHeading}>Newsletter</h3>
          <p style={{ color: "#888", fontSize: "14px", marginBottom: "15px" }}>
            Subscribe for monthly health tips.
          </p>

          <form onSubmit={handleSubscribe} style={{ position: "relative" }}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={btnStyle}
            >
              Join
            </motion.button>
          </form>

          {msg && <motion.p initial={{opacity: 0}} animate={{opacity: 1}} style={successText}>{msg}</motion.p>}
        </motion.div>
      </motion.div>

      {/* COPYRIGHT AREA */}
      <div style={bottomBar}>
        <p style={{ margin: 0 }}>© 2026 Demo Hospital. All Rights Reserved.</p>
        <p style={{ color: "#555", fontSize: "12px", marginTop: "5px" }}>
          Engineered by <span style={{ color: "#4facfe" }}>A.S Tech Foundation</span>
        </p>
      </div>
    </footer>
  );
}

/* --- ULTRA-MODERN FOOTER STYLES --- */

const footerWrapper = {
  background: "#050b14", // Website ke dark theme ke saath matching
  color: "#fff",
  padding: "80px 20px 30px 20px",
  position: "relative",
  overflow: "hidden",
  borderTop: "1px solid rgba(255,255,255,0.05)"
};

const footerGlow = {
  position: "absolute",
  top: "-150px",
  right: "-100px",
  width: "300px",
  height: "300px",
  background: "#0d6efd",
  filter: "blur(150px)",
  opacity: 0.1,
  zIndex: 0
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "40px",
  maxWidth: "1200px",
  margin: "auto",
  position: "relative",
  zIndex: 1
};

const brandTitle = {
  fontSize: "26px",
  fontWeight: "900",
  marginBottom: "15px",
  letterSpacing: "-1px"
};

const brandDesc = {
  color: "#888",
  fontSize: "14px",
  lineHeight: "1.7",
  marginBottom: "20px"
};

const socialBox = {
  display: "flex",
  gap: "10px"
};

const socialCircle = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.05)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  color: "#4facfe",
  border: "1px solid rgba(255,255,255,0.1)",
  cursor: "pointer"
};

const columnHeading = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "25px",
  position: "relative",
};

const listStyle = {
  listStyle: "none",
  padding: 0
};

const linkStyle = {
  color: "#888",
  textDecoration: "none",
  fontSize: "15px",
  display: "inline-block",
  marginBottom: "12px",
  transition: "0.3s"
};

const contactText = {
  color: "#888",
  fontSize: "14px",
  marginBottom: "12px",
  lineHeight: "1.5"
};

const inputStyle = {
  width: "100%",
  padding: "15px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "12px",
  color: "#fff",
  outline: "none",
  fontSize: "14px"
};

const btnStyle = {
  position: "absolute",
  right: "5px",
  top: "5px",
  padding: "10px 20px",
  background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
  border: "none",
  borderRadius: "8px",
  color: "#000",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "12px"
};

const successText = {
  marginTop: "10px",
  color: "#4ade80",
  fontSize: "12px"
};

const bottomBar = {
  textAlign: "center",
  marginTop: "80px",
  paddingTop: "30px",
  borderTop: "1px solid rgba(255,255,255,0.05)",
  color: "#444",
  fontSize: "14px"
};
