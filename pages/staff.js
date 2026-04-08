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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100, damping: 12 } 
  }
};

export default function Staff() {
  const staff = [
    { name: "Dr. Amit Sharma", role: "Senior Cardiologist", icon: "🩺" },
    { name: "Dr. Neha Verma", role: "Neurologist", icon: "🧠" },
    { name: "Rahul Singh", role: "Nursing Head", icon: "👨‍⚕️" },
    { name: "Pooja Mehta", role: "Senior Nurse", icon: "👩‍⚕️" },
    { name: "Ankit Kumar", role: "Receptionist", icon: "☎️" },
    { name: "Sonia Gupta", role: "Admin Manager", icon: "💼" }
  ];

  return (
    <div style={{ background: "#050b14", color: "#fff", minHeight: "100vh" }}>
      <Head>
        <title>Our Team | Demo Hospital Premium</title>
      </Head>

      <Navbar />
      <Sidebar />

      {/* PREMIUM HEADER */}
      <section style={headerSection}>
        <div style={headerGlow}></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ zIndex: 2, textAlign: "center" }}
        >
          <motion.span initial={{opacity:0}} animate={{opacity:1}} style={subLabel}>
            OUR DEDICATED TEAM
          </motion.span>
          <h1 style={mainTitle}>The Faces of <span style={{color: "#4facfe"}}>Care</span></h1>
          <p style={headerDesc}>Professionals united by a single mission: Your well-being.</p>
        </motion.div>
      </section>

      {/* STAFF CARDS GRID */}
      <section style={sectionPadding}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={grid}
        >
          {staff.map((member, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              style={glassCard}
              whileHover={{ y: -10, borderColor: "#4facfe" }}
            >
              {/* Profile Placeholder with Glow */}
              <div style={profileBox}>
                <span style={{ fontSize: "40px" }}>{member.icon}</span>
                <div style={profileGlow}></div>
              </div>

              <h3 style={staffName}>{member.name}</h3>
              <p style={staffRole}>{member.role}</p>

              <div style={divider}></div>

              <p style={staffDesc}>
                Committed to delivering excellence and compassionate support at Demo Hospital.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* CORE VALUES SECTION */}
      <section style={{ ...sectionPadding, background: "#0a1320" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={sectionTitle}>Our Core Values</h2>
          <div style={underline}></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={grid}
        >
          {[
            { t: "Patient First", d: "Prioritizing human life and comfort above all." },
            { t: "Ethics", d: "Maintaining highest standards of professional integrity." },
            { t: "Innovation", d: "Integrating latest medical technology in every ward." },
            { t: "Collaboration", d: "Working as one unit for complex treatments." }
          ].map((val, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              style={valueCard}
              whileHover={{ scale: 1.05, background: "rgba(13, 110, 253, 0.1)" }}
            >
              <h3 style={{ color: "#4facfe", marginBottom: "12px" }}>{val.t}</h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: "1.6" }}>{val.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CAREERS CTA */}
      <section style={ctaSection}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          style={ctaBox}
        >
          <h2 style={{ fontSize: "32px", fontWeight: "900", marginBottom: "15px" }}>Join Our Mission</h2>
          <p style={{ color: "#ccc", marginBottom: "30px" }}>
            We are always looking for passionate medical professionals to join our family.
          </p>
          <a href="tel:09837389977" style={{ textDecoration: "none" }}>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(79, 172, 254, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              style={btnPrimary}
            >
              Contact Human Resources
            </motion.button>
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
/* --- ADVANCED STAFF PAGE STYLES --- */

const sectionPadding = { padding: "100px 20px" };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" };

const headerSection = {
  height: "45vh",
  background: "radial-gradient(circle at center, #1e3a5f 0%, #050b14 100%)",
  display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden"
};

const headerGlow = { position: "absolute", width: "300px", height: "300px", background: "#0d6efd", filter: "blur(150px)", opacity: 0.1 };

const subLabel = { fontSize: "12px", letterSpacing: "4px", color: "#4facfe", fontWeight: "bold", marginBottom: "15px", display: "block" };
const mainTitle = { fontSize: "clamp(35px, 7vw, 60px)", fontWeight: "900" };
const headerDesc = { color: "#888", fontSize: "16px", marginTop: "10px" };

const glassCard = {
  background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(15px)",
  padding: "40px 30px", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.05)",
  textAlign: "center", transition: "0.4s ease"
};

const profileBox = {
  width: "100px", height: "100px", borderRadius: "50%", background: "#111b27",
  margin: "0 auto 20px auto", display: "flex", alignItems: "center", justifyContent: "center",
  position: "relative"
};

const profileGlow = {
  position: "absolute", inset: "-5px", background: "#4facfe", filter: "blur(15px)",
  opacity: 0.2, borderRadius: "50%", zIndex: -1
};

const staffName = { fontSize: "22px", fontWeight: "bold", color: "#fff", marginBottom: "5px" };
const staffRole = { color: "#4facfe", fontSize: "14px", fontWeight: "bold", textTransform: "uppercase" };
const staffDesc = { color: "#888", fontSize: "13px", lineHeight: "1.6" };
const divider = { height: "1px", width: "40px", background: "rgba(255,255,255,0.1)", margin: "20px auto" };

const sectionTitle = { fontSize: "32px", fontWeight: "800", marginBottom: "10px" };
const underline = { width: "50px", height: "4px", background: "#4facfe", margin: "0 auto", borderRadius: "2px" };

const valueCard = {
  background: "rgba(255,255,255,0.02)", padding: "30px", borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.05)", transition: "0.3s"
};

const ctaSection = { padding: "100px 20px", background: "linear-gradient(180deg, #050b14, #0d6efd)" };
const ctaBox = { maxWidth: "800px", margin: "0 auto", textAlign: "center" };

const btnPrimary = {
  padding: "18px 45px", background: "linear-gradient(90deg, #4facfe, #00f2fe)",
  color: "#000", border: "none", borderRadius: "50px", fontWeight: "bold", fontSize: "16px", cursor: "pointer"
};
