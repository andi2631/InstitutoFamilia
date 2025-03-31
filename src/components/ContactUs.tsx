import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import TransitionsSnackbar from "./SnackBar";
import emailjs from "@emailjs/browser";
import OrganizationList from "./Organizations/OrganizationList";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setFormData({ name: "", email: "", message: "", phoneNumber: "" });
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
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

      console.log("Email sent successfully:", result.text);
      setFormData({ name: "", email: "", message: "", phoneNumber: "" });
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Failed to send email:", error);
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
      className="py-16 bg-gradient-to-b from-blue-50 to-gray-100 font-lexend"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-extrabold text-gray-800 text-center mb-12"
          data-aos="fade-up"
        >
          ¡Contáctanos!
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          data-aos="fade-up"
        >
          {/* Formulario */}
          <div className="bg-white shadow-lg rounded-lg p-10"
            data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="name"
                >
                  Nombre:
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="phoneNumber"
                >
                  Número de celular:
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  id="phoneNumber"
                  type="text"
                  placeholder="Tu número de celular"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  (Opcional) Email:
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  id="email"
                  type="email"
                  placeholder="Tu correo electrónico"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="message"
                >
                  Mensaje:
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                ></textarea>
              </div>
              <button
                className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
            <TransitionsSnackbar
              open={snackbarOpen}
              handleClose={handleCloseSnackbar}
            />
            <div className="mt-12">
              <img
                src="logos_icf/Instituto de Ciencias Familiares-28.png"
                alt="ICF"
                className="my-auto p mx-auto w-80 h-auto"
              />
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            {/* Información general del ICF */}
            <div className="bg-white shadow-lg rounded-lg p-8"
              data-aos="fade-left"
            >
              <h3 className="text-2xl text-blue-800 mb-4">Contacto General</h3>
              <div className="flex items-center space-x-4 mb-4">
                <Mail className="text-blue-500" size={30} />
                <p className="text-lg text-gray-700">icfuruguay@gmail.com</p>
              </div>
            </div>

            {/* Experiencia "SOBRE ROCA" */}
            <div className="bg-white shadow-lg rounded-lg p-8"
              data-aos="fade-left">
              <h3 className="text-2xl text-blue-800 mb-4">
                Experiencia "Sobre Roca"
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-500" size={30} />
                  <p className="text-lg text-gray-700">
                    icf.sobreroca@gmail.com
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-500" size={30} />
                  <p className="text-lg text-gray-700">
                    098 130 002 (Inés Garicoïts de Ferrés)
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-500" size={30} />
                  <p className="text-lg text-gray-700">
                    099 045 446 (Majo Ximenez de Rachetti)
                  </p>
                </div>
              </div>
            </div>

            {/* Cimientos del Matrimonio */}
            <div className="bg-white shadow-lg rounded-lg p-8"
              data-aos="fade-left">
              <h3 className="text-2xl text-blue-800 mb-4">
                Cimientos del Matrimonio
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-500" size={30} />
                  <p className="text-lg text-gray-700">
                    cienciasfamiliares@gmail.com
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-500" size={30} />
                  <p className="text-lg text-gray-700">
                    094 363 602 (Mónica Regules)
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-500" size={30} />
                  <p className="text-lg text-gray-700">
                    092 023 465 (María Noel)
                  </p>
                </div>
              </div>
            </div>

            {/* Frase inspiradora */}
            <div className="bg-white shadow-lg rounded-lg p-8"
              data-aos="fade-left">
              <p className="text-lg text-gray-700 border-l-4 border-blue-500 pl-4">
                <em>
                  “El que escucha mis Palabras y las practica, se parece a un
                  hombre que queriendo construir una casa, cavó profundamente y
                  puso los cimientos sobre la Roca” <br />
                  <b> Lc 6: 47-49 </b>
                </em>
              </p>
            </div>
          </div>
        </div>
        <OrganizationList />
      </div>
    </section>
  );
};

export default ContactUs;
