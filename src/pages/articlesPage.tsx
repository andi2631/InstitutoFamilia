import { useEffect, useState } from "react";

interface Article {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles([
      {
        title: "¿está acabando el feminismo con «la mujer femenina»?",
        description: "7 claves para la «emergencia de nuestro tiempo»",
        imageUrl: "/articles_photos/feminism_photo.png",
        link: "https://www.religionenlibertad.com/cultura/220525/feminismo-lucha-feminidad-libro-maria-calvo_91150.html?utm_source=newsletter&utm_medium=email&utm_campaign=20250208&utm_content=noticia",
      },
      {
        title: "Familiaris Consortio",
        description: "Exhortación apostólica Familiaris Consortio de su santidad Juan Pablo ii al episcopado, al clero y a los fieles de toda la iglesia sobre la misión de la familia cristiana en el mundo actual",
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
    ]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Artículos de Interés</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-contain" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Leer más
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
