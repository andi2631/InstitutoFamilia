import { ArrowUpRight } from "lucide-react";

interface Article {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ARTICLES: Article[] = [
  {
    title: "¿Está acabando el feminismo con «la mujer femenina»?",
    description: "7 claves para la «emergencia de nuestro tiempo»",
    imageUrl: "/articles_photos/feminism_photo.png",
    link: "https://www.religionenlibertad.com/cultura/220525/feminismo-lucha-feminidad-libro-maria-calvo_91150.html?utm_source=newsletter&utm_medium=email&utm_campaign=20250208&utm_content=noticia",
  },
  {
    title: "Familiaris Consortio",
    description:
      "Exhortación apostólica Familiaris Consortio de su santidad Juan Pablo ii al episcopado, al clero y a los fieles de toda la iglesia sobre la misión de la familia cristiana en el mundo actual",
    imageUrl: "/articles_photos/familiaris_consortio.png",
    link: "https://www.vatican.va/content/john-paul-ii/es/apost_exhortations/documents/hf_jp-ii_exh_19811122_familiaris-consortio.html",
  },
  {
    title: "Encuentro mundial de las familias",
    description: "Catequesis de preparación al X ENCUENTRO MUNDIAL DE LAS FAMILIAS",
    imageUrl: "/articles_photos/encuentro_mundial.png",
    link: "https://icm.org.uy/wp-content/uploads/2022/05/X-Encuentro-Mundial-de-las-familias.pdf",
  },
  {
    title: "Portal de libros UCA",
    description: "Libros de la Universidad Católica de Argentina",
    imageUrl: "/articles_photos/portal_de_libros.png",
    link: "https://omp.uca.edu.ar/index.php/uca/index",
  },
];

const ArticlesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-blue-800 sm:text-4xl">
            Artículos de interés
          </h1>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-blue-500" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Documentos, lecturas y recursos para seguir profundizando sobre el
            matrimonio y la familia.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, index) => (
            <a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              data-aos="fade-up"
              data-aos-delay={index * 75}
            >
              <div className="flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100 p-5">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="line-clamp-2 text-lg font-semibold text-blue-900 transition group-hover:text-blue-700">
                  {article.title}
                </h2>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {article.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                  Leer más
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
