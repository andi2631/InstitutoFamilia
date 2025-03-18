import { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Simulación de carga de datos (puede cambiarse por una API real)
    setArticles([
      {
        id: 1,
        title: "El impacto de la tecnología en la educación",
        description: "Descubre cómo la tecnología está transformando la educación en el siglo XXI.",
        imageUrl: "https://source.unsplash.com/400x250/?technology,education",
        link: "#",
      },
      {
        id: 2,
        title: "Tendencias en el desarrollo web para 2025",
        description: "Un vistazo a las tendencias emergentes en el desarrollo web para los próximos años.",
        imageUrl: "https://source.unsplash.com/400x250/?web,development",
        link: "#",
      },
      {
        id: 3,
        title: "Cómo mejorar la productividad trabajando desde casa",
        description: "Consejos prácticos para ser más productivo mientras trabajas de forma remota.",
        imageUrl: "https://source.unsplash.com/400x250/?work,productivity",
        link: "#",
      },
    ]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Artículos de Interés</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
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
