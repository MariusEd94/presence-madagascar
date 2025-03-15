import Image from "next/image";
export default function Home() {
  return (
    <div className="mx-auto lg:w-1/2 my-8">
      <div className="text text-bold text-2xl text-center my-4">
        Michel Gallay : Fondateur de l'association PRESENCE MADAGASCAR
      </div>
      <Image
        src="/images/michel.jpg"
        alt="logo presence madagascar"
        width={900}
        height={587}
        className="rounded-full"
      />
      <div>
        {" "}
        <p className="indent-8 text-gray-700 m-4 text-justify">
          Fondateur de l'association Présence-Madagascar, Michel nous a
          malheureusement quitté le 5 septembre 2020. Par ces quelques mots, son
          fils Bertrand désire rendre hommage à son père qui a dédié sa vie au
          service des plus démunis.
        </p>
        <p className="indent-8 text-gray-700 m-4 text-justify">
          Après avoir passé plusieurs années chez Nestlé, Michel s’investit dans
          une ONG en faveur des orphelins du Sahel (Morija). Interpellé par la
          détresse des toxicomanes, il quitta Nestlé en 1984 pour reprendre des
          études en sciences économiques et devient par la suite directeur du
          centre Gai-Matin avant de fonder le foyer la courte Echelle à Saxon.
          Toujours désireux d’aider son prochain, il ouvre une ferme pédagogique
          au domaine de Szilassi à Bex et dans une même dynamique le foyer André
          à la côte-aux-fées .
        </p>
        <p className="indent-8 text-gray-700 m-4 text-justify">
          Cette homme passionné et au grand cœur ne s’arrêta pas là. Bertrand
          nous raconte comment tout a commencé avec Madagascar en 2004: «Mon
          père, grand globe-trotter depuis sa tendre jeunesse, a voulu me
          montrer à travers ce 1er voyage commun sur la grande île, comment il
          voyageait à l'époque des seventies quand il traversa l'Afrique à pied
          et en stop ou encore lorsqu’avec ma mère, ils prirent la route des
          Indes en vélo Solex depuis Genève. Notre voyage avait aussi un but
          humanitaire, comme souvent, il désirait aider une nouvelle association
          à Mananjary au sud-est de Madagascar.
        </p>
        <p className="indent-8 text-gray-700 m-4 text-justify">
          A notre retour en Suisse, je ne fus point surpris quand il me dit:
          fils je vends tout et pars vivre à Madagascar pour aider les enfants
          orphelins. Il créa donc Présence Madagascar devant notaire en Suisse,
          avant de partir s'installer définitivement à Tamatave. Au départ le
          but de l'association était de créer des microcrédits pour les enfants
          orphelins et de les placer dans des familles d'accueil. 15 plus tard
          nous voici donc avec trois identités différentes que vous pouvez
          découvrir sur ce site.
        </p>
        <p className="indent-8 text-gray-700 m-4 text-justify">
          En plus de me laisser cet immense héritage et responsabilité, mon
          tendre père me laisse un cadeau encore plus grand. Sa dernière
          aventure fut la rencontre avec Odile sa femme et l’agrandissement de
          ma famille avec ma demi-sœur Jael et mon demi-frère Eliam. Nous
          essayons, avec l’aide de ma famille et de quelques amis, de faire
          perdurer l’œuvre de papa. Il est important que l'association *Présence
          Madagascar* continue à redonner le sourire aux enfants. <br />
          <b className="text text-2xl mt-4"> Bertrand Gallay</b>
        </p>
      </div>
      <div className="text text-2xl">
        Ps: si vous êtes intéressés à en savoir plus sur mon père et ses
        voyages, un livre: «les lendemain qui chantent» est disponible sur
        demande.
      </div>
    </div>
  );
}
