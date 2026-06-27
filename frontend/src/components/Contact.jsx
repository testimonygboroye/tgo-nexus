import { useState } from "react";
import { sendContact } from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "14px",
    minHeight: "52px",
    borderRadius: "10px",
    border: "1px solid #374151",
    background: "#111827",
    color: "#ffffff",
    fontSize: "16px",
    boxSizing: "border-box",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    height: "52px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setStatus("All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      setStatus("Please enter a valid email address.");
      return false;
    }

    if (form.message.trim().length < 10) {
      setStatus("Message must be at least 10 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      setStatus("");

      await sendContact(form);

      setStatus("✅ Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      setStatus(
        err?.response?.data?.message ||
        "❌ Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="contact">
      <h2>Contact</h2>

      <form
        onSubmit={handleSubmit}
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Write your message..."
          rows={6}
          value={form.message}
          onChange={handleChange}
          style={{
            ...inputStyle,
            minHeight: "150px",
            resize: "vertical",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={buttonStyle}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p
            style={{
              marginTop: "8px",
              color: status.startsWith("✅")
                ? "#22c55e"
                : "#ef4444",
            }}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
