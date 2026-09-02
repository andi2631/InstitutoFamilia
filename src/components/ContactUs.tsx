import React, { useState } from "react";
import { Loader2, Mail, Phone, Quote, Send } from "lucide-react";
import TransitionsSnackbar from "./SnackBar";
import emailjs from "@emailjs/browser";
import OrganizationList from "./Organizations/OrganizationList";

interface ContactItem {
  type: "mail" | "phone";
  value: string;
  person?: string;
}

interface ContactBlock {
  title: string;
  items: ContactItem[];
}

const CONTACT_BLOCKS: ContactBlock[] = [
  {
    title: "Contacto general",
    items: [{ type: "mail", value: "icfuruguay@gmail.com" }],
  },
  {
    title: 'Experiencia "Sobre Roca"',
    items: [
      { type: "mail", value: "icf.sobreroca@gmail.com" },
      { type: "phone", value: "098 130 002", person: "Inés Garicoïts de Ferrés" },
      { type: "phone", value: "099 045 446", person: "Majo Ximenez de Rachetti" },
    ],
  },
  {
    title: "Cimientos",
    items: [
      { type: "mail", value: "cienciasfamiliares@gmail.com" },
      { type: "phone", value: "094 363 602", person: "Mónica Regules" },
      { type: "phone", value: "092 023 465", person: "María Noel de Tezanos" },
    ],
  },
];

/** 098 130 002 -> tel:+59898130002 */
const toHref = (item: ContactItem) =>
  item.type === "mail"
    ? `mailto:${item.value}`
    : `tel:+598${item.value.replace(/\D/g, "").replace(/^0/, "")}`;

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-800 placeholder-gray-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30";
const labelClass = "mb-1.5 block text-sm font-medium text-gray-700";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    try {
      await emailjs.send(
        "service_ajarp6z",
        "template_bsqz3ba",
        {
          to_email: "acorrotti@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          from_phoneNumber: formData.phoneNumber,
          message: formData.message,
        },
        "zwgmP-UN6Q1MeHPnn"
      );

      setFormData({ name: "", email: "", message: "", phoneNumber: "" });
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-blue-50 to-gray-100 py-16 font-lexend"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-blue-800">¡Contáctanos!</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-blue-500" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Escribinos por el formulario o comunicate directamente con el equipo
            de cada actividad.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Formulario */}
          <div
            className="flex flex-col self-start rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8 md:sticky md:top-8"
            data-aos="fade-right"
          >
            <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold text-gray-800">
              <span className="h-6 w-1 rounded-full bg-blue-500" />
              Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Nombre
                  </label>
                  <input
                    className={inputClass}
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phoneNumber">
                    Celular
                  </label>
                  <input
                    className={inputClass}
                    id="phoneNumber"
                    type="tel"
                    inputMode="tel"
                    placeholder="Tu celular"
                    name="phoneNumber"
                    autoComplete="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  Email <span className="font-normal text-gray-400">(opcional)</span>
                </label>
                <input
                  className={inputClass}
                  id="email"
                  type="email"
                  placeholder="Tu correo electrónico"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  className={`${inputClass} resize-y`}
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                />
              </div>

              {hasError && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  No pudimos enviar el mensaje. Probá de nuevo o escribinos a{" "}
                  <a className="font-semibold underline" href="mailto:icfuruguay@gmail.com">
                    icfuruguay@gmail.com
                  </a>
                  .
                </p>
              )}

              <button
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>

            <TransitionsSnackbar
              open={snackbarOpen}
              handleClose={handleCloseSnackbar}
            />

            <img
              src="/logos_icf/Instituto de Ciencias Familiares-28.png"
              alt="Instituto de Ciencias Familiares"
              className="mx-auto mt-auto w-48 pt-8 opacity-80"
            />
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            {CONTACT_BLOCKS.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg transition duration-300 hover:shadow-xl sm:p-8"
                data-aos="fade-left"
              >
                <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold text-blue-800 sm:text-2xl">
                  <span className="h-6 w-1 rounded-full bg-blue-500" />
                  {block.title}
                </h3>

                <ul className="space-y-1">
                  {block.items.map((item) => (
                    <li key={item.value}>
                      <a
                        href={toHref(item)}
                        className="group -mx-2 flex items-center gap-4 rounded-xl p-2 transition hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                          {item.type === "mail" ? (
                            <Mail size={20} />
                          ) : (
                            <Phone size={20} />
                          )}
                        </span>
                        <span className="min-w-0">
                          <span className="block break-words text-sm font-medium text-gray-800 transition group-hover:text-blue-700 sm:text-base">
                            {item.value}
                          </span>
                          {item.person && (
                            <span className="block text-sm text-gray-500">
                              {item.person}
                            </span>
                          )}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Frase inspiradora */}
            <figure
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-lg sm:p-8"
              data-aos="fade-left"
            >
              <Quote className="mb-3 h-7 w-7 text-blue-200" fill="currentColor" />
              <blockquote className="border-l-4 border-blue-500 pl-4 text-lg italic leading-relaxed text-gray-700">
                El que escucha mis Palabras y las practica, se parece a un hombre
                que queriendo construir una casa, cavó profundamente y puso los
                cimientos sobre la Roca
              </blockquote>
              <figcaption className="mt-3 pl-5 text-sm font-bold text-blue-800">
                Lc 6, 47-49
              </figcaption>
            </figure>
          </div>
        </div>

        <OrganizationList />
      </div>
    </section>
  );
};

export default ContactUs;
