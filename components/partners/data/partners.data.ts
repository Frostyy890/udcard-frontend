import { StaticImageData } from "next/image";

// HOTELS
import wyndhamLogo from "@/public/assets/logo_2/отель/123.jpg";
import lotteLogo from "@/public/assets/logo_2/отель/LotteHotels&ResortsLogo_Brown_RGB.jpg";
import ramadaLogo from "@/public/assets/logo_2/отель/1234.jpg";
import grandmirLogo from "@/public/assets/logo_2/отель/123456.jpg";
import intercontinentalLogo from "@/public/assets/logo_2/отель/12345.jpg";

// BARS
import cmiLogo from "@/public/assets/logo_2/бар/cmi.png";
import shishaLogo from "@/public/assets/IMG_3676.jpg";
import onemoreLogo from "@/public/assets/logo_2/бар/image_2024-04-22_22-10-35.png";
import scandalLogo from "@/public/assets/logo_2/бар/Скандалистъ_Ташкент_Лого_черный.png";
import bootlegerLogo from "@/public/assets/logo_2/бар/Bootleger_Logo.png";

//RESTARAUNTS
import tkxLogo from "@/public/assets/logo_2/ресторан/tkx.png";
import kissLogo from "@/public/assets/logo_2/ресторан/Logo_hd_RED.png";
import cucucinaLogo from "@/public/assets/CuCucina_Logo_Full.png";
import ronniLogo from "@/public/assets/logo_2/ресторан/image_2024-04-22_21-19-39.png";
import zeugmaLogo from "@/public/assets/logo_2/ресторан/ZG.png";
import velvetLogo from "@/public/assets/logo_2/ресторан/ЛОГО_VELVET_ЗОЛОТО_ТЕКСТУРА_НА_З.png";
import silkLogo from "@/public/assets/logo_2/ресторан/image_2024-04-22_17-59-30.png";
import theRoseLogo from "@/public/assets/logo_2/ресторан/The-Rose-logo.png";
import divanLogo from "@/public/assets/logo_2/ресторан/Divan_Logo.png";
import ronni2Logo from "@/public/assets/logo_2/ресторан/Ronni.png";

//RETAIL
import azukarLogo from "@/public/assets/logo_2/одежда/Azukar_moreno.jpg";
import chemodanLogo from "@/public/assets/logo_2/одежда/chemodan.png";
import fauusLogo from "@/public/assets/logo_2/одежда/Fauus.png";
import mursakLogo from "@/public/assets/logo_2/одежда/Mursak-1.png";
import shadiLogo from "@/public/assets/logo_2/одежда/image_2024-04-22_21-37-44.png";
import uyatLogo from "@/public/assets/logo_2/одежда/image_2024-04-22_17-54-32.png";
import adraschiLogo from "@/public/assets/logo_2/одежда/Adraschi.png";
import sevenSFiveLogo from "@/public/assets/logo_2/одежда/7`s.png";
// import retailLogo from "@/public/assets/IMG_4005.png";

interface Category {
  id: number;
  name: string;
  path?: string;
  img?: string | StaticImageData;
}

export interface Partner {
  id: number;
  img: StaticImageData;
  name: string;
  description: string;
  discount: number;
  discountMessage?: string;
  link?: string;
  categoryId: number;
  type: PartnerType;
}

export enum PartnerType {
  discount = "Партнеры со скидками",
  card = "Партнеры с нашими картами",
}

export interface PartnersData {
  categories: Category[];
  partners: Partner[];
  isCategoryEmpty: (categoryId: number, partners: Partner[]) => boolean;
  returnSortedPartners: (categoryId: number, partners: Partner[]) => Partner[];
}

