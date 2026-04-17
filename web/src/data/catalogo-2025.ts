export type CatalogMetric = {
  label: string;
  value: string;
};

export type CatalogColorOption = {
  label: string;
  image?: string;
};

export type CatalogProduct = {
  title: string;
  code: string;
  description: string;
  image: string;
  family: string;
  metrics: CatalogMetric[];
  colorOptions?: CatalogColorOption[];
  note?: string;
};

export type Revestimiento = {
  title: string;
  image: string;
  metrics: CatalogMetric[];
};

export type PremoldeadoTipico = {
  title: string;
  image: string;
};

export type CamaraTipica = {
  camara: string;
  aExterior: string;
  bExterior: string;
  cExterior: string;
  aInterior: string;
  bInterior: string;
  espesor: string;
  peso: string;
};

export const catalogDownloadHref = "/catalogo-2025/catalogo-cimalco-2025.pdf";

export const catalogSections = [
  {
    id: "industrializados",
    title: "Premoldeados industrializados",
    description: "Bloques, adoquines y revestimientos.",
  },
  {
    id: "pretensados",
    title: "Pretensados",
    description: "Columnas y piezas para tendidos electricos.",
  },
  {
    id: "premoldeados",
    title: "Premoldeados",
    description: "Bases, bodegas de pozo y camaras de inspeccion.",
  },
];

export const industrializadosDescription =
  "Producimos bloques, adoquines y revestimientos de canales aluvionales con procesos automatizados que garantizan uniformidad y calidad constante.";

