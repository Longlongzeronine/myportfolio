import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import myImage from './sample-proj/1.svg';
import Particles from "../../Particles";

export const Contact = () => {
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
        console.log("SUCCESS ✅", res.status, res.text);
        alert("Message Sent!");
        setFormData({ name: "", email: "", company: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED ❌", err);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen flex items-center justify-center py-20 bg-white px-4 overflow-hidden"
    >
      <Particles 
        className="absolute inset-0 w-full h-full -z-10"
        particleCount={400}
        particleSpread={30}
        particleBaseSize={1000}
        sizeRandomness={0.7}
        speed={0.25}
        particleColors={['#ff0000', '#00a2ff', '#ffe600', '#00d26a', '#ff5aad']}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={true}
      />

      <RevealOnScroll>
        <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 items-center gap-20 p-8 relative z-10">
          <div className="flex justify-center">
            <img
              src={myImage}
              alt="Francis Amoguis"
              className="w-full max-w-3xl h-auto animate-float"
            />
          </div>

          <div>
            <h1 className="text-slate-950 text-3xl md:text-5xl font-bold mb-6 font-sans">
              Let's <span className="text-violet-900">Talk</span>
            </h1>
            <p className="text-md text-slate-500 mb-6 leading-relaxed font-sans">
              Have some big idea or brand to develop and need help? Then reach out — we'd love to hear about your project and provide help.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500 font-sans"
                required
              />

              <input
                type="email"
                name="email" // This will be used as reply-to in EmailJS
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500 font-sans"
                required
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Company"
                className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500 font-sans"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Subject"
                className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500 font-sans"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Message"
                rows="6"
                className="w-full text-slate-900 rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-0 focus:border-blue-500 font-sans"
                required
              ></textarea>

              <button 
                type="submit" 
                className="text-white bg-slate-950 hover:bg-violet-900 rounded-md text-sm font-medium px-4 py-2 w-full cursor-pointer mt-6 font-sans"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
