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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function Terms() {
  return (
    <div style={{ background: "#050b14", color: "#fff", minHeight: "100vh" }}>
      <Head>
        <title>Terms & Conditions | Demo Hospital Premium</title>
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
            HOSPITAL GUIDELINES
          </motion.span>
          <h1 style={mainTitle}>Terms & <span style={{color: "#4facfe"}}>Conditions</span></h1>
          <p style={headerDesc}>Please review our operational framework carefully.</p>
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
          
          <motion.div variants={itemVariants} style={termBlock}>
            <h2 style={heading}>1. Acceptance of Digital Terms</h2>
            <p style={text}>
              By interacting with the <b>Demo Hospital</b> portal, you acknowledge that you have read and agreed to these protocols. These terms govern your use of our online booking and information services.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} style={termBlock}>
            <h2 style={heading}>2. Professional Medical Disclaimer</h2>
            <p style={text}>
              The digital content provided here is for <b>informational purposes only</b>. It is not a substitute for professional medical diagnosis or treatment. In case of emergency, please visit the hospital immediately.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} style={termBlock}>
            <h2 style={heading}>3. Appointment Protocols</h2>
            <p style={text}>
              Submission of an appointment form does not guarantee a slot. Confirmation is provided via SMS/Call based on doctor availability. Demo Hospital reserves the right to prioritize emergency cases.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} style={termBlock}>
            <h2 style={heading}>4. User Code of Conduct</h2>
            <ul style={list}>
              <li>Provide verified and accurate contact details.</li>
              <li>Refrain from any unauthorized automated access.</li>
              <li>Respect the digital privacy of other users.</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} style={termBlock}>
            <h2 style={heading}>5. Limitation of Liability</h2>
            <p style={text}>
              <b>Demo Hospital</b> and its developers are not liable for any technical interruptions or data inaccuracies arising from third-party network providers.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} style={contactHighlight}>
            <h2 style={{...heading, color: "#fff", marginTop: 0}}>Official Contact</h2>
            <p style={text}>
              For legal inquiries or clarifications: <br />
              📍 Medical District, Mawana Road, Meerut 250001 <br />
              📞 098373 89977 | ✉️ legal@demohospital.com
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
  background: "#4facfe",
  filter: "blur(150px)",
  opacity: 0.1
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
  fontSize: "clamp(30px, 7vw, 52px)",
  fontWeight: "900",
  letterSpacing: "-1px"
};

const headerDesc = { color: "#888", fontSize: "16px", marginTop: "10px" };

const contentContainer = {
  padding: "80px 20px",
  maxWidth: "1000px",
  margin: "0 auto",
  position: "relative",
  zIndex: 5,
  marginTop: "-60px"
};

const glassBox = {
  background: "rgba(255, 255, 255, 0.02)",
  backdropFilter: "blur(20px)",
  padding: "50px 40px",
  borderRadius: "32px",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
};

const termBlock = { marginBottom: "35px" };

const heading = {
  color: "#4facfe",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "12px",
  letterSpacing: "-0.3px"
};

const text = {
  color: "#aaa",
  fontSize: "16px",
  lineHeight: "1.8"
};

const list = {
  color: "#aaa",
  paddingLeft: "20px",
  lineHeight: "2",
  fontSize: "15px"
};

const contactHighlight = {
  background: "linear-gradient(135deg, rgba(13, 110, 253, 0.2), transparent)",
  padding: "30px",
  borderRadius: "20px",
  border: "1px solid rgba(13, 110, 253, 0.3)",
  marginTop: "40px"
};
