"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import articles from "../../data/articles.json";

// Définir une interface TypeScript pour un article
interface Article {
  id: number;
  title?: string;
  image?: string;
  content: string;
  images?: string[]; // images peut être un tableau ou non défini
}

export default function ArticlePage() {
  const params = useParams();
  const id = params?.id;

  if (!id) {
    return <h1>Chargement...</h1>;
  }

  const article: Article | undefined = articles.find(
    (a) => a.id === Number(id)
  );

  if (!article) {
    return <h1>Article non trouvé</h1>;
  }

  return (
    <div className="p-4 md:w-2/3 lg:w-2/3 mx-auto">
      <h1 className="text text-2xl text-center my-6">{article.title}</h1>

      {/* Image principale */}

      <Image
        src={`${article.image}`}
        width={700}
        height={525}
        alt={article.title ?? "Titre"}
        className="mx-auto"
      />

      {/* Contenu de l'article */}
      <div className="text text-md text-justify my-6">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      {/* Galerie d'images - Affichée uniquement si des images existent */}
      {Array.isArray(article.images) && article.images.length > 0 ? (
        <div>
          <h2 className="text text-center text-2xl text-zinc-950 my-6">
            Galerie
            <hr />
          </h2>
          <div className="flex flex-wrap gap-4 justify-center md:grid md:grid-cols-2">
            {article.images.map((img, index) => (
              <Image
                key={index}
                src={`${img}`}
                width={300}
                height={200}
                className="w-full"
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