export const bloqueraProducts: CatalogProduct[] = [
  {
    title: "Bloque liso de hormigon",
    code: "P20",
    description: "Modulo estandar para mamposteria y muros de uso general.",
    image: "/catalogo-2025/bloquera/p20.png",
    family: "Bloquera",
    metrics: [
      { label: "Ancho", value: "19 cm" },
      { label: "Largo", value: "39 cm" },
      { label: "Altura", value: "19 cm" },
      { label: "Cantidad x m2", value: "12,5" },
      { label: "Cantidad x pallet", value: "90" },
    ],
  },
  {
    title: "Bloque liso U",
    code: "U20",
    description: "Pieza para vigas encadenadas y refuerzos estructurales.",
    image: "/catalogo-2025/bloquera/u20.png",
    family: "Bloquera",
    metrics: [
      { label: "Ancho", value: "19 cm" },
      { label: "Largo", value: "39 cm" },
      { label: "Altura", value: "19 cm" },
      { label: "Cantidad x m2", value: "12,5" },
      { label: "Cantidad x pallet", value: "90" },
    ],
  },
  {
    title: "Medio bloque liso",
    code: "M20",
    description: "Formato medio bloque para ajustes, encuentros y terminaciones.",
    image: "/catalogo-2025/bloquera/p20.png",
    family: "Bloquera",
    metrics: [
      { label: "Ancho", value: "19 cm" },
      { label: "Largo", value: "19 cm" },
      { label: "Altura", value: "19 cm" },
      { label: "Cantidad x m2", value: "25" },
      { label: "Cantidad x pallet", value: "180" },
    ],
    note: "La carpeta 2025 no incluye una imagen separada para M20, por eso se referencia la linea base.",
  },
  {
    title: "Bloque splitado",
    code: "SP20",
    description: "Terminacion texturada para lectura arquitectonica.",
    image: "/catalogo-2025/bloquera/sp20.png",
    family: "Bloquera",
    metrics: [
      { label: "Ancho", value: "19 cm" },
      { label: "Largo", value: "39 cm" },
      { label: "Altura", value: "19 cm" },
      { label: "Cantidad x m2", value: "12,5" },
      { label: "Cantidad x pallet", value: "90" },
    ],
  },
  {
    title: "Medio bloque splitado",
    code: "MSP20",
    description: "Variante modular para ajustes dentro de la linea splitada.",
    image: "/catalogo-2025/bloquera/sp20m.png",
    family: "Bloquera",
    metrics: [
      { label: "Ancho", value: "19 cm" },
      { label: "Largo", value: "19 cm" },
      { label: "Altura", value: "19 cm" },
      { label: "Cantidad x m2", value: "25" },
      { label: "Cantidad x pallet", value: "180" },
    ],
  },
  {
    title: "Bloque liso murete",
    code: "P10",
    description: "Solucion para tabiques y muros de menor espesor.",
    image: "/catalogo-2025/bloquera/p10.png",
    family: "Bloquera",
    metrics: [
      { label: "Ancho", value: "9,5 cm" },
      { label: "Largo", value: "39 cm" },
      { label: "Altura", value: "19 cm" },
      { label: "Cantidad x m2", value: "12,5" },
      { label: "Cantidad x pallet", value: "180" },
    ],
  },
  {
    title: "Uni 8",
    code: "UNI 8",
    description: "Adoquin articulado con opcion color para alto uso.",
    image: "/catalogo-2025/bloquera/uni-h6-h8-gris.png",
    family: "Pavimentos",
    metrics: [
      { label: "Ancho", value: "12 cm" },
      { label: "Largo", value: "22 cm" },
      { label: "Altura", value: "8 cm" },
      { label: "Cantidad x m2", value: "40" },
      { label: "m2 x pallet", value: "12,3" },
    ],
    colorOptions: [
      { label: "Gris", image: "/catalogo-2025/bloquera/uni-h6-h8-gris.png" },
      { label: "Amarillo", image: "/catalogo-2025/bloquera/uni-h6-h8-amarillo.png" },
      { label: "Rojo", image: "/catalogo-2025/bloquera/uni-h6-h8-rojo.png" },
      { label: "Negro", image: "/catalogo-2025/bloquera/uni-h6-h8-negro.png" },
    ],
  },
  {
    title: "Holanda 8",
    code: "H8",
    description: "Adoquin rectangular con opcion color para superficies moduladas.",
    image: "/catalogo-2025/bloquera/uni-h6-h8-liso-gris.png",
    family: "Pavimentos",
    metrics: [
      { label: "Ancho", value: "10 cm" },
      { label: "Largo", value: "20 cm" },
      { label: "Altura", value: "8 cm" },
      { label: "Cantidad x m2", value: "50" },
      { label: "m2 x pallet", value: "12,9" },
    ],
    colorOptions: [
      { label: "Gris", image: "/catalogo-2025/bloquera/uni-h6-h8-liso-gris.png" },
      { label: "Amarillo", image: "/catalogo-2025/bloquera/uni-h6-h8-liso-amarillo.png" },
      { label: "Rojo", image: "/catalogo-2025/bloquera/uni-h6-h8-liso-rojo.png" },
      { label: "Negro", image: "/catalogo-2025/bloquera/uni-h6-h8-liso-negro.png" },
    ],
  },
  {
    title: "Holanda 6",
    code: "H6",
    description: "Version de menor espesor para pavimentos modulares con opcion color.",
    image: "/catalogo-2025/bloquera/uni-h6-h8-liso-gris.png",
    family: "Pavimentos",
    metrics: [
      { label: "Ancho", value: "10 cm" },
      { label: "Largo", value: "20 cm" },
      { label: "Altura", value: "6 cm" },
      { label: "Cantidad x m2", value: "50" },
      { label: "m2 x pallet", value: "16,2" },
    ],
    colorOptions: [
      { label: "Gris", image: "/catalogo-2025/bloquera/uni-h6-h8-liso-gris.png" },
      { label: "Amarillo", image: "/catalogo-2025/bloquera/uni-h6-h8-liso-amarillo.png" },
      { label: "Rojo", image: "/catalogo-2025/bloquera/uni-h6-h8-liso-rojo.png" },
      { label: "Negro", image: "/catalogo-2025/bloquera/uni-h6-h8-liso-negro.png" },
    ],
  },
];

