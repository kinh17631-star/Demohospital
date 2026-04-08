import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

// --- ADVANCED ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
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

export default function Home() {
  const services = [
    { title: "Cardiology", icon: "❤️" },
    { title: "Neurology", icon: "🧠" },
    { title: "Orthopedics", icon: "🦴" },
    { title: "Pediatrics", icon: "👶" },
    { title: "Dental Care", icon: "🦷" },
    { title: "Emergency Care", icon: "🚑" }
  ];

  const doctors = [
    { name: "Dr. Amit Sharma", spec: "Cardiologist", id: "1" },
    { name: "Dr. Neha Verma", spec: "Neurologist", id: "2" },
    { name: "Dr. Raj Singh", spec: "Orthopedic Specialist", id: "3" }
  ];

  return (
    <div style={{ background: "#050b14", color: "#fff", minHeight: "100vh" }}>
      <Head>
        <title>Demo Hospital | Future of Healthcare UI</title>
      </Head>

      <Navbar />
      <Sidebar />

      {/* HERO SECTION - CINEMATIC LOOK */}
      <section style={heroSection}>
        <div style={heroOverlay}></div>
        
        {/* Floating Background Glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={heroGlow} 
        />

        <motion.div 
          style={heroContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={subHeading}
          >
            MEERUT'S MOST ADVANCED MEDICAL CENTER
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={heroTitle}
          >
            Your Health, <br /> Our <span style={highlightText}>Commitment.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            style={heroText}
          >
            Welcome to <b>Demo Hospital</b>. Where world-class expertise meets cutting-edge technology 
            on a mobile-first platform.
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="/appointment">
              <button style={btnPrimary}>Start Priority Booking</button>
            </a>
          </motion.div>
        </motion.div>
      </section>
      {/* STATS SECTION - GLASSMORPHISM CARDS */}
      <section style={sectionPadding}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={statsGrid}
        >
          {[
            { t: "15,000+", s: "Patients Served" },
            { t: "98.5%", s: "Success Rate" },
            { t: "24/7", s: "Live Support" },
            { t: "120+", s: "Expert Staff" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -10, borderColor: "#4facfe" }}
              style={glassCard}
            >
              <h2 style={statTitle}>{item.t}</h2>
              <p style={statSub}>{item.s}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SERVICES SECTION - MODERN GRID */}
      <section style={{ ...sectionPadding, background: "#0a1320" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={sectionTitle}>Our Specializations</h2>
          <div style={underline}></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={servicesGrid}
        >
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              style={serviceCard}
              whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.05)" }}
            >
              <div style={serviceIcon}>{s.icon}</div>
              <h3 style={{ marginBottom: "10px" }}>{s.title}</h3>
              <p style={{ color: "#888", fontSize: "14px" }}>
                High-precision care for {s.title} patients at Demo Hospital.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* DOCTORS SECTION */}
      <section style={sectionPadding}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={sectionTitle}>The Experts</h2>
          <p style={{ color: "#888" }}>Consult with Meerut's top-rated medical professionals.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={servicesGrid}
        >
          {doctors.map((doc, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              style={doctorCard}
              whileHover={{ y: -10 }}
            >
              <div style={docImgPlaceholder}>👨‍⚕️</div>
              <h3 style={{ marginBottom: "5px" }}>{doc.name}</h3>
              <p style={{ color: "#4facfe", fontWeight: "bold", fontSize: "14px" }}>{doc.spec}</p>
              <a href="/appointment" style={smallLink}>Book Consultation →</a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FINAL CTA - CALL TO ACTION */}
      <section style={ctaSection}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={ctaBox}
        >
          <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>Ready for a Consultation?</h2>
          <p style={{ color: "#ccc", marginBottom: "30px" }}>
            Skip the queue. Book your priority appointment now and experience luxury healthcare.
          </p>

          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/appointment">
              <button style={btnPrimary}>Schedule Online</button>
            </a>
            <a href="tel:09837389977">
              <button style={btnOutline}>Call 098373 89977</button>
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

/* --- MASTER DEMO STYLES --- */

const sectionPadding = { padding: "100px 20px" };

const heroSection = {
  position: "relative",
  height: "100vh",
  backgroundImage: "url('/IMG_4532.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  overflow: "hidden"
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to bottom, rgba(5, 11, 20, 0.9) 0%, rgba(5, 11, 20, 0.4) 50%, rgba(5, 11, 20, 0.9) 100%)",
  zIndex: 1
};

const heroGlow = {
  position: "absolute",
  width: "500px",
  height: "500px",
  background: "#0d6efd",
  filter: "blur(180px)",
  zIndex: 1
};

const heroContent = { position: "relative", zIndex: 2, padding: "0 20px", maxWidth: "900px" };

const subHeading = { color: "#4facfe", letterSpacing: "4px", fontSize: "12px", fontWeight: "bold", display: "block", marginBottom: "20px" };

const heroTitle = { fontSize: "clamp(40px, 8vw, 80px)", fontWeight: "900", lineHeight: "1.1", marginBottom: "25px" };

const highlightText = { background: "linear-gradient(90deg, #4facfe, #00f2fe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" };

const heroText = { fontSize: "clamp(16px, 2vw, 20px)", color: "#aaa", marginBottom: "40px", lineHeight: "1.6" };

const statsGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "25px", maxWidth: "1200px", margin: "0 auto" };

const glassCard = {
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(15px)",
  padding: "40px 20px",
  borderRadius: "24px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  textAlign: "center",
  transition: "0.4s"
};

const statTitle = { color: "#4facfe", fontSize: "42px", fontWeight: "900", marginBottom: "5px" };
const statSub = { color: "#888", fontSize: "14px", fontWeight: "bold", textTransform: "uppercase" };

const sectionTitle = { fontSize: "36px", fontWeight: "900", marginBottom: "10px" };
const underline = { width: "50px", height: "4px", background: "#4facfe", margin: "0 auto", borderRadius: "2px" };

const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" };
const servicesGrid = { ...grid };

const serviceCard = { background: "rgba(255, 255, 255, 0.02)", padding: "40px 30px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.05)", transition: "0.3s" };
const serviceIcon = { fontSize: "40px", marginBottom: "20px" };

const doctorCard = { background: "#111b27", padding: "30px", borderRadius: "25px", textAlign: "center", border: "1px solid rgba(255, 255, 255, 0.05)" };
const docImgPlaceholder = { width: "100px", height: "100px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px auto", fontSize: "40px" };

const smallLink = { color: "#4facfe", textDecoration: "none", fontSize: "14px", fontWeight: "bold", marginTop: "15px", display: "inline-block" };

const ctaSection = { padding: "100px 20px", background: "linear-gradient(180deg, #050b14 0%, #0d6efd 100%)" };
const ctaBox = { maxWidth: "800px", margin: "0 auto", textAlign: "center" };

const btnPrimary = {
  padding: "18px 45px",
  background: "linear-gradient(90deg, #4facfe, #00f2fe)",
  color: "#000",
  borderRadius: "50px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "0 10px 20px rgba(79, 172, 254, 0.3)"
};

const btnOutline = {
  padding: "18px 45px",
  background: "transparent",
  color: "#fff",
  borderRadius: "50px",
  border: "2px solid rgba(255,255,255,0.2)",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold"
};
