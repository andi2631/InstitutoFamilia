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
        title: "¿Está acabando el feminismo con «la mujer femenina»?",
        description: "7 claves para la «emergencia de nuestro tiempo»",
        imageUrl: "/articles_photos/feminism_photo.png",
        link: "https://www.religionenlibertad.com/cultura/220525/feminismo-lucha-feminidad-libro-maria-calvo_91150.html?utm_source=newsletter&utm_medium=email&utm_campaign=20250208&utm_content=noticia",
      },
    ]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Artículos de Interés</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
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
