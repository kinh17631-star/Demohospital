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
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

export default function Patients() {
  const services = [
    { t: "General Checkup", i: "🩺" },
    { t: "Emergency Care", i: "🚑" },
    { t: "Laboratory Tests", i: "🧪" },
    { t: "Surgery", i: "🔪" },
    { t: "X-Ray & Imaging", i: "☢️" },
    { t: "Pharmacy", i: "💊" }
  ];

  return (
    <div style={{ background: "#050b14", color: "#fff", minHeight: "100vh" }}>
      <Head>
        <title>Patient Care | Demo Hospital Premium</title>
      </Head>

      <Navbar />
      <Sidebar />

      {/* PREMIUM HEADER */}
      <section style={headerSection}>
        <div style={headerGlow}></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ zIndex: 2, textAlign: "center" }}
        >
          <motion.span initial={{opacity:0}} animate={{opacity:1}} style={subLabel}>
            COMPASSIONATE CARE
          </motion.span>
          <h1 style={mainTitle}>Patient <span style={{color: "#4facfe"}}>Services</span></h1>
          <p style={headerDesc}>Your well-being is our priority. Explore our specialized care facilities.</p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section style={sectionPadding}>
        <motion.h2 variants={itemVariants} initial="hidden" whileInView="visible" style={sectionTitle}>Medical Services</motion.h2>
        <div style={underline}></div>

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
              style={glassCard}
              whileHover={{ y: -10, borderColor: "#4facfe" }}
            >
              <div style={iconBox}>{item.i}</div>
              <h3 style={{ marginBottom: "10px", color: "#fff" }}>{item.t}</h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: "1.6" }}>
                Expert {item.t.toLowerCase()} for all patients with advanced tech.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* FACILITIES SECTION */}
      <section style={{ ...sectionPadding, background: "#0a1320" }}>
        <motion.h2 variants={itemVariants} initial="hidden" whileInView="visible" style={sectionTitle}>Hospital Facilities</motion.h2>
        <div style={underline}></div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={grid}
        >
          {[
            "24/7 Emergency", "Advanced ICU", "Modern OT", 
            "Ambulance Service", "Qualified Nurses", "Online Booking"
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              style={facilityCard}
              whileHover={{ scale: 1.05, background: "rgba(79, 172, 254, 0.1)" }}
            >
              <span style={{color: "#4facfe", marginRight: "10px"}}>✔</span> {item}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PATIENT TRUST INFORMATION */}
      <section style={sectionPadding}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={trustBox}
        >
          <h2 style={{marginBottom: "20px", color: "#4facfe"}}>Why Choose Demo Hospital?</h2>
          <p style={{ lineHeight: "1.8", color: "#ccc" }}>
            At <b>Demo Hospital</b>, we follow international healthcare standards. Our patient-centered 
            approach ensures that you receive personalized attention from registration to recovery.
          </p>
          <div style={featureList}>
            {["Paperless Registration", "Senior Doctor Consultation", "Affordable Packages", "Hygienic Wards"].map((f, i) => (
              <div key={i} style={featureItem}>✦ {f}</div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* FAQ SECTION - PREMIUM LOOK */}
      <section style={{ ...sectionPadding, background: "#0a1320" }}>
        <h2 style={sectionTitle}>General Queries</h2>
        <div style={underline}></div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          {[
            { q: "How to book?", a: "Use our online portal or call the helpline directly." },
            { q: "Emergency available?", a: "Yes, our trauma center works 24/7, 365 days." },
            { q: "Doctor's experience?", a: "All specialists have 10+ years of clinical expertise." }
          ].map((faq, i) => (
            <motion.div key={i} variants={itemVariants} style={faqItem}>
              <h3 style={faqQuest}>Q: {faq.q}</h3>
              <p style={faqAns}>{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section style={ctaSection}>
        <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} style={{textAlign: "center"}}>
          <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>Need Immediate Help?</h2>
          <p style={{ color: "#ccc", marginBottom: "30px" }}>Our helpdesk is ready to assist you. Call 098373 89977.</p>
          <a href="/appointment">
            <button style={btnPrimary}>Book Your Visit</button>
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

/* --- MASTER STYLES --- */
const sectionPadding = { padding: "100px 20px" };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", maxWidth: "1200px", margin: "0 auto" };

const headerSection = {
  height: "50vh", background: "radial-gradient(circle at top, #1e3a5f 0%, #050b14 100%)",
  display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden"
};

const headerGlow = { position: "absolute", width: "300px", height: "300px", background: "#4facfe", filter: "blur(150px)", opacity: 0.1 };

const subLabel = { fontSize: "12px", letterSpacing: "4px", color: "#4facfe", fontWeight: "bold", marginBottom: "15px", display: "block" };
const mainTitle = { fontSize: "clamp(35px, 7vw, 60px)", fontWeight: "900", marginBottom: "15px" };
const headerDesc = { color: "#888", maxWidth: "500px", margin: "0 auto" };

const sectionTitle = { textAlign: "center", fontSize: "32px", fontWeight: "800", marginBottom: "10px" };
const underline = { width: "50px", height: "4px", background: "#4facfe", margin: "0 auto 50px auto", borderRadius: "2px" };

const glassCard = {
  background: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(15px)",
  padding: "35px 25px", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.05)", textAlign: "center", transition: "0.4s"
};

const iconBox = { fontSize: "40px", marginBottom: "15px" };

const facilityCard = {
  background: "rgba(255,255,255,0.02)", padding: "20px", borderRadius: "15px",
  border: "1px solid rgba(255,255,255,0.05)", fontWeight: "600", transition: "0.3s"
};

const trustBox = {
  maxWidth: "900px", margin: "0 auto", background: "rgba(79, 172, 254, 0.05)",
  padding: "50px", borderRadius: "30px", border: "1px solid rgba(79, 172, 254, 0.1)"
};

const featureList = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginTop: "30px" };
const featureItem = { color: "#4facfe", fontSize: "14px", fontWeight: "bold" };

const faqItem = { background: "rgba(255,255,255,0.02)", padding: "25px", borderRadius: "15px", marginBottom: "15px", border: "1px solid rgba(255,255,255,0.05)" };
const faqQuest = { fontSize: "18px", color: "#4facfe", marginBottom: "10px" };
const faqAns = { color: "#888", fontSize: "15px" };

const ctaSection = { padding: "100px 20px", background: "linear-gradient(180deg, #050b14, #0d6efd)" };
const btnPrimary = {
  padding: "16px 40px", background: "linear-gradient(90deg, #4facfe, #00f2fe)",
  color: "#000", border: "none", borderRadius: "50px", fontWeight: "bold", fontSize: "16px", cursor: "pointer"
};
