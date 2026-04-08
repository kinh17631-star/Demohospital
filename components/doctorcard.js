import { motion } from "framer-motion";

export default function DoctorCard({ name, spec, exp, image }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }} // Hover karne par card upar uthega
      style={card}
    >
      {/* IMAGE BOX WITH ZOOM EFFECT */}
      <div style={imgBox}>
        <motion.img
          whileHover={{ scale: 1.1 }} // Image halki si zoom hogi
          transition={{ duration: 0.4 }}
          src={image || "/doctor.jpg"}
          alt="doctor"
          style={img}
        />
        {/* Experience Badge */}
        <div style={badge}>{exp}</div>
      </div>

      {/* INFO SECTION */}
      <div style={infoBox}>
        <h3 style={nameStyle}>{name}</h3>
        <p style={specStyle}>{spec}</p>
        
        <div style={divider}></div>

        <p style={descText}>
          Dedicated to providing expert medical care at <span style={{color: "#4facfe"}}>Demo Hospital</span>.
        </p>

        {/* BUTTON WITH GLOW EFFECT */}
        <a href="/appointment" style={{ textDecoration: "none" }}>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(79, 172, 254, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            style={btn}
          >
            Book Appointment
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
}

/* --- ADVANCED PREMIUM STYLES --- */

const card = {
  background: "rgba(255, 255, 255, 0.03)", // Dark Glass Look
  backdropFilter: "blur(15px)",
  padding: "15px",
  borderRadius: "24px",
  textAlign: "center",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
  overflow: "hidden",
  position: "relative",
  willChange: "transform, opacity",
  WebkitBackfaceVisibility: "hidden",
};

const imgBox = {
  width: "100%",
  height: "220px",
  borderRadius: "18px",
  overflow: "hidden",
  position: "relative",
  marginBottom: "20px",
};

const img = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const badge = {
  position: "absolute",
  bottom: "10px",
  right: "10px",
  background: "rgba(13, 110, 253, 0.9)",
  color: "white",
  padding: "5px 12px",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "bold",
  backdropFilter: "blur(5px)",
};

const infoBox = {
  padding: "0 10px 10px 10px",
};

const nameStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#fff",
  marginBottom: "5px",
};

const specStyle = {
  color: "#4facfe", // Premium Blue
  fontSize: "14px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginBottom: "15px",
};

const divider = {
  height: "1px",
  width: "50px",
  background: "rgba(255,255,255,0.1)",
  margin: "0 auto 15px auto",
};

const descText = {
  fontSize: "13px",
  color: "#888",
  lineHeight: "1.6",
  marginBottom: "20px",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
  color: "#000",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "14px",
  transition: "0.3s all ease",
};
