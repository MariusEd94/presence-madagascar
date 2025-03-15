import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section>
        <div>
          <Image
            src="/image/bgDon.jpg"
            alt="logo presence madagascar"
            width={4000}
            height={13320}
          />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 m-8">
          <div className="card mb-4 bg-green-200 w-full shadow-lg">
            <div className="card-body items-center text-center">
              <h1 className="card-title">PARRAINAGE</h1>
              <h4>
                Présence-Madagascar a mis en place deux types de parrainages
                pour des enfants en âge de scolarité : <br />
                <h1>- A partir de 20.-CHF/mois</h1>
                <br />
                Le Parrainage de base couvre les frais de prise en charge et la
                scolarisation d’un enfant dans notre Centre d’accueil
                Fanantenana(Espoir), ou dans une famille d’accueil. <br />{" "}
                <h1>- A partir de 50.- CHF/mois</h1>
                Vous alimentez le fonds d’entraide pour des besoins spécifiques
                (projet socio-éducatif, soins, nourriture, habillement,
                formation) destinés aux enfants.
              </h4>
            </div>{" "}
          </div>

          <div className="card mb-4 bg-blue-200 w-full shadow-lg">
            <div className="card-body items-center text-center">
              <h1 className="card-title">DON</h1>
              <p>
                Nous rappelons que toute personne sensibilisée par la détresse
                de ces enfants en situation de grande vulnérabilité peut
                apporter sa contribution dans le but d’améliorer leurs condition
                de vie.
              </p>

              <p>
                Nos objectifs recouvrent les droits de l’enfant définis dans la
                Convention des Droits de l’Enfant (CDE), à savoir : droit à une
                formation pour apprendre un métier, droit à exercer une activité
                en toute sécurité, droit à un travail léger et limité, droit à
                des repos maladie, droit à être respecté, droit à être écouté,
                droit à s’amuser, à jouer, droit à des soins de santé, droit à
                s’exprimer et à s’organiser, droit à apprendre à lire et à
                écrire et droit à un recours et à une justice équitable, en cas
                de problèmes.
              </p>
            </div>{" "}
          </div>
        </div>
        <div className="text text-2xl text-center my-4 mb-4">
          Les dons et les parrainages peuvent être versés sur le compte de
          l’Association : <br />
          Ass. Présence Madagascar <br />
          IBAN: CH52 0900 0000 1742 8260 2 CHF <br />
          PostFinance SA <br />
          Mingestrasse 20, CH-3030 Berne <br />
          SWIFT/BIC: POFICHBEXXX <br />
          ou <br />
          par TWINT au 078 655 00 31 <br />
        </div>
      </section>
    </main>
  );
}