export const partnersData: PartnersData = {
  categories: [
    {
      id: 1,
      name: "Гостинницы / Hotels",
      path: "hotels",
      img: "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg`",
    },
    {
      id: 2,
      name: "Рестораны / Restaraunts",
      path: "restaraunts",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/54/b2/bidri-ambience.jpg?w=1200&h=-1&s=1",
    },
    // { id: 3, name: "Общепит / Public Catering", path: "catering" },
    {
      id: 4,
      name: "Ритэйл / Retail",
      path: "retail",
      img: "https://thisisthegreat.com/cdn/shop/files/Desktop_Soho_2.jpg?v=1703102331&width=3840",
    },
    {
      id: 5,
      name: "Бары / Bars",
      path: "bars",
      img: "https://www.foodandwine.com/thmb/8rtGtUmtC0KiJCDxAUXP_cfwgM8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GTM-Best-US-Bars-Katana-Kitten-FT-BLOG0423-fa9f2ba9925c47abb4afb0abd25d915a.jpg",
    },
    {
      id: 6,
      name: "Цветы / Flowers",
      path: "flowers",
      img: "https://mspmag.com/downloads/61859/download/image002.jpg?cb=de465bc50a9e5635ec2a607d7d4f453c&w=1280",
    },
  ],
  partners: [
    // BARS
    {
      id: 1,
      name: "CMI",
      img: cmiLogo,
      description: "CMI, after party bar",
      discount: 10,
      categoryId: 5,
      link: "https://www.instagram.com/cmibar?igsh=MWhhcmYyMGF4ZmFrag==",
      type: PartnerType.discount,
    },
    {
      id: 2,
      name: "One More",
      img: onemoreLogo,
      description: "One More, Wonder bar",
      discount: 5,
      categoryId: 5,
      link: "https://www.instagram.com/bar.onemore?igsh=cmJ0dThmMmFkZXp1",
      type: PartnerType.discount,
    },
    {
      id: 3,
      name: "Shisha Bar",
      img: shishaLogo,
      description: "Shisha bar",
      discount: 20,
      categoryId: 5,
      link: "https://www.instagram.com/shisha.lounge_bar?igsh=enVweHZ6NGNla3h1",
      type: PartnerType.discount,
    },
    {
      id: 4,
      name: "Скандалистъ",
      img: scandalLogo,
      description: "Скандалистъ bar",
      discount: 10,
      categoryId: 5,
      link: "https://www.instagram.com/skandalist.tashkent?igsh=bjV3ZWl0Y2RnZ2s4",
      type: PartnerType.discount,
    },
    {
      id: 25,
      name: "Bootlegger",
      img: bootlegerLogo,
      description: "Дается резиденство по карте",
      discount: 0,
      discountMessage: "Residence",
      categoryId: 5,
      link: "https://www.instagram.com/bootleggerbar.uz?igsh=MXB2Y2s3cWp0NnFx",
      type: PartnerType.discount,
    },
    // RESTARAUNTS
    {
      id: 5,
      name: "Ткх",
      img: tkxLogo,
      description: "",
      discount: 5,
      categoryId: 2,
      link: "https://www.instagram.com/tkh.uz?igsh=Nm5qNXF5ZjI5Mm1w",
      type: PartnerType.discount,
    },
    {
      id: 6,
      name: "Кукучина",
      img: cucucinaLogo,
      description: "",
      discount: 5,
      categoryId: 2,
      link: "https://www.instagram.com/cucucina.tashkent?igsh=MXIxOTlvN3o4anUxYQ==",
      type: PartnerType.discount,
    },
    {
      id: 7,
      name: "Хорошая девочка",
      img: kissLogo,
      description: "",
      discount: 5,
      categoryId: 2,
      link: "https://www.instagram.com/xdevochka.uz?igsh=enVzbnAydGM1amZ0",
      type: PartnerType.discount,
    },
    {
      id: 8,
      name: "Velvet",
      img: velvetLogo,
      description: "",
      discount: 20,
      categoryId: 2,
      link: "https://www.instagram.com/velvet.restaurant?igsh=MXZ0NG9udjhyMHFjdQ==",
      type: PartnerType.discount,
    },
    {
      id: 9,
      name: "ZEUGMA KÜNEFE",
      img: zeugmaLogo,
      description: "",
      discount: 10,
      categoryId: 2,
      link: "https://www.instagram.com/zeugmakunefe.uz?igsh=MWJ6em5ybnJ1d2N0aQ==",
      type: PartnerType.discount,
    },
    // {
    //   id: 22,
    //   name: "Ronni pizza",
    //   img: ronniLogo,
    //   description: "",
    //   discount: 15,
    //   categoryId: 2,
    //   link: "https://www.instagram.com/ronipizzauz?igsh=MWQ1bXlmM3E3ZHBucg==",
    //   type: PartnerType.discount,
    // },
    {
      id: 27,
      name: "Ronni pizza",
      img: ronni2Logo,
      description: "",
      discount: 15,
      categoryId: 2,
      link: "https://www.instagram.com/ronipizzauz?igsh=MWQ1bXlmM3E3ZHBucg==",
      type: PartnerType.discount,
    },
    {
      id: 23,
      name: "SILK 96",
      img: silkLogo,
      description: "",
      discount: 10,
      categoryId: 2,
      link: "https://www.instagram.com/silk96wine?igsh=YzZ2NTE4MnUydjlv",
      type: PartnerType.discount,
    },
    {
      id: 26,
      name: "Divan",
      img: divanLogo,
      description: "",
      discount: 10,
      categoryId: 2,
      link: "https://www.instagram.com/divan.rest?igsh=MW56eXk3M3h1dDIyeQ==",
      type: PartnerType.discount,
    },

    // RETAIL
    {
      id: 10,
      name: "Мурсак бутик",
      img: mursakLogo,
      description: "",
      discount: 10,
      categoryId: 4,
      link: "https://www.instagram.com/mursak.boutique?igsh=eXQyZTRvancwd3Uw",
      type: PartnerType.discount,
    },

    {
      id: 11,
      name: "азукар морено",
      img: azukarLogo,
      description: "",
      discount: 5,
      categoryId: 4,
      link: "https://www.instagram.com/azukar_moreno_?igsh=dXQyMGJkZnhkM3E1",
      type: PartnerType.discount,
    },
    {
      id: 12,
      name: "Faus",
      img: fauusLogo,
      description: "",
      discount: 20,
      categoryId: 4,
      link: "https://www.instagram.com/fauus.uz?igsh=MWtndXJlZDBva3FheA==",
      type: PartnerType.discount,
    },
    {
      id: 13,
      name: "UYAT",
      img: uyatLogo,
      description: "",
      discount: 5,
      categoryId: 4,
      link: "https://www.instagram.com/uyat_wear?igsh=MWFzMjNndDd1dG4yaQ==",
      type: PartnerType.discount,
    },
    {
      id: 14,
      name: "Адрасчи Амаки",
      img: adraschiLogo,
      description: "",
      discount: 10,
      categoryId: 4,
      link: "https://www.instagram.com/adraschi_amaki?igsh=dWNpNHp2NHMxaTc4",
      type: PartnerType.discount,
    },
    {
      id: 15,
      name: "Chemodan Uz",
      img: chemodanLogo,
      description: "",
      discount: 10,
      categoryId: 4,
      link: "https://www.instagram.com/chemodan_uz?igsh=NjF1cXRzN3NuOGRy",
      type: PartnerType.discount,
    },
    {
      id: 16,
      name: "7`s 5",
      img: sevenSFiveLogo,
      description: "",
      discount: 10,
      categoryId: 4,
      link: "",
      type: PartnerType.discount,
    },
    {
      id: 24,
      name: "Shadi",
      img: shadiLogo,
      description: "",
      discount: 20,
      categoryId: 4,
      link: "https://www.instagram.com/shadi_uz_?igsh=b3M5Zzcxdnlrb3o4",
      type: PartnerType.discount,
    },
    //HOTELS
    {
      id: 17,
      name: "Wyndham",
      img: wyndhamLogo,
      description: "",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/wyndham_tashkent?igsh=MTFyaTBwMGdhNTFpaQ==",
      type: PartnerType.card,
    },

    {
      id: 18,
      name: "Intercontinental",
      img: intercontinentalLogo,
      description: "",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/intercontinental_tashkent?igsh=MXhheGM5ZTdocW5leQ==",
      type: PartnerType.card,
    },
    {
      id: 19,
      name: "Ramada Hotel",
      img: ramadaLogo,
      description: "",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/ramada.tashkent?igsh=ZHB4ZzJvZHY5czAy",
      type: PartnerType.card,
    },
    {
      id: 20,
      name: "Grand Mir Hotel",
      img: grandmirLogo,
      description: "",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/grandmirhotel?igsh=bTQ1eThnZ2hmeTB1",
      type: PartnerType.card,
    },
    {
      id: 21,
      name: "Lotte",
      img: lotteLogo,
      description: "",
      discount: 0,
      categoryId: 1,
      link: "https://www.instagram.com/lottecityhotel_tashkent?igsh=MTd3bjVwMG9pazR3cA==",
      type: PartnerType.card,
    },
    // FLOWERS
    {
      id: 27,
      name: "The Rose",
      img: theRoseLogo,
      description: "",
      discount: 20,
      categoryId: 6,
      link: "https://www.instagram.com/therose.tashkent?igsh=OTFjMHZ5aHJod2N2",
      type: PartnerType.discount,
    },
  ],
  isCategoryEmpty(categoryId: number, partners: Partner[]): boolean {
    return partners.some((partner) => partner.categoryId === categoryId);
  },
  returnSortedPartners(categoryId: number, partners: Partner[]) {
    const sortedPartners = partners.filter(
      (partner) => partner.categoryId === categoryId
    );
    return sortedPartners;
  },
};
