import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const sectionVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "#050b14", color: "#fff", minHeight: "100vh" }}>
      <Head>
        <title>Privacy Policy | Demo Hospital Premium</title>
      </Head>

      <Navbar />
      <Sidebar />

      {/* CINEMATIC HEADER */}
      <section style={headerSection}>
        <div style={headerGlow}></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ zIndex: 2, textAlign: "center" }}
        >
          <motion.span initial={{opacity:0}} animate={{opacity:1}} style={subLabel}>
            LEGAL & COMPLIANCE
          </motion.span>
          <h1 style={mainTitle}>Privacy <span style={{color: "#4facfe"}}>Policy</span></h1>
          <p style={headerDesc}>Transparent data handling for your peace of mind.</p>
        </motion.div>
      </section>

      {/* CONTENT AREA */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={contentContainer}
      >
        <div style={glassBox}>
          
          <motion.div variants={sectionVariants} style={policySection}>
            <h2 style={heading}>1. Introduction</h2>
            <p style={text}>
              Welcome to <b>Demo Hospital</b>. We value your trust and are dedicated to protecting your personal healthcare data. This policy outlines our commitment to transparency and security.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} style={policySection}>
            <h2 style={heading}>2. Information We Collect</h2>
            <p style={text}>
              To provide elite medical care, we may collect:
            </p>
            <ul style={list}>
              <li>Personal identifiers (Name, Age, Gender).</li>
              <li>Contact information (Phone, Email, Address).</li>
              <li>Medical history for appointment accuracy.</li>
            </ul>
          </motion.div>

          <motion.div variants={sectionVariants} style={policySection}>
            <h2 style={heading}>3. Data Security & Protection</h2>
            <p style={text}>
              We implement <b>AES-level encryption</b> and secure cloud storage to ensure your data is never compromised. Only authorized medical staff can access your records.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} style={policySection}>
            <h2 style={heading}>4. Your Rights</h2>
            <p style={text}>
              You have the right to access your digital records, request corrections, or ask for data deletion from our portal at any time.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} style={contactBox}>
            <h2 style={{...heading, color: "#fff"}}>Questions?</h2>
            <p style={text}>
              Contact our Data Protection Officer at <b>Demo Hospital</b>:<br />
              📍 Medical District, City Center, PIN - 001 <br />
              📞 098373 89977
            </p>
          </motion.div>

        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

/* --- ADVANCED PREMIUM STYLES --- */

const headerSection = {
  height: "40vh",
  background: "radial-gradient(circle at bottom, #1e3a5f 0%, #050b14 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden"
};

const headerGlow = {
  position: "absolute",
  width: "300px",
  height: "300px",
  background: "#0d6efd",
  filter: "blur(150px)",
  opacity: 0.15
};

const subLabel = {
  fontSize: "12px",
  letterSpacing: "4px",
  color: "#4facfe",
  fontWeight: "bold",
  display: "block",
  marginBottom: "15px"
};

const mainTitle = {
  fontSize: "clamp(32px, 7vw, 56px)",
  fontWeight: "900",
  letterSpacing: "-2px"
};

const headerDesc = { color: "#888", fontSize: "16px", marginTop: "10px" };

const contentContainer = {
  padding: "80px 20px",
  maxWidth: "1000px",
  margin: "0 auto",
  position: "relative",
  zIndex: 5,
  marginTop: "-80px" // Header ke thoda upar overlap
};

const glassBox = {
  background: "rgba(255, 255, 255, 0.02)",
  backdropFilter: "blur(20px)",
  padding: "60px 40px",
  borderRadius: "30px",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
};

const policySection = { marginBottom: "40px" };

const heading = {
  color: "#4facfe",
  fontSize: "22px",
  fontWeight: "bold",
  marginBottom: "15px",
  letterSpacing: "-0.5px"
};

const text = {
  color: "#aaa",
  fontSize: "16px",
  lineHeight: "1.8",
  marginBottom: "10px"
};

const list = {
  color: "#aaa",
  paddingLeft: "20px",
  lineHeight: "2"
};

const contactBox = {
  background: "rgba(13, 110, 253, 0.1)",
  padding: "30px",
  borderRadius: "20px",
  border: "1px solid rgba(13, 110, 253, 0.2)",
  marginTop: "50px"
};
