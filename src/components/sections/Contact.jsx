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
      .then((res) => {
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

  const CardWrapper = ({ children, gradient }) => (
    <div className="group relative">
      <div className={`absolute -inset-1 ${gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40`} />
      <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 shadow-2xl transform group-hover:scale-[1.02]">
        {children}
      </div>
    </div>
  );

  const FormField = ({ field, index }) => {
    const isTextarea = field.type === "textarea";
    const labelColor = index < 2 ? "indigo" : "purple";
    const commonClasses = "peer w-full bg-gray-50 text-black rounded-lg sm:rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 border-2 border-gray-200 text-xs sm:text-sm outline-0 focus:bg-white placeholder-transparent";
    return (
      <div className="relative">
        {isTextarea ? (
          <textarea
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder=" "
            rows={field.rows}
            className={`${commonClasses} focus:border-${labelColor}-600 resize-none`}
            required={field.required}
          />
        ) : (
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder=" "
            className={`${commonClasses} focus:border-${labelColor}-600`}
            required={field.required}
          />
        )}
        <label className={`absolute left-3 sm:left-4 -top-2 sm:-top-2.5 text-[10px] sm:text-xs text-${labelColor}-600 bg-white px-1.5 sm:px-2 peer-placeholder-shown:text-xs sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-2 sm:peer-focus:-top-2.5 peer-focus:text-[10px] sm:peer-focus:text-xs peer-focus:text-${labelColor}-600`}>
          {field.placeholder}
        </label>
      </div>
    );
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-32 bg-white px-2 sm:px-4 overflow-hidden">
      <Particles
        className="absolute inset-0 w-full h-full -z-10"
        particleCount={400}
        particleSpread={30}
        particleBaseSize={1000}
        sizeRandomness={0.7}
        speed={0.25}
        particleColors={['#ff0000', '#00a2ff', '#ffe600', '#00d26a', '#ff5aad']}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={true}
      />
      <RevealOnScroll>
        {/* CHANGED: max-w-7xl → max-w-5xl to reduce width */}
        <div className="w-full max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 text-black tracking-tight">
              {contact.title}{" "}
              <span className="bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-800 bg-clip-text text-transparent">
                {contact.titleHighlight}
              </span>
            </h1>
            <div className="h-1 w-20 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-purple-700 to-transparent rounded-full mb-4 sm:mb-6" />
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">{contact.description}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            
            {/* Find Us Card - HIDDEN ON MOBILE */}
            <div className="hidden lg:block">
              <CardWrapper gradient="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">Find Us</h3>
                      <p className="text-gray-600 text-xs">Marquez Rd, Pangi, Maco</p>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden border-4 border-gray-100 shadow-inner">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1770113435875!6m8!1m7!1s1Qn8PM63SqRgQlLh6zq7Bg!2m2!1d7.4342942184611!2d125.827941143386!3f182.7151432650223!4f-25.0077791441677!5f0.6838268825808721"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Street View - Marquez Rd, Pangi, Maco, Davao de Oro"
                    />
                  </div>
                </div>
              </CardWrapper>
            </div>

            {/* Send Message Card */}
            <CardWrapper gradient="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-black">Send Message</h3>
                    <p className="text-gray-600 text-[10px] sm:text-xs">We'll get back to you soon</p>
                  </div>
                </div>
                <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                    {contact.form.fields.slice(0, 2).map((field, index) => (
                      <FormField key={index} field={field} index={index} />
                    ))}
                  </div>
                  {contact.form.fields.slice(2).map((field, index) => (
                    <FormField key={index + 2} field={field} index={index + 2} />
                  ))}
                  <button
                    type="submit"
                    className="relative group/btn w-full overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-[2px] hover:shadow-2xl hover:shadow-purple-500/30"
                  >
                    <div className="relative flex items-center justify-center gap-2 sm:gap-3 rounded-lg sm:rounded-xl bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-purple-600 group-hover/btn:bg-transparent group-hover/btn:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:rotate-45" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                      <span className="font-semibold text-xs sm:text-sm tracking-wide">
                        {contact.form.submitButton.text}
                      </span>
                    </div>
                  </button>
                </form>
              </div>
            </CardWrapper>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};