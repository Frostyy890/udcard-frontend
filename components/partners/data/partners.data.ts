import { StaticImageData } from "next/image";
import logo2 from "../../../public/assets/CuCucina_Logo_Full colour_PNG-01.png";
import logo3 from "../../../public/assets/image_2021-02-26_19-12-20.png";

interface PartnersData {
  categories: Category[];
  partners: Partner[];
  isCategoryEmpty: (categoryId: number, partners: Partner[]) => boolean;
  returnSortedPartners: (categoryId: number, partners: Partner[]) => Partner[];
}

interface Category {
  id: number;
  name: string;
  path?: string;
}

export interface Partner {
  id: number;
  img?: StaticImageData;
  name: string;
  description: string;
  discount: number;
  categoryId: number;
}

export const partnersData: PartnersData = {
  categories: [
    { id: 1, name: "Гостинницы", path: "hotels" },
    { id: 2, name: "Рестораны", path: "restaraunts" },
    { id: 3, name: "Общепит", path: "catering" },
    { id: 4, name: "Ритэйл", path: "retail" },
  ],
  partners: [
    {
      id: 1,
      name: "Azukar Moreno",
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 5,
      categoryId: 4,
    },
    {
      id: 2,
      name: "Azukar Moreno",
      img: logo2,
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 5,
      categoryId: 1,
    },
    {
      id: 3,
      img: logo3,
      name: "Hotel 2",
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 5,
      categoryId: 1,
    },
    {
      id: 4,
      name: "Hotel 3",
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 10,
      categoryId: 1,
    },
    {
      id: 5,
      name: "Restaraunt 1",
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 20,
      categoryId: 2,
    },
    {
      id: 6,
      name: "Restaraunt 2",
      description:
        "Предлагает свои услуги за выгодную цену и гарантирует качество",
      discount: 0,
      categoryId: 2,
    },
  ],
  isCategoryEmpty(categoryId, partners) {
    const partnerInCategory = partners.find(
      (partner) => partner.categoryId === categoryId
    );
    return partnerInCategory ? true : false;
  },
  returnSortedPartners(categoryId, partners) {
    const sortedPartners = partners.filter(
      (partner) => partner.categoryId === categoryId
    );
    return sortedPartners;
  },
};
