import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import myImage from './sample-proj/1.svg';
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
        console.log("SUCCESS ✅", res.status, res.text);
        alert(contact.form.submitButton.successMessage);
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: ""
        });
      })
      .catch((err) => {
        console.error("FAILED ❌", err);
        alert(contact.form.submitButton.errorMessage);
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
              alt={contact.imageAlt}
              className="w-full max-w-3xl h-auto animate-float"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-sans text-slate-950">
              {contact.title}{" "}
              <span className="bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-800 bg-clip-text text-transparent">
                {contact.titleHighlight}
              </span>
            </h1>

            <p className="text-md text-slate-500 mb-6 leading-relaxed font-sans">
              {contact.description}
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {contact.form.fields.map((field, index) => {
                if (field.type === "textarea") {
                  return (
                    <textarea
                      key={index}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.name]: e.target.value })
                      }
                      placeholder={field.placeholder}
                      rows={field.rows}
                      className="w-full text-slate-900 rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-0 focus:border-blue-500 font-sans"
                      required={field.required}
                    />
                  );
                }

                return (
                  <input
                    key={index}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.name]: e.target.value })
                    }
                    placeholder={field.placeholder}
                    className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500 font-sans"
                    required={field.required}
                  />
                );
              })}

              <button
                type="submit"
                className="text-white bg-slate-950 hover:bg-violet-900 rounded-md text-sm font-medium px-4 py-2 w-full cursor-pointer mt-6 font-sans"
              >
                {contact.form.submitButton.text}
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};