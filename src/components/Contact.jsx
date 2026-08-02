import { Suspense, lazy, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { GITHUB_URL, LINKEDIN_URL } from "../constants";
import SectionTitle from "./SectionTitle";

const Earth3D = lazy(() => import("./canvas/Earth3D"));
const ModelLoader = lazy(() => import("./canvas/ModelLoader"));

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(null), 4000);
        },
        () => {
          setLoading(false);
          setStatus("error");
          setTimeout(() => setStatus(null), 4000);
        }
      );
  };

  return (
    <section id="contact" className="pt-12 pb-16">
      <div className="bg-white dark:bg-[#1d1d1f] rounded-[28px] p-[40px] md:p-[48px]">
        <SectionTitle>
          <h2 className="text-[28px] md:text-[50px] font-bold tracking-tight text-ink dark:text-snow leading-[1.07] mb-4">
            Hablemos.
          </h2>
          <p className="text-[17px] font-medium text-graphite dark:text-[#a1a1a6] mb-6">
            ¿Buscás integrar desarrollo industrial con IA? Escribime.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-[14px] font-medium tracking-tight text-ink dark:text-snow bg-[#f5f5f7] dark:bg-black px-5 py-2.5 rounded-full border border-transparent hover:border-[rgb(65,89,118)] transition-colors duration-300"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-[14px] font-medium tracking-tight text-ink dark:text-snow bg-[#f5f5f7] dark:bg-black px-5 py-2.5 rounded-full border border-transparent hover:border-[rgb(65,89,118)] transition-colors duration-300"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-6"
          >
          <label className="flex flex-col">
            <span className="text-[14px] font-medium text-ink dark:text-snow mb-2">
              Tu nombre
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ej: Ana García"
              className="bg-[#f5f5f7] dark:bg-black py-4 px-6 text-ink dark:text-snow rounded-[16px] outline-none border border-transparent focus:border-[rgb(65,89,118)] transition-colors"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[14px] font-medium text-ink dark:text-snow mb-2">
              Tu Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ana@empresa.com"
              className="bg-[#f5f5f7] dark:bg-black py-4 px-6 text-ink dark:text-snow rounded-[16px] outline-none border border-transparent focus:border-[rgb(65,89,118)] transition-colors"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[14px] font-medium text-ink dark:text-snow mb-2">
              Tu Mensaje
            </span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tengo un proyecto interesante..."
              className="bg-[#f5f5f7] dark:bg-black py-4 px-6 text-ink dark:text-snow rounded-[16px] outline-none border border-transparent focus:border-[rgb(65,89,118)] transition-colors resize-none"
              required
            />
          </label>

          {status === "success" && (
            <p className="text-center text-[14px] font-medium text-green-600 dark:text-green-400">
              ¡Mensaje enviado! Te respondo a la brevedad.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-[14px] font-medium text-red-600 dark:text-red-400">
              No se pudo enviar. Intentá por email directo.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-[rgb(65,89,118)] py-4 px-8 rounded-full outline-none w-full text-white font-bold tracking-tight text-[17px] hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </button>
          </motion.form>

          <div className="relative h-[320px] md:h-[440px] hidden md:block">
            <Suspense fallback={null}>
              <Earth3D />
            </Suspense>
            <ModelLoader />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
