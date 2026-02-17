import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import Particles from "../../Particles";
import contactData from './Endpoint/contact.json';

export const Contact = () => {
  const { contact } = contactData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert(contact.form.submitButton.successMessage);
        setFormData({ name: "", email: "", company: "", subject: "", message: "" });
      })
      .catch(() => {
        alert(contact.form.submitButton.errorMessage);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Shared glass card style — identical to About cards
  const glassCard = {
    border: '1px solid rgba(71,85,105,0.4)',
    backgroundColor: 'rgba(15,23,42,0.45)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
  };

  const FormField = ({ field, index }) => {
    const isTextarea = field.type === "textarea";
    const commonClasses = `
      peer w-full rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm outline-none
      placeholder-transparent transition-all duration-200
      border border-[rgba(71,85,105,0.4)] bg-[rgba(30,41,59,0.5)]
      text-slate-100 focus:border-[rgba(100,116,139,0.7)]
      focus:bg-[rgba(51,65,85,0.5)]
    `;

    return (
      <div className="relative">
        {isTextarea ? (
          <textarea
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder=" "
            rows={field.rows}
            className={`${commonClasses} resize-none`}
            required={field.required}
          />
        ) : (
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder=" "
            className={commonClasses}
            required={field.required}
          />
        )}
        <label
          className="
            absolute left-3 sm:left-4 -top-2 sm:-top-2.5
            text-[10px] sm:text-xs text-slate-400 px-1.5 sm:px-2
            peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-sm
            peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3
            peer-placeholder-shown:text-slate-500
            peer-focus:-top-2 sm:peer-focus:-top-2.5
            peer-focus:text-[10px] sm:peer-focus:text-xs
            peer-focus:text-slate-300
            transition-all duration-200 pointer-events-none
          "
          style={{ backgroundColor: 'rgba(15,23,42,0.8)' }}
        >
          {field.placeholder}
        </label>
      </div>
    );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-32 px-2 sm:px-4 overflow-hidden"
      style={{ backgroundColor: '#020617' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Particles />
      </div>

      <RevealOnScroll>
        <div className="w-full max-w-5xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 tracking-tight" style={{ color: '#f1f5f9' }}>
              {contact.title}{" "}
              <span className="bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 bg-clip-text text-transparent">
                {contact.titleHighlight}
              </span>
            </h1>
            <div className="h-px w-20 sm:w-32 mx-auto mb-4 sm:mb-6" style={{ background: 'linear-gradient(to right, transparent, rgba(100,116,139,0.6), transparent)' }} />
            <p className="text-sm sm:text-lg max-w-2xl mx-auto px-2" style={{ color: '#94a3b8' }}>
              {contact.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-start">

            {/* Find Us Card — NOW VISIBLE ON ALL SCREENS */}
            <div>
              <div
                className="rounded-2xl sm:rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
                style={glassCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.7), 0 20px 60px rgba(71,85,105,0.15), inset 0 1px 0 rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(100,116,139,0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(71,85,105,0.4)';
                }}
              >
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: 'rgba(51,65,85,0.8)', border: '1px solid rgba(100,116,139,0.4)' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={{ color: '#94a3b8' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: '#f1f5f9' }}>Find Us</h3>
                      <p className="text-xs" style={{ color: '#64748b' }}>Marquez Rd, Pangi, Maco</p>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="mb-4" style={{ height: '1px', background: 'linear-gradient(to right, rgba(100,116,139,0.4), transparent)' }} />
                  <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(71,85,105,0.4)' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1770113435875!6m8!1m7!1s1Qn8PM63SqRgQlLh6zq7Bg!2m2!1d7.4342942184611!2d125.827941143386!3f182.7151432650223!4f-25.0077791441677!5f0.6838268825808721"
                      width="100%"
                      height="300"
                      style={{ border: 0, display: 'block' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Street View - Marquez Rd, Pangi, Maco, Davao de Oro"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Send Message Card */}
            <div
              className="rounded-2xl sm:rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
              style={glassCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.7), 0 20px 60px rgba(71,85,105,0.15), inset 0 1px 0 rgba(255,255,255,0.06)';
                e.currentTarget.style.borderColor = 'rgba(100,116,139,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(71,85,105,0.4)';
              }}
            >
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: 'rgba(51,65,85,0.8)', border: '1px solid rgba(100,116,139,0.4)' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: '#94a3b8' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold" style={{ color: '#f1f5f9' }}>Send Message</h3>
                    <p className="text-[10px] sm:text-xs" style={{ color: '#64748b' }}>We'll get back to you soon</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="mb-4 sm:mb-6" style={{ height: '1px', background: 'linear-gradient(to right, rgba(100,116,139,0.4), transparent)' }} />

                <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                    {contact.form.fields.slice(0, 2).map((field, index) => (
                      <FormField key={index} field={field} index={index} />
                    ))}
                  </div>
                  {contact.form.fields.slice(2).map((field, index) => (
                    <FormField key={index + 2} field={field} index={index + 2} />
                  ))}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full rounded-lg sm:rounded-xl py-2.5 sm:py-3 px-4 sm:px-6 font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 sm:gap-3 transition-all duration-200 cursor-pointer hover:scale-[1.02]"
                    style={{
                      border: '1px solid rgba(100,116,139,0.5)',
                      backgroundColor: 'rgba(51,65,85,0.6)',
                      color: '#e2e8f0',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(71,85,105,0.8)';
                      e.currentTarget.style.borderColor = 'rgba(148,163,184,0.6)';
                      e.currentTarget.style.color = '#f8fafc';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(51,65,85,0.6)';
                      e.currentTarget.style.borderColor = 'rgba(100,116,139,0.5)';
                      e.currentTarget.style.color = '#e2e8f0';
                      e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.3)';
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    {contact.form.submitButton.text}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};