export const revestimientos: Revestimiento[] = [
  {
    title: "HR 60",
    image: "/catalogo-2025/revestimientos/hr60.png",
    metrics: [
      { label: "Peso especifico", value: "2320 kg/m3" },
      { label: "Volumen", value: "1267,72 cm3" },
      { label: "Volumen m3", value: "0,0013" },
      { label: "Peso teorico", value: "2,94 kg" },
      { label: "Altura", value: "0,06 m" },
      { label: "Area", value: "0,021 m2" },
    ],
  },
  {
    title: "HR 80",
    image: "/catalogo-2025/revestimientos/hr80.png",
    metrics: [
      { label: "Peso especifico", value: "2320 kg/m3" },
      { label: "Volumen", value: "1707,00 cm3" },
      { label: "Volumen m3", value: "0,0017" },
      { label: "Peso teorico", value: "3,96 kg" },
      { label: "Altura", value: "0,08 m" },
      { label: "Area", value: "0,021 m2" },
    ],
  },
  {
    title: "HRD 100",
    image: "/catalogo-2025/revestimientos/hrd100.png",
    metrics: [
      { label: "Peso especifico", value: "2320 kg/m3" },
      { label: "Volumen", value: "3333,99 cm3" },
      { label: "Volumen m3", value: "0,0033" },
      { label: "Peso teorico", value: "7,73 kg" },
      { label: "Altura", value: "0,10 m" },
      { label: "Area", value: "0,033 m2" },
    ],
  },
  {
    title: "HRD 120",
    image: "/catalogo-2025/revestimientos/hrd120.png",
    metrics: [
      { label: "Peso especifico", value: "2320 kg/m3" },
      { label: "Volumen", value: "4042,15 cm3" },
      { label: "Volumen m3", value: "0,0040" },
      { label: "Peso teorico", value: "9,38 kg" },
      { label: "Altura", value: "0,12 m" },
      { label: "Area", value: "0,034 m2" },
    ],
  },
  {
    title: "HL 60",
    image: "/catalogo-2025/revestimientos/hl60.png",
    metrics: [
      { label: "Peso especifico", value: "2320 kg/m3" },
      { label: "Volumen", value: "3178,52 cm3" },
      { label: "Volumen m3", value: "0,0032" },
      { label: "Peso teorico", value: "7,37 kg" },
      { label: "Altura", value: "0,06 m" },
      { label: "Area", value: "0,053 m2" },
    ],
  },
  {
    title: "Loseta coronamiento",
    image: "/catalogo-2025/revestimientos/loseta-coronamiento.png",
    metrics: [
      { label: "Peso especifico", value: "2320 kg/m3" },
      { label: "Volumen", value: "35000 cm3" },
      { label: "Volumen m3", value: "0,0350" },
      { label: "Peso teorico", value: "81,20 kg" },
      { label: "Altura", value: "0,07 m" },
      { label: "Area", value: "0,500 m2" },
    ],
  },
];

export const pretensadosDescription =
  "Proveemos columnas y piezas especiales para tendidos electricos de baja, media y alta tension, cumpliendo con los mas altos estandares de seguridad y control tecnico.";

export const pretensadosColumns = [
  { load: "300", diameter: "12" },
  { load: "400", diameter: "13,5" },
  { load: "600", diameter: "16,5" },
  { load: "750", diameter: "18" },
  { load: "900", diameter: "18" },
  { load: "1050", diameter: "21" },
  { load: "1200", diameter: "22,5" },
  { load: "1500", diameter: "24" },
  { load: "1800", diameter: "25,5" },
  { load: "2100", diameter: "27" },
  { load: "2400", diameter: "27" },
  { load: "2700", diameter: "30" },
  { load: "3000", diameter: "30" },
  { load: "3300", diameter: "30" },
  { load: "3600", diameter: "33" },
  { load: "3900", diameter: "33" },
  { load: "4200", diameter: "36" },
  { load: "4500", diameter: "36" },
  { load: "4800", diameter: "37,5" },
  { load: "5100", diameter: "39" },
  { load: "6000", diameter: "40,5" },
  { load: "6000", diameter: "42" },
  { load: "7000", diameter: "43,5" },
];

