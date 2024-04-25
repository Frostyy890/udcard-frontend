import { Partner } from "../data/partners.data";

export const isCategoryEmpty = (
  categoryId: number,
  partners: Partner[]
): boolean => {
  return partners.some((partner) => partner.categoryId === categoryId);
};

export const returnSortedPartners = (
  categoryId: number,
  partners: Partner[]
): Partner[] => {
  const sortedPartners = partners.filter(
    (partner) => partner.categoryId === categoryId
  );
  return sortedPartners;
};
