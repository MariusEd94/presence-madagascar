import Link from "next/link";
import Image from "next/image";

export default function articles() {
  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center items-center md:grid lg:grid md:grid-cols-3 lg:grid-cols-4 gap-3">
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
            <div className="badge badge-dash badge-primary">SEPTEMBRE 2024</div>
            <h4>
              SEPTEMBRE 2024 : Présence Madagascar Suisse Finance la Rénovation
              de l'École Le Lumignon{" "}
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
              AVRIL 2022 : Soutien des Ambassades Suisse et Allemande au Centre
              Fanantenana : Un Projet pour l'Avenir{" "}
            </h4>
            <div className="card-actions">
              <Link href="/article/41" as="/article/41">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/40.jpg"
              alt="Shoes"
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

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/inaugTerrain_tumb.jpg"
              alt="Shoes"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Février 2021</div>
            <h4>
              Inauguration des 2 mini-terrains de foot au CENTRE FANANTENANA ...{" "}
            </h4>
            <div className="card-actions">
              <Link href="/article/37" as="/article/37">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/renovationActu_tumb.jpg"
              alt="Shoes"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Janvier 2021</div>
            <h4>Rénovation du CENTRE FANANTENANA ... </h4>
            <div className="card-actions">
              <Link href="/article/36" as="/article/36">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/repasActu_tumb.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Séptembre 2021</div>
            <h4>1ère edition REPAS DE SOUTIEN pour l'association ... </h4>
            <div className="card-actions">
              <Link href="/article/35" as="/article/35">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/cours_famille.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">2019</div>
            <h4>
              Après les familles d’accueil de nouvelles prises en charge se
              profilent ...{" "}
            </h4>
            <div className="card-actions">
              <Link href="/article/34" as="/article/34">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/menuiserie1.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">2019</div>
            <h4>
              Construction d'un nouveau local pour l'ATELIER DE MENUISERIE ...{" "}
            </h4>
            <div className="card-actions">
              <Link href="/article/33" as="/article/33">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu_gardennage_tumb.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Janvier 2021</div>
            <h4>
              Inauguration du pavillon d’habitation du gardien et de sa famille
              au centre FANANTENANA ...{" "}
            </h4>
            <div className="card-actions">
              <Link href="/article/32" as="/article/32">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu_vernissage_tumb.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Décembre 2019 </div>
            <h4>
              Vernissage à St-Triphon au profit des enfants de PRESENCE
              MADAGASCAR ...
            </h4>
            <div className="card-actions">
              <Link href="/article/31" as="/article/31">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu_lampion_tumb.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Août 2019 </div>
            <h4>
              Vente de lampions en faveur de Presence Madagascar, à l’occasion
              de la fête nationale ...
            </h4>
            <div className="card-actions">
              <Link href="/article/30" as="/article/30">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu_expo_tumb.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Juin 2019 </div>
            <h4>
              A l’initiative de l’ACAAT, une exposition s’est tenue en juin 2019
              au Gymnase Soavita ...
            </h4>
            <div className="card-actions">
              <Link href="/article/29" as="/article/29">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu_couture_tumb.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Mars 2019 </div>
            <h4>
              Remise des certificats aux éleves de l'atelier couture au CENTRE
              FANANTENANA ...
            </h4>
            <div className="card-actions">
              <Link href="/article/28" as="/article/28">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu_primaire_tumb.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Février 2019 </div>
            <h4>
              Réussite avec un taux de 96%, aux examen nationale CEPE des élèves
              du centre FANANTENANA ...
            </h4>
            <div className="card-actions">
              <Link href="/article/27" as="/article/27">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu_bois_tumb.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Janvier 2019 </div>
            <h4>
              Atelier bois-menuiserie : Adriana, lauréat 2019 pose devant son
              chef-d’oeuvre ...
            </h4>
            <div className="card-actions">
              <Link href="/article/26" as="/article/26">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu1.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Novembre 2018 </div>
            <h4>
              Un fervent soutien de Marcel à l’autonomie financière de l’école
              MIARANTSOA ...
            </h4>
            <div className="card-actions">
              <Link href="/article/25" as="/article/25">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu2.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Novembre 2018 </div>
            <h4>
              Visite de M. Marcel au centre FANANTENANA <br />
              ...
            </h4>
            <div className="card-actions">
              <Link href="/article/24" as="/article/24">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu3.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Novembre 2018 </div>
            <h4>
              Visite de M. Marcel au centre FANANTENANA <br />
              ...
            </h4>
            <div className="card-actions">
              <Link href="/article/23" as="/article/23">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu4.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Octobre 2018 </div>
            <h4>
              L’Ecole Le Lumignon poursuit son développement ; deux nouvelles
              classes en construction ...
            </h4>
            <div className="card-actions">
              <Link href="/article/22" as="/article/22">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu5.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">
              Septembre 2018{" "}
            </div>
            <h4>Centre d’accueil Fanantenana ; priorité à la sécurité: ...</h4>
            <div className="card-actions">
              <Link href="/article/21" as="/article/21">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu6.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Juillet 2018 </div>
            <h4>
              Remise des certificats à la promotion 2018 de l’atelier couture
              ...
            </h4>
            <div className="card-actions">
              <Link href="/article/20" as="/article/20">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu7.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Novembre 2017 </div>
            <h4>
              Ecole Le Lumignon prête pour la rentrée scolaire 2017-2018 ...
            </h4>
            <div className="card-actions">
              <Link href="/article/19" as="/article/19">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu8.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Octobre 2017 </div>
            <h4>
              Réfection d’un pavillon scolaire de l’école de brousse
              "Miarantsoa" ...
            </h4>
            <div className="card-actions">
              <Link href="/article/18" as="/article/18">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu9.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Octobre 2017 </div>
            <h4>
              Etablissements scolaires fermés pour cause de la peste! . ...
            </h4>
            <div className="card-actions">
              <Link href="/article/17" as="/article/17">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu10.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Juin 2017 </div>
            <h4>
              2ème promotion atelier couture au Centre d’accueil Fanantenana .
              ...
            </h4>
            <div className="card-actions">
              <Link href="/article/16" as="/article/16">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu11.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Juin 2017 </div>
            <h4>
              Les apprentis de l’atelier "bout de bois" (travail avec des outils
              rudimentaires) ...
            </h4>
            <div className="card-actions">
              <Link href="/article/15" as="/article/15">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu12.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Avril 2017 </div>
            <h4>
              Formation continue du personnel Distribution des certificats par
              M. Robert MacGregor, formateur ...
            </h4>
            <div className="card-actions">
              <Link href="/article/14" as="/article/14">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu13.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Avril 2017 </div>
            <h4>
              une infirmière bénévole de l’organisation Mercyships procède à une
              visite médicale à l’école Le Lumignon ...
            </h4>
            <div className="card-actions">
              <Link href="/article/13" as="/article/13">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu14.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Janvier 2017 </div>
            <h4>
              Notre directeur Eddy à la conférence nationale des écoles
              chrétiennes ...{" "}
            </h4>
            <div className="card-actions">
              <Link href="/article/12" as="/article/12">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu15.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Janvier 2017 </div>
            <h4>
              Demarrage atelier bois : un bon debut pour les apprentis en herbe
              ...{" "}
            </h4>
            <div className="card-actions">
              <Link href="/article/11" as="/article/11">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu16.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Décembre 2016 </div>
            <h4>
              Partenariat de l'association PRESENCE MADAGASCAR avec l' AJIPAD
              ...{" "}
            </h4>
            <div className="card-actions">
              <Link href="/article/10" as="/article/10">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu17.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Décembre 2016 </div>
            <h4>
              Michel Gallay s’est rendu à la fête de Noël à l’école de brousse
              Miarantsoa... ...{" "}
            </h4>
            <div className="card-actions">
              <Link href="/article/9" as="/article/9">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu18.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Août 2016 </div>
            <h4>Promotion atelier couture 2016 </h4>
            <div className="card-actions">
              <Link href="/article/8" as="/article/8">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu19.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Mai 2016 </div>
            <h4>Inauguration du château d'eau : don du SGS </h4>
            <div className="card-actions">
              <Link href="/article/7" as="/article/7">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu20.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Avril 2016 </div>
            <h4>Concert de Bastian Baker à l'école "Le Lumignon" </h4>
            <div className="card-actions">
              <Link href="/article/6" as="/article/6">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu21.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Novembre 2015 </div>
            <h4>Un don de 10'000.-CHF offert par la société SGS </h4>
            <div className="card-actions">
              <Link href="/article/5" as="/article/5">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu22.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Octobre 2015 </div>
            <h4>1'000 livres neufs offerts par l’ONG adventiste « HELP »</h4>
            <div className="card-actions">
              <Link href="/article/4" as="/article/4">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu24.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">
              Septembre 2015{" "}
            </div>
            <h4>
              Livraison du PAM (Programme Alimentaire Mondial) pour le Centre
              Fanantenana.
            </h4>
            <div className="card-actions">
              <Link href="/article/3" as="/article/3">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu25.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Juillet 2015 </div>
            <h4>Visite + vacances avec la famille Meyer </h4>
            <div className="card-actions">
              <Link href="/article/2" as="/article/2">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card mb-4 bg-base-100 w-70 shadow-lg">
          <figure>
            <Image
              src="/images/actus/actu26.jpg"
              alt="PRESENCE MADAGASCAR"
              className="w-full"
              width={280}
              height={260}
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="badge badge-dash badge-primary">Juillet 2015 </div>
            <h4>Ecole Miarantsoa; les résultats au CEPE ont été excellents</h4>
            <div className="card-actions">
              <Link href="/article/1" as="/article/1">
                <button className="btn btn-warning">Lire l'article</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