export const pretensadosRows = [
  {
    length: "7,50",
    values: ["379", "434", "494", "548", "548", "661", "721", "783", "848", "915", "915", "1056", "1056", "1056", "1206", "1337", "1537", "1537", "1642", "1751", "1864", "1980", "2100"],
  },
  {
    length: "8,00",
    values: ["422", "481", "544", "601", "601", "723", "788", "855", "925", "997", "997", "1148", "1148", "1148", "1309", "1455", "1671", "1671", "1784", "1902", "2023", "2147", "2276"],
  },
  {
    length: "8,50",
    values: ["", "480", "595", "657", "657", "788", "857", "929", "1004", "1081", "1081", "1243", "1243", "1243", "1416", "1578", "1809", "1809", "1931", "2056", "2186", "2319", "2457"],
  },
  {
    length: "9,00",
    values: ["", "526", "649", "715", "715", "855", "930", "1007", "1086", "1169", "1169", "1342", "1342", "1342", "1526", "1705", "1952", "1952", "2082", "2216", "2354", "2497", "2643"],
  },
  {
    length: "9,50",
    values: ["", "", "", "776", "776", "926", "1005", "1087", "1171", "1259", "1259", "1443", "1443", "1443", "1639", "1837", "2099", "2099", "2238", "2380", "2527", "2679", "2835"],
  },
  {
    length: "10,00",
    values: ["", "", "", "840", "840", "999", "1083", "1170", "1260", "1353", "1353", "1548", "1548", "1548", "1756", "1973", "2252", "2252", "2398", "2549", "2705", "2866", "3031"],
  },
  {
    length: "10,50",
    values: ["", "", "", "906", "906", "1074", "1163", "1255", "1351", "1449", "1449", "1656", "1656", "1656", "2113", "2113", "2409", "2409", "2564", "2724", "2889", "3059", "3234"],
  },
  {
    length: "11,00",
    values: ["", "", "", "975", "975", "1153", "1247", "1344", "1445", "1549", "1549", "1768", "1768", "1768", "2258", "2258", "2570", "2570", "2734", "2903", "3077", "3257", "3441"],
  },
  {
    length: "11,50",
    values: ["", "", "", "1047", "1047", "1235", "1334", "1436", "1543", "1652", "1652", "1882", "1882", "1882", "2408", "2408", "2737", "2737", "2910", "3088", "3271", "3460", "3654"],
  },
  {
    length: "12,00",
    values: ["", "", "", "1121", "1121", "1319", "1424", "1532", "1643", "1759", "1759", "2001", "2001", "2001", "2563", "2563", "2909", "2909", "3090", "3278", "3470", "3669", "3873"],
  },
  {
    length: "12,50",
    values: ["", "", "", "", "1199", "1407", "1517", "1630", "1747", "1869", "1869", "2382", "2382", "2382", "2722", "2722", "3086", "3086", "3276", "3473", "3675", "3883", "4097"],
  },
  {
    length: "13,00",
    values: ["", "", "", "", "1279", "1498", "1613", "1732", "1855", "1982", "1982", "2530", "2530", "2530", "2887", "2887", "3268", "3268", "3468", "3674", "3885", "4104", "4328"],
  },
  {
    length: "13,50",
    values: ["", "", "", "", "1363", "1592", "1712", "1837", "1966", "2099", "2099", "2683", "2683", "2683", "3057", "3057", "3455", "3455", "3664", "3880", "4101", "4330", "4564"],
  },
  {
    length: "14,00",
    values: ["", "", "", "", "1449", "1689", "1815", "1945", "2080", "2219", "2219", "2841", "2841", "2841", "3231", "3231", "3648", "3648", "3867", "4092", "4323", "4561", "4806"],
  },
  {
    length: "14,50",
    values: ["", "", "", "", "", "", "", "2057", "2198", "2623", "2623", "3004", "3004", "3004", "3411", "3411", "3847", "3847", "4075", "4309", "4551", "4799", "5054"],
  },
  {
    length: "15,00",
    values: ["", "", "", "", "", "", "", "2172", "2319", "2774", "2774", "3171", "3171", "3171", "3597", "3597", "4051", "4051", "4288", "4533", "4784", "5043", "5309"],
  },
  {
    length: "15,50",
    values: ["", "", "", "", "", "", "", "", "2734", "2930", "2930", "3344", "3344", "3344", "3788", "3788", "4260", "4260", "4508", "4762", "5024", "5293", "5570"],
  },
  {
    length: "16,00",
    values: ["", "", "", "", "", "", "", "", "2887", "3091", "3091", "3523", "3523", "3523", "3984", "3984", "4476", "4476", "4733", "4997", "5270", "5549", "5837"],
  },
  {
    length: "16,50",
    values: ["", "", "", "", "", "", "", "", "3045", "3258", "3258", "3706", "3706", "3706", "4186", "4186", "4697", "4697", "4964", "5239", "5521", "5812", "6110"],
  },
  {
    length: "17,00",
    values: ["", "", "", "", "", "", "", "", "3208", "3429", "3429", "3895", "3895", "3895", "4394", "4394", "4924", "4924", "5201", "5486", "5780", "6081", "6390"],
  },
  {
    length: "17,50",
    values: ["", "", "", "", "", "", "", "", "3376", "3606", "3606", "4090", "4090", "4090", "4607", "4607", "5157", "5157", "5445", "5740", "6044", "6356", "6677"],
  },
  {
    length: "18,00",
    values: ["", "", "", "", "", "", "", "", "3550", "3788", "3788", "4290", "4290", "4290", "4826", "4826", "5396", "5396", "5694", "6000", "6315", "6638", "6970"],
  },
  {
    length: "18,50",
    values: ["", "", "", "", "", "", "", "", "", "3976", "3976", "4496", "4496", "4496", "5052", "5052", "5642", "5642", "5950", "6267", "6593", "6927", "7270"],
  },
  {
    length: "19,00",
    values: ["", "", "", "", "", "", "", "", "", "4169", "4169", "4708", "4708", "4708", "5283", "5283", "5894", "5894", "6212", "6540", "6877", "7222", "7577"],
  },
  {
    length: "19,50",
    values: ["", "", "", "", "", "", "", "", "", "", "4368", "4926", "4926", "4926", "5521", "5521", "6152", "6152", "6481", "6820", "7168", "7525", "7891"],
  },
  {
    length: "20,00",
    values: ["", "", "", "", "", "", "", "", "", "", "4573", "5150", "5150", "5150", "5764", "5764", "6416", "6416", "6757", "7106", "7465", "7834", "8212"],
  },
  {
    length: "20,50",
    values: ["", "", "", "", "", "", "", "", "", "", "", "5380", "5380", "5380", "6014", "6014", "6688", "6688", "7039", "7400", "7770", "8150", "8540"],
  },
  {
    length: "21,00",
    values: ["", "", "", "", "", "", "", "", "", "", "", "5615", "5615", "5615", "6271", "6271", "6965", "6965", "7328", "7700", "8082", "8473", "8875"],
  },
  {
    length: "21,50",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "5858", "5858", "6534", "6534", "7250", "7250", "7623", "8007", "8400", "8804", "9218"],
  },
  {
    length: "22,00",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "6106", "6106", "6803", "6803", "7541", "7541", "7926", "8321", "8726", "9142", "9568"],
  },
  {
    length: "22,50",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "6361", "7079", "7079", "7839", "7839", "8235", "8642", "9059", "9487", "9925"],
  },
  {
    length: "23,00",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "6623", "7362", "7362", "8145", "8145", "8552", "8970", "9400", "9840", "10291"],
  },
  {
    length: "23,50",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "7652", "7652", "8457", "8457", "8876", "9306", "9748", "10200", "10663"],
  },
  {
    length: "24,00",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "7948", "7948", "8776", "8776", "9207", "9649", "10103", "10568", "11044"],
  },
  {
    length: "24,50",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "8252", "9103", "9103", "9546", "10000", "10466", "10943", "11432"],
  },
  {
    length: "25,00",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "8563", "9437", "9437", "9892", "10358", "10837", "11327", "11829"],
  },
  {
    length: "25,50",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "9779", "9779", "10245", "10724", "11215", "11718", "12233"],
  },
  {
    length: "26,00",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "10128", "10128", "10607", "11098", "11602", "12117", "12646"],
  },
  {
    length: "26,50",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "10484", "10976", "11480", "11996", "12525", "13066"],
  },
  {
    length: "27,00",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "10849", "11352", "11869", "12398", "12940", "13495"],
  },
  {
    length: "27,50",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "11737", "12267", "12809", "13364", "13932"],
  },
  {
    length: "28,00",
    values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "12130", "12672", "13228", "13796", "14378"],
  },
];

