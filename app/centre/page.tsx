import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section>
        <div>
          <Image
            src="/images/bgfanantenana.jpg"
            alt="logo presence madagascar"
            width={4000}
            height={1950}
          />
        </div>
        <div className="p-8 my-8 lg:text-xl">
          {" "}
          <div className="flex w-full flex-col">
            <div className="flex divider text-3xl font-bold my-8">
              PRESENTATION DU CENTRE{" "}
            </div>
            <p className="indent-8 text-gray-700 m-4 text-justify">
              Le Centre est situé en ville de Toamasina sur un terrain d’un seul
              tenant de 18'000 m2, sur la propriété dite « FANANTENANA IV»,
              portant titre foncier N° 10780-BA, dans le quartier
              d’Andranomadio, parcelle 11/43 ; son périmètre est entouré d’un
              mur d’enceinte en dur et de deux portails en métal. Il est
              constitué de :
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/polyvalent.jpg"
                    alt="Atelier polyvalent du centre fanantenana"
                    width={640}
                    height={401}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    1 bâtiment plurifonctionnel de 175 m2 en dur
                  </h2>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Atelier couture</li>
                    <li>Atelier de langue</li>
                    <li>Atelier d'alphabetisation</li>
                    <li>Gymnase, omnisport</li>
                  </ul>
                </div>
              </div>

              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/pavillons.jpg"
                    alt="4 pavillons du centre fanantenanana"
                    width={640}
                    height={401}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    4 pavillons occupationnels de 50 m2 en semi-dur d’une
                    capacité de 30 enfants/pavillon{" "}
                  </h2>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Cours élémentaire</li>
                    <li>Cours d'alphabétisation</li>
                  </ul>
                </div>
              </div>

              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/atelierbois.jpg"
                    alt="4 pavillons du centre fanantenanana"
                    width={640}
                    height={401}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Atelier bois</h2>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>pour la formation en ménuiserie</li>
                    <li>capacité : environs 10 apprentis</li>
                    <li>
                      Grâce au futur dons colléctés, nous envisageons l'achat
                      d'outils plus professionels
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card card-side bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/chateau.jpg"
                    alt="4 pavillons du centre fanantenanana"
                    width={640}
                    height={401}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">2 châteaux d'eau </h2>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>1 pour les besoins sanitaires </li>
                    <li>1 pour l'arrosage des plantes en permaculture</li>
                  </ul>
                </div>
              </div>

              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/permaculture.jpg"
                    alt="4 pavillons du centre fanantenanana"
                    width={640}
                    height={401}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">1 Ha de terrain cultivable </h2>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Adapté au pérmaculture</li>
                    <li>
                      Possibilités d'exploitation pou une culture à grande
                      echelle
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/cultivable.jpg"
                    alt="4 pavillons du centre fanantenanana"
                    width={640}
                    height={401}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">1 Ha de terrain cultivable </h2>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Adapté à la pisciculture</li>
                    <li>Terrain inéxploité</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="divider text-3xl font-bold my-8">
              RESSOURCES HUMAINES{" "}
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>1 directeur de projet</li>
              <li>2 enseignants (formés ASAMA)</li>
              <li>1 animateur sports & loisirs</li>
              <li>3 moniteurs d’atelier</li>
              <li>1 gardien (famille résident sur place)</li>
            </ul>

            <div className="divider text-3xl font-bold my-8">
              PROBLEMES RENCONTRES{" "}
            </div>
            <p className="indent-8 text-gray-700 m-4 text-justify">
              En phase de démarrage et à des fins préventives, il y a d’ores et
              déjà un besoin avéré de mettre l’accent sur le suivi en milieu (de
              l’environnement) familial de l’enfant ; il s’agit a priori de
              repérer les cas d’extrême pauvreté (négligés ou occultés), afin de
              palier à certaines carences (nourriture, vêtements, santé), et
              d’évaluer son environnement socio-éducatif, en vue d’assurer un
              cursus social et pédagogique adapté à chaque situation. Donner la
              priorité aux situations d’urgences.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
