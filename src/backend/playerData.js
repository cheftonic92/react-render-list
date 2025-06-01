const PlayerList = [
  {
    number: 1,
    name: 'Juan Musso',
    age: 31,
    nationality: 'Argentina',
    position: 'Portero',
    height: 191,
    weight: 93,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/17866/destacado_460x460/jmusso900x900.png?1724774858',
  },
  {
    number: 2,
    name: 'José María Giménez',
    age: 30,
    nationality: 'Uruguaya',
    position: 'Defensa',
    height: 185,
    weight: 79,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16532/destacado_460x460/BUSTOS_WEB_900x900_0001_2_J-M-GIMENEZ.png?1723912630',
  },
  {
    number: 3,
    name: 'César Azpilicueta',
    age: 35,
    nationality: 'Española',
    position: 'Defensa',
    height: 178,
    weight: 77,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16549/destacado_460x460/BUSTOS_WEB_900x900_0002_3_AZPILICUETA.png?1723909630',
  },
  {
    number: 4,
    name: 'Conor Gallagher',
    age: 24,
    nationality: 'Inglesa',
    position: 'Centrocampista',
    height: 182,
    weight: 76,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/17861/destacado_460x460/BUSTOS_WEB_900x900_4_GALLAGHER.png?1724317286',
  },
  {
    number: 5,
    name: 'Rodrigo De Paul',
    age: 30,
    nationality: 'Argentina',
    position: 'Mediocentro',
    height: 180,
    weight: 70,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16539/destacado_460x460/BUSTOS_WEB_900x900_0003_5_R-DE-PAUL.png?1723911372',
  },
  {
    number: 6,
    name: '"Koke" Resurrección',
    age: 33,
    nationality: 'Española',
    position: 'Mediocentro',
    height: 176,
    weight: 77,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16530/destacado_460x460/BUSTOS_WEB_900x900_0004_6_KOKE.png?1723913064',
  },
  {
    number: 7,
    name: 'Antoine Griezmann',
    age: 34,
    nationality: 'Francesa',
    position: 'Delantero',
    height: 175,
    weight: 73,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16540/destacado_460x460/BUSTOS_WEB_900x900_0005_7_GRIEZMANN.png?1723911273',
  },
  {
    number: 8,
    name: 'Pablo Barrios',
    age: 21,
    nationality: 'Española',
    position: 'Centrocampista',
    height: 181,
    weight: 75,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16546/destacado_460x460/BUSTOS_WEB_900x900_0006_8_BARRIOS.png?1723899812',
  },
  {
    number: 9,
    name: 'Alexander Sørloth',
    age: 29,
    nationality: 'Noruega',
    position: 'Delantero',
    height: 196,
    weight: 90,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/17833/destacado_460x460/BUSTOS_WEB_900x900_0007_9_SORLOTH.png?1723908355',
  },
  {
    number: 10,
    name: 'Ángel Correa',
    age: 30,
    nationality: 'Argentina',
    position: 'Delantero',
    height: 171,
    weight: 70,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16533/destacado_460x460/BUSTOS_WEB_900x900_0008_10_CORREA.png?1723912394',
  },
  {
    number: 11,
    name: 'Thomas Lemar',
    age: 29,
    nationality: 'Francesa',
    position: 'Centrocampista',
    height: 170,
    weight: 63,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16535/destacado_460x460/BUSTOS_WEB_900x900_0009_11_LEMAR.png?1723912250',
  },
  {
    number: 12,
    name: 'Samuel Lino',
    age: 25,
    nationality: 'Brasileña',
    position: 'Centrocampista',
    height: 170,
    weight: 68,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16550/destacado_460x460/BUSTOS_WEB_900x900_0010_12_S-LINO.png?1723909316',
  },
  {
    number: 13,
    name: 'Jan Oblak',
    age: 32,
    nationality: 'Eslovena',
    position: 'Portero',
    height: 188,
    weight: 87,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16531/destacado_460x460/BUSTOS_WEB_900x900_0011_13_OBLAK.png?1723912745',
  },
  {
    number: 14,
    name: 'Marcos Llorente',
    age: 30,
    nationality: 'Española',
    position: 'Centrocampista',
    height: 184,
    weight: 74,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16537/destacado_460x460/BUSTOS_WEB_900x900_0012_14_M-LLORENTE.png?1723911864',
  },
  {
    number: 15,
    name: 'Clément Lenglet',
    age: 29,
    nationality: 'Francesa',
    position: 'Defensa',
    height: 186,
    weight: 81,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/17864/destacado_460x460/lenglet_900x900.png?1724672851',
  },
  {
    number: 16,
    name: 'Nahuel Molina',
    age: 27,
    nationality: 'Argentina',
    position: 'Defensa',
    height: 175,
    weight: 70,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16544/destacado_460x460/BUSTOS_WEB_900x900_0013_16_MOLINA.png?1723910992',
  },
  {
    number: 17,
    name: 'Rodrigo Riquelme',
    age: 25,
    nationality: 'Española',
    position: 'Centrocampista',
    height: 175,
    weight: 66,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16548/destacado_460x460/BUSTOS_WEB_900x900_0014_17_RIQUELME.png?1723910171',
  },
  {
    number: 19,
    name: 'Julián Álvarez',
    age: 25,
    nationality: 'Argentina',
    position: 'Delantero',
    height: 170,
    weight: 71,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/17850/destacado_460x460/BUSTOS_WEB_900x900_0016_19_J-ALVAREZ.png?1723896994',
  },
  {
    number: 20,
    name: 'Axel Witsel',
    age: 36,
    nationality: 'Belga',
    position: 'Defensa',
    height: 186,
    weight: 81,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16545/destacado_460x460/BUSTOS_WEB_900x900_0017_20_WITSEL.png?1723910700',
  },
  {
    number: 21,
    name: 'Javi Galán',
    age: 30,
    nationality: 'Española',
    position: 'Defensa',
    height: 173,
    weight: 68,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/17523/destacado_460x460/BUSTOS_WEB_900x900_0022_JAVI-GALAN.png?1723904436',
  },
  {
    number: 22,
    name: 'Giuliano Simeone',
    age: 22,
    nationality: 'Argentina',
    position: 'Centrocampista',
    height: 173,
    weight: 73,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/17514/destacado_460x460/BUSTOS_WEB_900x900_0019_22_GIULIANO.png?1723900610',
  },
  {
    number: 23,
    name: 'Reinildo Mandava',
    age: 31,
    nationality: 'Mozambiqueña',
    position: 'Defensa',
    height: 180,
    weight: 73,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/16541/destacado_460x460/BUSTOS_WEB_900x900_0020_23_REINILDO.png?1723910840',
  },
  {
    number: 24,
    name: 'Robin Le Normand',
    age: 28,
    nationality: 'Española',
    position: 'Defensa',
    height: 186,
    weight: 78,
    photo:
      'https://img-estaticos.atleticodemadrid.com/system/fotos/17831/destacado_460x460/BUSTOS_WEB_900x900_0021_24_LE-NORMAND.png?1723908828',
  },
];

const GKList = PlayerList.filter((player) => player.position === 'Goalkeeper');
const DEFList = PlayerList.filter((player) => player.position === 'Defender');
const MIDList = PlayerList.filter((player) => player.position === 'Midfielder');
const FWDList = PlayerList.filter((player) => player.position === 'Attacker');

module.exports = {PlayerList, GKList, DEFList, MIDList, FWDList};
