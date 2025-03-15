"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import articles from "../../data/articles.json";
import Link from "next/link";

export default function ArticlePage() {
  const { id } = useParams(); // Utilisation de useParams() pour récupérer l'ID

  // Convertir l'id en nombre (si nécessaire) pour la comparaison
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return <h1>Article non trouvé</h1>;
  }

  return (
    <div className="p-8 m-4 md:flex lg:flex">
      <div
        className=" md:w-2/3 lg:w-2/3 m-4 text-md"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <div className="md:w-1/3 lg:w-1/3 m-4">
        {" "}
        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/40.jpg"
              alt="repas2"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Août 2021</div>
            <h4>
              2ème EDITION REPAS DE SOUTIEN. Plus de 160 personnes sont venus...{" "}
            </h4>
            <div className="card-actions">
              <Link href="/article/40" as="/article/40">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/39.jpg"
              alt="Shoes"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Juin 2021</div>
            <h4>Inauguration de l'aire de jeux de l'école LE LUMIGNON... </h4>
            <div className="card-actions">
              <Link href="/article/39" as="/article/39">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/38.jpg"
              alt="Shoes"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Mars 2021</div>
            <h4>Vente de vanilles au frofit de PRESENCE MADAGASCAR... </h4>
            <div className="card-actions">
              <Link href="/article/38" as="/article/38">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
