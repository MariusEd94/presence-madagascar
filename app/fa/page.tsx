import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section>
        <div>
          <Image
            src="/images/home/bgpm.jpg"
            alt="logo presence madagascar"
            width={6400}
            height={2032}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 m-8">
          <div className="px-4">
            {" "}
            <div className="text text-4xl">Le choix des familles d’accueil</div>
            <div className="text">
              Trouver une famille d’accueil adaptée est un défi majeur. Grâce au
              réseau des églises locales, nous identifions les besoins et
              évaluons chaque placement avec soin. Nos expériences passées nous
              ont appris à renforcer notre suivi, garantissant ainsi notre
              crédibilité auprès des autorités et la réussite des placements.
            </div>
          </div>
          <div className="px-4">
            {" "}
            <div className="text text-4xl">Accueil des enfants en détresse</div>
            <div className="text">
              Chaque placement est un véritable sauvetage : ces enfants sont
              souvent malnutris, malades et déscolarisés. Bien que nous ne
              puissions pas toujours intervenir, notre réseau s’est développé
              pour offrir des solutions d’urgence. L’accueil en famille permet
              de répondre aux besoins essentiels : alimentation, soins,
              éducation et encadrement.{" "}
            </div>
          </div>

          <div className="px-4">
            {" "}
            <div className="text text-4xl">
              Recherche des familles d’accueil
            </div>
            <div className="text">
              Nous sélectionnons les familles via les églises locales et le
              bouche-à-oreille. Malgré la forte demande, nous avons toujours des
              familles prêtes à accueillir un enfant. Le principal obstacle
              reste les démarches administratives, mais nous restons à l’écoute
              de nouvelles solutions pour répondre aux besoins croissants.{" "}
            </div>
          </div>
          <div className="px-4">
            {" "}
            <div className="text text-4xl">Un suivi rigoureux et efficace</div>
            <div className="text">
              Chaque famille reçoit une visite mensuelle, planifiée en amont. Le
              suivi porte sur le bien-être de l’enfant et le remboursement du
              microcrédit accordé aux familles pour assurer leur autonomie
              financière. Face aux défis économiques, nous avons réduit la durée
              des prêts de 5 ans à 2 ans et demi, avec un montant ajusté, tout
              en conservant la possibilité d’un renouvellement.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
