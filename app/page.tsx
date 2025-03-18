import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <section>
        <div>
          <Image
            src="/images/home/bgpm.jpg"
            alt="image de couverture de l'association presence madagascar"
            width={6400}
            height={2032}
          />
        </div>
      </section>
      <div className="flex w-full flex-col">
        <div className="divider text-3xl font-bold pt-8">QUI SOMME-NOUS ?</div>
      </div>
      <div className="text-2xl text-black-200 font-semibold text-center mt-4">
        "PRESENCE MADAGASCAR" : Un engagement pour l’avenir des jeunes en
        difficulté
      </div>
      <div className="w-2/3 mx-auto my-4">
        Depuis 2005, PRESENCE MADAGASCAR, une association suisse, œuvre
        activement à Madagascar pour offrir une seconde chance aux jeunes en
        situation de vulnérabilité. Nous nous consacrons à la récupération
        sociale et à l’insertion de :{" "}
      </div>

      <div className="grid sm:grid-cols-1 md:flex gap-4 sm:p-4 ">
        <div className="card bg-base-100 md:w-96 shadow-sm sm:w-full mx-4">
          <figure className="h-full">
            <Image
              src="/images/home/orphelin.jpg"
              alt="logo presence madagascar"
              width={600}
              height={400}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Jeunes orphelins abandonnés</h2>
          </div>
        </div>
        <div className="card bg-base-100 md:w-96 shadow-sm sm:w-full mx-4">
          <figure className="h-full">
            <Image
              src="/images/home/adolescent.jpg"
              alt="logo presence madagascar"
              width={600}
              height={400}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mamans adolescentes en détresse</h2>
          </div>
        </div>
        <div className="card bg-base-100 md:w-96 shadow-sm sm:w-full mx-4">
          <figure className="h-full">
            <Image
              src="/images/home/rupture.jpg"
              alt="logo presence madagascar"
              width={600}
              height={400}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Enfants en rupture familiale et en grande précarité
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 md:w-96 shadow-sm sm:w-full mx-4">
          <figure className="h-full">
            <Image
              src="/images/home/descolarise.jpg"
              alt="logo presence madagascar"
              width={600}
              height={400}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Enfants déscolarisés sans accès à l’éducation
            </h2>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col">
        <div className="divider text-3xl font-bold pt-8">NOS PROJETS</div>
      </div>

      <section>
        <div className="flex items-center justify-center flex-wrap mx-4 my-4 gap-4 sm:p-4 ">
          <div className="card bg-warning w-96 shadow-lg">
            <figure className="px-10 pt-10">
              <Image
                src="/images/home/fa.jpg"
                alt="Famille d'acceuil"
                className="rounded-full border-8 border-white"
                width={250}
                height={250}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Familles d`accueil</h2>
              <p>
                Familles d'accueil <br />
                Accueil d’enfants orphelins, abandonnés ou en grande difficulté
              </p>
              <div className="card-actions">
                <Link href="/famille_d_acceil">
                  {" "}
                  <button className="btn btn-primary">En savoir plus</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-info w-96 shadow-lg">
            <figure className="px-10 pt-10">
              <Image
                src="/images/home/ecole.jpg"
                alt="Shoes"
                className="rounded-full border-8 border-white"
                width={250}
                height={250}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Ecoles</h2>
              <p>Scolarisation d’enfants issus de milieux défavorisés</p>
              <div className="card-actions">
                <Link href="/ecole">
                  {" "}
                  <button className="btn btn-primary">En savoir plus</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-success w-96 shadow-lg">
            <figure className="px-10 pt-10">
              <Image
                src="/images/home/centre.jpg"
                alt="Shoes"
                className="rounded-full border-8 border-white"
                width={250}
                height={250}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Centre d'accueil</h2>
              <p>
                centre d'accueil du jour <br />
                Cours d’alphabétisation; Formations professionnelles (Couture,
                artisanat, ménuiserie, permaculture...).
              </p>
              <div className="card-actions">
                <Link href="/centre">
                  {" "}
                  <button className="btn btn-primary">En savoir plus</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex w-full flex-col">
        <div className="divider sm:flex text-3xl font-bold pt-8">
          UN REGARD SUR NOTRE MISSION
        </div>
      </div>

      <section>
        <div className="flex flex-wrap items-center justify-center md:grid md:grid-cols-3 gap-3 my-8 mx-4">
          <div className="w-full">
            <Image
              src="/images/portfolio/a.jpg"
              alt="Shoes"
              width={800}
              height={600}
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/portfolio/b.jpg"
              alt="Shoes"
              width={800}
              height={600}
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/portfolio/c.jpg"
              alt="enfants présence madagascar"
              width={800}
              height={600}
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/portfolio/d.jpg"
              alt="Shoes"
              width={800}
              height={600}
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/portfolio/e.jpg"
              alt="Shoes"
              width={800}
              height={600}
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/portfolio/f.jpg"
              alt="Shoes"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      <div className="flex w-full flex-col">
        <div className="divider text-3xl font-bold pt-8">
          EVENEMENTS RECENTS
        </div>

        <div className="flex justify-center flex-wrap gap-4 my-8">
          {" "}
          <div className="card mb-4 bg-base-100 w-70 shadow-lg">
            <figure>
              <Image
                src="/images/actus/a43.jpg"
                alt="presence madagascar image"
                className="w-full"
                width={280}
                height={260}
              />
            </figure>
            <div className="card-body items-center text-center">
              <div className="badge badge-dash badge-primary">Octobre 2024</div>
              <h4>
                Visite du Président de l'Association Présence Madagascar : Un
                Moment de Partage et de Solidarité{" "}
              </h4>
              <div className="card-actions">
                <Link href="/article/43" as="/article/43">
                  <button className="btn btn-warning">Lire l'article</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card mb-4 bg-base-100 w-70 shadow-lg">
            <figure>
              <Image
                src="/images/actus/a42.jpg"
                alt="presence madagascar image"
                className="w-full"
                width={280}
                height={260}
              />
            </figure>
            <div className="card-body items-center text-center">
              <div className="badge badge-dash badge-primary">
                SEPTEMBRE 2024
              </div>
              <h4>
                SEPTEMBRE 2024 : Présence Madagascar Suisse Finance la
                Rénovation de l'École Le Lumignon{" "}
              </h4>
              <div className="card-actions">
                <Link href="/article/42" as="/article/42">
                  <button className="btn btn-warning">Lire l'article</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card mb-4 bg-base-100 w-70 shadow-lg">
            <figure>
              <Image
                src="/images/actus/a41.jpg"
                alt="presence madagascar image"
                className="w-full"
                width={280}
                height={260}
              />
            </figure>
            <div className="card-body items-center text-center">
              <div className="badge badge-dash badge-primary">Avril 2022</div>
              <h4>
                AVRIL 2022 : Soutien des Ambassades Suisse et Allemande au
                Centre Fanantenana : Un Projet pour l'Avenir{" "}
              </h4>
              <div className="card-actions">
                <Link href="/article/41" as="/article/41">
                  <button className="btn btn-warning">Lire l'article</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
