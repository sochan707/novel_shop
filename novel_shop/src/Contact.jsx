import Header from "./Component/Header";
import Footer from "./Component/Footer";
import "./Contact.css";

// Icons from assets
import iconMail     from "./assets/icons/mail.svg";
import iconLocation from "./assets/icons/location.svg";
import iconPhone    from "./assets/icons/phone.svg";
import iconClock    from "./assets/icons/clock.svg";

const contactInfo = [
  {
    title: "Address",
    icon: iconLocation,
    lines: ["400 University Drive", "Suite 200, Coral Gables", "FL 33134, USA"],
  },
  {
    title: "Phone",
    icon: iconPhone,
    lines: ["Mobile: +(1) 305-546-6789", "Support: +(1) 305-456-6789"],
  },
  {
    title: "Working Time",
    icon: iconClock,
    lines: [
      "Monday – Friday: 9:00 – 22:00",
      "Saturday – Sunday: 9:00 – 21:00",
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Header />

      {/* ── Hero Banner ── */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <img src={iconMail} alt="" className="contact-hero-icon" />
          <h1 className="contact-hero-title">Contact</h1>
          <p className="contact-hero-breadcrumb">
            <span className="contact-hero-home">Home</span>
            <span className="contact-hero-sep">&gt;</span>
            <span>Contact</span>
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <main className="contact-main">

        {/* Intro */}
        <section className="contact-intro">
          <h2 className="contact-intro-title">Get In Touch With Us</h2>
          <p className="contact-intro-sub">
            For more information about our books &amp; services, feel free to
            drop us an email. Our team is always here to help — don't hesitate!
          </p>
        </section>

        {/* Info + Form */}
        <section className="contact-body">

          {/* Left: contact info */}
          <div className="contact-info-list">
            {contactInfo.map((item) => (
              <div key={item.title} className="contact-info-item">
                <img src={item.icon} alt={item.title} className="contact-info-icon" />
                <div>
                  <h3 className="contact-info-title">{item.title}</h3>
                  <div className="contact-info-lines">
                    {item.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div className="contact-form-wrap">
            <FormField label="Your name"      placeholder="e.g. Jane Doe" />
            <FormField label="Email address"  placeholder="jane@example.com" type="email" />
            <FormField label="Subject"        placeholder="This is optional" />
            <FormField label="Message"        placeholder="Hi! I'd like to ask about..." textarea />
            <button className="contact-submit-btn">Submit</button>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

function FormField({ label, placeholder, type = "text", textarea = false }) {
  return (
    <label className="contact-field">
      <span className="contact-field-label">{label}</span>
      {textarea ? (
        <textarea
          rows={5}
          placeholder={placeholder}
          className="contact-field-textarea"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="contact-field-input"
        />
      )}
    </label>
  );
}