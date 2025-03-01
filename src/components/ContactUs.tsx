import React, { useState } from 'react';
import { Mail, Phone, } from 'lucide-react';
import TransitionsSnackbar from './SnackBar'
import emailjs from '@emailjs/browser';
import OrganizationList from './Organizations/OrganizationList';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '', phoneNumber: '' });
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_ajarp6z',
        'template_bsqz3ba',
        {
          to_email: 'acorrotti@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          from_phoneNumber: formData.phoneNumber,
          message: formData.message,
        },
        'zwgmP-UN6Q1MeHPnn',

      );

      console.log('Email sent successfully:', result.text);
      setFormData({ name: '', email: '', message: '', phoneNumber: '' });
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 font-lexend">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8" data-aos="zoom-in">
          ¡Contáctanos!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="zoom-in">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <form
              onSubmit={handleSubmit}
              className="bg-white px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Nombre:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Nombre..."
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phoneNumber"
                >
                  Número de celular:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="text"
                  placeholder="tu número de celular"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  (Opcional) Email:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Mensaje:
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Escibe tu mensaje aquí..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </div>

            </form>
            <TransitionsSnackbar open={snackbarOpen} handleClose={handleCloseSnackbar} />
          </div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <h2 className="text-2xl font-bold mb-4">Contactos: </h2>
            <div className="space-y-4">
              <h3 className="text-l font-bold mb-4">Experiencia "SOBRE ROCA":  </h3>
              <p className="flex items-center">
                <Mail className="mr-2" size={20} /> icf.sobreroca@gmail.com
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={20} />
                +598 99 313 326 - Inés Garicoïts de Ferrés
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={20} />
                +598 99 0454 46 - Majo Ximenez de Rachetti
              </p>
              <h3 className="text-l font-bold mb-4">Cimientos del matrimonio: </h3>
              <p className="flex items-center">
                <Mail className="mr-2" size={20} />
                cienciasfamiliares@gmail.com
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={20} />
                +598 94 363 602 - Mónica Regules
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={20} />
                +598 92 023 465 - María Noel
              </p>
              
              <h3 className="text-l font-bold mb-4">Contacto general ICF: </h3>
              <p className="flex items-center">
                <Mail className="mr-2" size={20} />
                icfuruguay@gmail.com 
              </p>
              <p className="flex items-center">
               <b>“El que escucha mis Palabras y las practica, se parece a un hombre que queriendo construir una casa, cavó profundamente y puso los cimientos sobre la Roca”</b> 
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
