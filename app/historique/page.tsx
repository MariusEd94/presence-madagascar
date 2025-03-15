import Image from "next/image";
export default function Home() {
  return (
    <main className="mx-8 my-8">
      <div className="text-4xl m-auto text-center my-12">
        Des débuts modestes à un impact grandissant
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle  w-25 h-25">
            <Image
              src="/images/historiques/1.jpg"
              alt="présence madagascar"
              width={200}
              height={174}
              className="rounded-full"
            />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2005</time>
            <div className="text-lg font-black">
              Création de l' association Présence Madagascar
            </div>
            Fondé par Michel GALLAY
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle  w-25 h-25">
            <Image
              src="/images/historiques/2.jpg"
              alt="présence madagascar"
              width={200}
              height={174}
              className="rounded-full"
            />
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2006</time>
            <div className="text-lg font-black">
              Délivrance d’une attestation de reconnaissance par le Ministère de
              la Population (MG).
            </div>
            Placements des premiers enfants orphelins ou abandonnés en familles
            d’accueil.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle  w-25 h-25">
            <Image
              src="/images/historiques/3.jpg"
              alt="présence madagascar"
              width={200}
              height={174}
              className="rounded-full"
            />
          </div>{" "}
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2008</time>
            <div className="text-lg font-black">
              Mis en place du centre "FANANTENANA"
            </div>
            <ul>
              <li>
                - Acquisition d’un terrain de 2 ha pour le futur projet de
                Centre d’accueil FANANTENANA.
              </li>
              <li>
                - Construction de 4 pavillons scolaires en semi-dur pour classes
                d’alphabétisation FANANTENANA.
              </li>
              <li>
                - Construction d’une salle polyvalente de 175 m2 en dur
                (Atelier, sport) FANANTENANA.
              </li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle  w-25 h-25">
            <Image
              src="/images/historiques/4.jpg"
              alt="présence madagascar"
              width={200}
              height={174}
              className="rounded-full"
            />
          </div>{" "}
          <div className="timeline-end mb-10 md:text-end">
            <time className="font-mono italic">2009</time>
            <div className="text-lg font-black">Ouverture des écoles</div>
            <ul>
              <li>
                - Ouverture de l’école de brousse "MIARANTSOA" (construction de
                3 pavillons en bois")
              </li>
              <li>
                - Création de l’association partenaire malgache Génération
                Avenir
              </li>
              <li>
                - Acquisition de plusieurs parcelles de terrain pour l’école "LE
                LUMIGNON"
              </li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle  w-25 h-25">
            <Image
              src="/images/historiques/5.jpg"
              alt="présence madagascar"
              width={200}
              height={174}
              className="rounded-full"
            />
          </div>{" "}
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2010 - 2014</time>
            <div className="text-lg font-black">
              Construction grâce à des financements{" "}
            </div>
            <ul>
              <li>
                - 2010: Construction de 4 pavillons scolaires en semi-dur pour
                l’école Le Lumignon
              </li>

              <li>
                - 2011: Construction de 2 salles de classe en dur pour l’école
                Le Lumignon
              </li>

              <li>
                - 2012: Construction de la bibliothèque en dur subventionnée par
                le Rotary Cub de Monthey CH
              </li>

              <li>
                - 2012: Construction de 4 pavillons scolaires en bois pour les
                maternelles à l’école Le Lumignon
              </li>

              <li>
                - 2013: Construction de 4 salles de classe en dur sur un étage
                pour l’école Le Lumignon - 2014: Construction de 2 salles de
                classe en dur pour l’école Le Lumignon
              </li>

              <li>
                - 2014: Ecole de brousse Miarantsoa ; construction d’un nouveau
                pavillon en bois{" "}
              </li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle  w-25 h-25">
            <Image
              src="/images/historiques/6.jpg"
              alt="présence madagascar"
              width={200}
              height={174}
              className="rounded-full"
            />
          </div>{" "}
          <div className="timeline-end mb-10 md:text-end">
            <time className="font-mono italic">2018</time>
            <div className="text-lg font-black"></div>
            <ul>
              <li>- Délivrance d'une attestation d'exonération</li>
              <li>
                - Finaliste au concours BCV Solidarité du projet de Centre
                d’apprentissage
              </li>
              <li>
                - Couverture de deux nouvelles classes à l'école Le Lumignon
              </li>
              <li>- Mise en place du PSE (plan sectoriel de l’éducation)</li>
              <li>
                - Création de l'association partenaire malgache
                Présence-Madagascar{" "}
              </li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle  w-25 h-25">
            <Image
              src="/images/historiques/7.jpg"
              alt="présence madagascar"
              width={200}
              height={174}
              className="rounded-full"
            />
          </div>{" "}
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black">
              Rénovation du centre FANANTENANA{" "}
            </div>
            <ul>
              <li>
                - Rénovation des 4 pavillons scolaires et du bâtiment principal
              </li>
              <li>
                - Construction de 2 minis terrains de foot au Centre d’Accueil
                FANANTENENA{" "}
              </li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle  w-25 h-25">
            <Image
              src="/images/historiques/8.jpg"
              alt="présence madagascar"
              width={200}
              height={174}
              className="rounded-full"
            />
          </div>{" "}
          <div className="timeline-end mb-10 md:text-end">
            <time className="font-mono italic">2021</time>
            <div className="text-lg font-black"> </div>
            <ul>
              <li>- Achat d'une vache laitière pour l'Ecole Miarantsoa.</li>
              <li>
                - Construction d'une aire de jeux pour notre Ecole du Lumignon.
              </li>
            </ul>{" "}
          </div>
          <hr />
        </li>
      </ul>
    </main>
  );
}