export const pretensadosNote =
  "Tabla tecnica actualizada con los valores corregidos de cargas limites, diametros y pesos por longitud.";

export const premoldeadosDescription =
  "Disenamos y fabricamos estructuras de hormigon pensadas para una instalacion eficiente y una durabilidad prolongada. Bases de AIB, bodegas de pozo y camaras de inspeccion, entre otros, conforman esta linea para obras criticas.";

export const premoldeadosTipicos: PremoldeadoTipico[] = [
  {
    title: "Cimalblock",
    image: "/catalogo-2025/premoldeados/cimalblock.png",
  },
  {
    title: "Cimalblock medio",
    image: "/catalogo-2025/premoldeados/cimalblock-medio.png",
  },
  {
    title: "Cimalblock diagonal",
    image: "/catalogo-2025/premoldeados/cimalblock-diagonal.png",
  },
  {
    title: "Cuerpo de anclaje 80",
    image: "/catalogo-2025/premoldeados/cuerpo-de-anclaje-80.png",
  },
  {
    title: "New Jersey",
    image: "/catalogo-2025/premoldeados/new-jersey.png",
  },
];

export const camarasTipicas: CamaraTipica[] = [
  {
    camara: "C1",
    aExterior: "0,75",
    bExterior: "0,75",
    cExterior: "0,75",
    aInterior: "0,60",
    bInterior: "0,60",
    espesor: "0,075",
    peso: "494,1 kg",
  },
  {
    camara: "C2",
    aExterior: "1,00",
    bExterior: "1,00",
    cExterior: "0,90",
    aInterior: "0,80",
    bInterior: "0,80",
    espesor: "0,10",
    peso: "931,2 kg",
  },
  {
    camara: "C3",
    aExterior: "1,30",
    bExterior: "1,30",
    cExterior: "1,15",
    aInterior: "1,00",
    bInterior: "1,00",
    espesor: "0,15",
    peso: "2264,4 kg",
  },
  {
    camara: "C4",
    aExterior: "1,50",
    bExterior: "1,50",
    cExterior: "1,35",
    aInterior: "1,20",
    bInterior: "1,20",
    espesor: "0,15",
    peso: "3142,8 kg",
  },
  {
    camara: "C5",
    aExterior: "1,80",
    bExterior: "1,80",
    cExterior: "1,65",
    aInterior: "1,50",
    bInterior: "1,50",
    espesor: "0,15",
    peso: "4730,4 kg",
  },
];
