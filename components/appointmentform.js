import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ANIMATION VARIANTS
const formVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1, // Har input ek ke baad ek aayega
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function AppointmentForm() {
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

    // Simulation for premium feel
    setTimeout(() => {
      if (!form.name || !form.phone || !form.date) {
        setError("All fields are required for priority booking");
        setSuccess("");
        setIsSubmitting(false);
        return;
      }

      if (form.phone.length < 10) {
        setError("Invalid credentials. Enter valid phone number");
        setSuccess("");
        setIsSubmitting(false);
        return;
      }

      setError("");
      setSuccess("Priority Appointment Request Sent Successfully!");
      setIsSubmitting(false);

      setForm({ name: "", phone: "", date: "", department: "", message: "" });
    }, 1000); // 1 sec loading simulation
  };

  return (
    <div style={container}>
      {/* BACKGROUND DECORATION */}
      <div style={backgroundGlow}></div>

      <motion.div 
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={formBox}
      >
        <motion.h2 variants={itemVariants} style={heading}>
          Book <span style={{ color: "#4facfe" }}>Appointment</span>
        </motion.h2>
        <motion.p variants={itemVariants} style={subHeading}>
          Fill in the details for Demo Hospital services
        </motion.p>

        <form onSubmit={handleSubmit}>
          <motion.div variants={itemVariants}>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              style={input}
              onFocus={(e) => (e.target.style.border = "1px solid #4facfe")}
              onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.1)")}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <input
              type="number"
              name="phone"
              placeholder="Contact Number *"
              value={form.phone}
              onChange={handleChange}
              style={input}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              style={{ ...input, color: "#aaa" }}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              style={input}
            >
              <option value="">Select Speciality</option>
              <option>Cardiology (Heart)</option>
              <option>Neurology (Brain)</option>
              <option>Orthopedics (Bones)</option>
              <option>Pediatrics (Child Care)</option>
            </select>
          </motion.div>

          <motion.div variants={itemVariants}>
            <textarea
              name="message"
              placeholder="Health concern or notes (optional)"
              value={form.message}
              onChange={handleChange}
              style={{ ...input, height: "100px", resize: "none" }}
            ></textarea>
          </motion.div>

          <AnimatePresence>
            {error && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={errorMsg}
              >
                ⚠️ {error}
              </motion.p>
            )}
            {success && (
              <motion.p 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                style={successMsg}
              >
                ✅ {success}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(79, 172, 254, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            style={btn}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Confirm Booking"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

/* ADVANCED STYLES */

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "100px 20px",
  background: "#050b14",
  position: "relative",
  overflow: "hidden"
};

const backgroundGlow = {
  position: "absolute",
  width: "300px",
  height: "300px",
  background: "#0d6efd",
  filter: "blur(120px)",
  opacity: 0.15,
  zIndex: 0
};

const formBox = {
  width: "450px",
  maxWidth: "100%",
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(15px)", // GLASS EFFECT
  padding: "40px",
  borderRadius: "24px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  zIndex: 1,
  position: "relative"
};

const heading = {
  textAlign: "center",
  fontSize: "28px",
  fontWeight: "800",
  color: "#fff",
  marginBottom: "10px"
};

const subHeading = {
  textAlign: "center",
  color: "#888",
  fontSize: "14px",
  marginBottom: "30px"
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  background: "rgba(0, 0, 0, 0.2)",
  color: "#fff",
  outline: "none",
  transition: "0.3s all ease",
  fontSize: "15px"
};

const btn = {
  width: "100%",
  padding: "16px",
  background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
  color: "#000",
  border: "none",
  borderRadius: "14px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
  marginTop: "10px",
  boxShadow: "0 10px 20px rgba(79, 172, 254, 0.2)"
};

const errorMsg = {
  color: "#ff4d4d",
  textAlign: "center",
  fontSize: "14px",
  marginBottom: "15px"
};

const successMsg = {
  color: "#4ade80",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "15px",
  padding: "10px",
  background: "rgba(74, 222, 128, 0.1)",
  borderRadius: "8px"
};
