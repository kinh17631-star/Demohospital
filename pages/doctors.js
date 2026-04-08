import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

// ANIMATION VARIANTS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

export default function Doctors() {
  const [search, setSearch] = useState("");

  const doctors = [
    { name: "Dr. Amit Sharma", spec: "Cardiologist", exp: "10 Years Experience", id: 1 },
    { name: "Dr. Neha Verma", spec: "Neurologist", exp: "8 Years Experience", id: 2 },
    { name: "Dr. Raj Singh", spec: "Orthopedic Specialist", exp: "12 Years Experience", id: 3 },
    { name: "Dr. Pooja Mehta", spec: "Pediatrician", exp: "7 Years Experience", id: 4 },
    { name: "Dr. Arjun Patel", spec: "Dentist", exp: "9 Years Experience", id: 5 },
    { name: "Dr. Ravi Kumar", spec: "General Physician", exp: "15 Years Experience", id: 6 }
  ];

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.spec.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#050b14", color: "#fff", minHeight: "100vh" }}>
      <Head>
        <title>Our Specialists | Demo Hospital Premium</title>
      </Head>

      <Navbar />
      <Sidebar />

      {/* CINEMATIC HEADER */}
      <section style={headerSection}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ zIndex: 2, textAlign: "center" }}
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={subLabel}>
            OUR MEDICAL TEAM
          </motion.span>
          <h1 style={mainTitle}>Meet Our <span style={{ color: "#4facfe" }}>Experts</span></h1>
          <p style={headerDesc}>Dedicated professionals providing world-class healthcare services.</p>
        </motion.div>
        <div style={glowEffect}></div>
      </section>

      {/* SEARCH SECTION */}
      <section style={searchSection}>
        <div style={searchContainer}>
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#4facfe" }}
            type="text"
            placeholder="Search by name or specialty..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={searchInput}
          />
          <span style={searchIcon}>🔍</span>
        </div>
      </section>

      {/* DOCTORS GRID */}
      <section style={gridSection}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={grid}
        >
          <AnimatePresence mode="popLayout">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doc) => (
                <motion.div 
                  layout
                  key={doc.id} 
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={glassCard}
                  whileHover={{ y: -10, borderColor: "rgba(79, 172, 254, 0.4)" }}
                >
                  {/* Placeholder for Doctor Image */}
                  <div style={imgPlaceholder}>
                    <span style={{ fontSize: "40px", opacity: 0.3 }}>👨‍⚕️</span>
                  </div>

                  <h3 style={docName}>{doc.name}</h3>
                  <p style={docSpec}>{doc.spec}</p>
                  <p style={docExp}>🕒 {doc.exp}</p>

                  <div style={divider}></div>

                  <a href="/appointment" style={{ textDecoration: "none" }}>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={cardBtn}
                    >
                      Book Appointment
                    </motion.button>
                  </a>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={noResult}>
                <h3>No specialists found.</h3>
                <p>Try searching for a different name or department.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* GUIDANCE CTA */}
      <section style={ctaSection}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={ctaContent}
        >
          <h2>Need help choosing the right expert?</h2>
          <p>Our helpdesk is available 24/7 to guide you.</p>
          <div style={ctaBtnGroup}>
            <a href="tel:09837389977" style={ctaPrimary}>📞 Call Helpline</a>
            <a href="/appointment" style={ctaSecondary}>Message Us</a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

/* --- ADVANCED PREMIUM STYLES --- */

const headerSection = {
  height: "45vh",
  background: "radial-gradient(circle at center, #1e3a5f 0%, #050b14 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  padding: "0 20px"
};

const glowEffect = {
  position: "absolute",
  width: "400px",
  height: "400px",
  background: "#0d6efd",
  filter: "blur(180px)",
  opacity: 0.1
};

const subLabel = { fontSize: "12px", letterSpacing: "4px", color: "#4facfe", fontWeight: "bold" };
const mainTitle = { fontSize: "clamp(35px, 7vw, 60px)", fontWeight: "900", margin: "10px 0" };
const headerDesc = { color: "#888", fontSize: "16px", maxWidth: "500px", margin: "0 auto" };

const searchSection = { padding: "40px 20px", marginTop: "-50px", position: "relative", zIndex: 10 };
const searchContainer = { position: "relative", maxWidth: "500px", margin: "0 auto" };

const searchInput = {
  width: "100%",
  padding: "18px 25px 18px 50px",
  borderRadius: "50px",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  color: "#fff",
  fontSize: "16px",
  outline: "none",
  transition: "0.3s"
};

const searchIcon = { position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", opacity: 0.5 };

const gridSection = { padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" };

const glassCard = {
  background: "rgba(255, 255, 255, 0.02)",
  backdropFilter: "blur(15px)",
  borderRadius: "24px",
  padding: "30px",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  textAlign: "center",
  transition: "0.4s",
  position: "relative"
};

const imgPlaceholder = {
  width: "120px",
  height: "120px",
  background: "linear-gradient(135deg, #1e3a5f, #050b14)",
  borderRadius: "50%",
  margin: "0 auto 20px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "3px solid rgba(79, 172, 254, 0.2)"
};

const docName = { fontSize: "22px", fontWeight: "bold", marginBottom: "5px" };
const docSpec = { color: "#4facfe", fontSize: "14px", fontWeight: "bold", textTransform: "uppercase", marginBottom: "10px" };
const docExp = { color: "#888", fontSize: "13px", marginBottom: "20px" };
const divider = { height: "1px", width: "40px", background: "rgba(255,255,255,0.1)", margin: "0 auto 20px auto" };

const cardBtn = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  background: "rgba(79, 172, 254, 0.1)",
  color: "#4facfe",
  fontWeight: "bold",
  cursor: "pointer",
  border: "1px solid rgba(79, 172, 254, 0.2)"
};

const noResult = { textAlign: "center", gridColumn: "1 / -1", padding: "100px 0", color: "#444" };

const ctaSection = { padding: "100px 20px" };
const ctaContent = {
  background: "linear-gradient(135deg, #0d6efd, #4facfe)",
  padding: "60px 20px",
  borderRadius: "40px",
  textAlign: "center",
  color: "#000",
  maxWidth: "900px",
  margin: "0 auto",
  boxShadow: "0 30px 60px rgba(13, 110, 253, 0.3)"
};

const ctaBtnGroup = { display: "flex", gap: "15px", justifyContent: "center", marginTop: "30px", flexWrap: "wrap" };
const ctaPrimary = { padding: "15px 35px", background: "#000", color: "#fff", borderRadius: "50px", textDecoration: "none", fontWeight: "bold" };
const ctaSecondary = { padding: "15px 35px", background: "rgba(255,255,255,0.2)", color: "#000", borderRadius: "50px", textDecoration: "none", fontWeight: "bold", border: "1px solid rgba(0,0,0,0.1)" };
