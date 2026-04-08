import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

// ANIMATION VARIANTS
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    department: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      if (!form.name || !form.phone || !form.date) {
        setError("Please fill all required fields");
        setSuccess("");
        setIsSubmitting(false);
        return;
      }

      if (form.phone.length < 10) {
        setError("Enter a valid 10-digit phone number");
        setSuccess("");
        setIsSubmitting(false);
        return;
      }

      setError("");
      setSuccess("Your priority appointment has been requested!");
      setIsSubmitting(false);
      setForm({ name: "", phone: "", date: "", department: "", message: "" });
    }, 1200);
  };

  return (
    <div style={{ background: "#050b14", color: "#fff", minHeight: "100vh" }}>
      <Head>
        <title>Book Appointment | Demo Hospital Premium</title>
      </Head>

      <Navbar />
      <Sidebar />

      {/* PAGE HERO HEADER */}
      <section style={headerSection}>
        <div style={headerGlow}></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ zIndex: 2, textAlign: "center" }}
        >
          <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} style={subLabel}>
            HASSLE-FREE BOOKING
          </motion.span>
          <h1 style={mainTitle}>Schedule Your <span style={{color: "#4facfe"}}>Visit</span></h1>
          <p style={headerDesc}>Take the first step towards better health with Meerut's finest experts.</p>
        </motion.div>
      </section>

      {/* FORM SECTION */}
      <section style={formSection}>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={glassFormContainer}
        >
          <motion.h2 variants={fadeInUp} style={formTitle}>Appointment Form</motion.h2>

          <form onSubmit={handleSubmit}>
            <motion.div variants={fadeInUp}>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number *"
                value={form.phone}
                onChange={handleChange}
                style={inputStyle}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                style={{ ...inputStyle, color: "#888" }}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <select
                name="department"
                value={form.department}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">Select Speciality</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
              </select>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <textarea
                name="message"
                placeholder="Any specific health concerns? (optional)"
                value={form.message}
                onChange={handleChange}
                style={{ ...inputStyle, height: "100px", resize: "none" }}
              ></textarea>
            </motion.div>

            <AnimatePresence>
              {error && <motion.p initial={{opacity:0}} animate={{opacity:1}} style={errorText}>⚠️ {error}</motion.p>}
              {success && <motion.p initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} style={successText}>✅ {success}</motion.p>}
            </AnimatePresence>

            <motion.button 
              variants={fadeInUp}
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(79, 172, 254, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              style={submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Syncing..." : "Confirm Appointment"}
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* EMERGENCY CTA */}
      <section style={emergencySection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{fontSize: "28px", fontWeight: "900"}}>Emergency?</h2>
          <p style={{color: "#ccc", margin: "10px 0 25px 0"}}>Our critical care team is available 24/7 for you.</p>
          <a href="tel:09837389977" style={callBtn}>📞 Call Helpline Now</a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

/* --- ADVANCED PREMIMUM STYLES --- */

const headerSection = {
  height: "50vh",
  background: "radial-gradient(circle at top, #1e3a5f 0%, #050b14 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  padding: "0 20px"
};

const headerGlow = {
  position: "absolute",
  width: "300px",
  height: "300px",
  background: "#4facfe",
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
  fontSize: "clamp(32px, 6vw, 56px)",
  fontWeight: "900",
  letterSpacing: "-2px",
  marginBottom: "15px"
};

const headerDesc = {
  color: "#888",
  fontSize: "16px",
  maxWidth: "500px",
  margin: "0 auto"
};

const formSection = {
  padding: "80px 20px",
  display: "flex",
  justifyContent: "center",
  background: "#050b14",
  marginTop: "-100px", // Form ko header ke thoda upar lane ke liye
  position: "relative",
  zIndex: 5
};

const glassFormContainer = {
  width: "500px",
  maxWidth: "100%",
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(20px)",
  padding: "40px",
  borderRadius: "30px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
};

const formTitle = {
  textAlign: "center",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "35px",
  letterSpacing: "-0.5px"
};

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "15px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  background: "rgba(0, 0, 0, 0.3)",
  color: "#fff",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box"
};

const submitBtn = {
  width: "100%",
  padding: "18px",
  background: "linear-gradient(90deg, #4facfe, #00f2fe)",
  color: "#000",
  border: "none",
  borderRadius: "15px",
  cursor: "pointer",
  fontWeight: "900",
  fontSize: "16px",
  marginTop: "10px"
};

const emergencySection = {
  background: "linear-gradient(180deg, #050b14 0%, #0d6efd 100%)",
  color: "white",
  textAlign: "center",
  padding: "100px 20px"
};

const callBtn = {
  display: "inline-block",
  padding: "15px 35px",
  background: "#fff",
  color: "#0d6efd",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
};

const errorText = { color: "#ff4d4d", textAlign: "center", marginBottom: "15px", fontSize: "14px" };
const successText = { color: "#4ade80", textAlign: "center", marginBottom: "15px", fontWeight: "bold", background: "rgba(74, 222, 128, 0.1)", padding: "10px", borderRadius: "10px" };
