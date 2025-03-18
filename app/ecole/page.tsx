import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section>
        <div>
          <Image
            src="/images/bglumignon.jpg"
            alt="logo presence madagascar"
            width={6400}
            height={2032}
          />
        </div>
        <div className="p-8 my-8 lg:text-xl">
          {" "}
          <div className="flex w-full flex-col">
            <div className="divider text-3xl font-bold my-8">
              Ecole "LE LUMIGNON"
            </div>
            <p className="indent-8 text-gray-700 m-4 text-justify">
              En juillet 2009, après la mise en place des familles d’accueil, un
              nouveau chapitre s’est ouvert pour l’Association
              Présence-Madagascar avec le financement de A à Z d’une école
              située dans le quartier pauvre et populaire de la « Verrerie » à
              Tamatave, à savoir :
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                L’acquisition de plusieurs parcelles de terrain au nom de
                l’association P@M
              </li>
              <li>
                La construction de plusieurs pavillons scolaires en semi-dur
              </li>
              <li>La construction en dur d’un bloc sanitaire</li>
              <li>
                La fourniture des tables-bancs et autres matériels scolaires
              </li>
            </ul>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/lum1.jpg"
                    alt="ecole le lumignon"
                    width={640}
                    height={480}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Enceinte de l'école LE LUMIGNON
                  </h2>
                </div>
              </div>

              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/lum2.jpg"
                    alt="ecole le lumignon"
                    width={640}
                    height={480}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Bibliothèque : don du Rotary club de Monthey
                  </h2>
                </div>
              </div>
            </div>
            <p className="indent-8 text-gray-700 m-4 text-justify">
              L’école « Le Lumignon » est sortie de terre en 3 mois et
              opérationnelle pour environ 330 enfants entre 3 et 7 ans à la
              rentrée scolaire d’octobre 2009. Après des années d’une expérience
              concluante en faveur de la scolarisation d’enfants issus de
              milieux défavorisés, la rentrée scolaire 2014-2015, sous l’égide
              de P&M, a vu l’effectif de l’école « Le Lumignon » s’établir à
              1'081 élèves (de 3 à 13 ans), inscrits dans les classes qui vont
              de la maternelle au collège (6ème et 5ème). Les constructions de
              plusieurs salles de classe en dur ont accompagné la croissance de
              l’effectif des élèves prévu pour la prochaine rentrée scolaire
              2015-2016, avec notamment l’élévation sur étages de deux
              bâtiments, dont un financé pour moitié par l’ambassade de Suisse
              de Madagascar. Un engagement d’autant plus fécond de notre
              Association qui a permis la construction d’un parc immobilier
              comprenant plusieurs bâtiments en dur et en semi-dur, ainsi que la
              construction d’une bibliothèque abritant les 12'000 livres
              scolaires offerts par le Rotary Club de Monthey, grâce à
              l’initiative de M.Tamini, l’un de ses membres actifs. L'effectif
              du personnel quant à lui représente actuellement une trentaine de
              postes de travail, répartis selon l’organigramme ad hoc dans 5
              secteurs d’activités.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/lumignon1.jpg"
                    alt="ecole le lumignon"
                    width={640}
                    height={480}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    "Plus qu'une classe, une famille."
                  </h2>
                </div>
              </div>

              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/lumignon2.jpg"
                    alt="ecole le lumignon"
                    width={640}
                    height={480}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    "Un don qui change des vies : une bibliothèque pour un
                    avenir meilleur."
                  </h2>
                </div>
              </div>

              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/lumignon3.jpg"
                    alt="ecole le lumignon"
                    width={640}
                    height={480}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    "Un cartable plein de rêves, des cœurs remplis d’espoir."
                  </h2>
                </div>
              </div>
            </div>

            <p className="indent-8 text-gray-700 m-4 text-justify">
              Toujours avec l’idée d’éviter le cercle vicieux de l’assistanat,
              l’objectif d’autofinancement de l’école « Le Lumignon », avec son
              millier d’élèves à la prochaine rentrée scolaire est maintenu ; de
              même que doit être maintenu un écolage "social" de 5'000
              Ariary/élève/mois (1,60 CHF) et des frais d’inscription abordables
              pour une majorité de familles précarisées. Le développement
              exceptionnel de cet établissement scolaire vient confirmer le
              choix de P&M de s’investir dans l’éducation des enfants d’un
              quartier populaire du plus grand port de Madagascar.
            </p>
            <p className="indent-8 text-gray-700 m-4 text-justify">
              A terme, l’école « Le Lumignon » est susceptible de contribuer
              substantiellement aux frais de fonctionnement du projet «
              Fanantenana » (Espoir), à savoir : Un centre d’accueil d’enfants
              orphelins ou abandonnés, en rupture familiale, en situation
              précaire, déscolarisés, et de mamans adolescentes ; corroborant la
              vocation socio-humanitaire de P&M dans son investissement auprès
              des familles d’accueil.
            </p>
          </div>
        </div>

        <div className="p-8 my-8 lg:text-xl">
          <div className="flex w-full flex-col">
            <div className="divider text-3xl font-bold my-4">
              Ecole "MIARANTSOA"
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 pt-8">
              {" "}
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/miarantsoa1.jpg"
                    alt="ecole le lumignon"
                    width={640}
                    height={480}
                  />
                </figure>
              </div>
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/miarantsoa2.jpg"
                    alt="ecole le lumignon"
                    width={640}
                    height={480}
                  />
                </figure>
              </div>
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <Image
                    src="/images/miarantsoa3.jpg"
                    alt="ecole le lumignon"
                    width={640}
                    height={480}
                  />
                </figure>
              </div>
            </div>

            <p className="indent-8 text-gray-700 m-4 text-justify">
              Après un premier soutien à la construction en 2008 d’un pavillon
              scolaire (capacité de 60 élèves) en brousse périurbaine à 4 km de
              Tamatave, l’arrivée massive d’enfants non scolarisés, issus de
              l’exode rural dans cette zone, a motivé M. Martin (un malgache
              s’il vous plaît !), lui-même ancien orphelin et prof dans un
              lycée, à s’engager personnellement et financièrement dans ce
              projet qui touchent dorénavant quelques 250 enfants entre 4 et 12
              ans. La vocation pionnière de M. Martin a rapidement convaincu
              notre délégué Michel Gallay de s’investir dans le développement de
              cette école de brousse qui ne comportait qu’un seul pavillon,
              genre paillotte, pour une soixantaine d’élèves.
            </p>

            <p className="indent-8 text-gray-700 m-4 text-justify">
              Alors qu’en ville les salaires des institutrices sont couverts par
              les écolages payés par les parents, c’est nettement plus difficile
              en brousse où les gens sont démunis, d’assurer le fonctionnement
              de l’école avec ses 5 institutrices (M. Martin intervenant
              bénévolement). Pour parvenir à l’autofinancement, principe à la
              base de nos actions, nous avons mis en place et sur place
              différentes activité (maraîchage, pisciculture, élevage) Pour ce
              faire, l’association Présence-Madagascar a investi en finançant :
              2 vaches (dont la vente du lait couvre le salaire de deux
              institutrices) et 1 élevage d’une centaine de poulets de chair
              (dont la vente couvre le salaire d’une institutrice).
            </p>

            <p className="indent-8 text-gray-700 m-4 text-justify">
              Les écolages irréguliers d’un montant de 1'000 Ariary/mois/élève
              (0.33 CHF / 0.30 euros) couvrent tout juste le salaire des deux
              autres institutrices ; à noter que les institutrices ne sont pas
              salariées pendant les vacances scolaires (3 mois). Salaire d’une
              institutrice : 33.- CHF ou 30 euros / mois .
            </p>
            <p className="indent-8 text-gray-700 m-4 text-justify">
              On est en droit de se poser la question sur la pratique salariale
              de l’école ; réponse : les institutrices sont payées au barème
              minimum imposé par le CISCO (circonscription scolaire) ; le fait
              également qu’il n’y a pas de pénurie de personnel indique qu’il y
              a un réel intérêt ou un réel besoin de trouver un emploi dans un
              pays où on compte 90% de chômeurs.
            </p>
            <p className="indent-8 text-gray-700 m-4 text-justify">
              Si ce n’est pas le cas pour tous les enseignants, on peut dire,
              sans risquer de se tromper, que M. Martin fait bénéficier à toute
              une jeunesse sacrifiée sur l’autel de la pauvreté, d’une vocation
              qui lui vient d’avoir été orphelin dès son plus jeune âge.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
