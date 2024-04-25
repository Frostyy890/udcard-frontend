interface Section {
  name: string;
  path: string;
}

export const translateSectionsToRu = function (locale: string): Section[] {
  if (locale === "ru") {
    return sectionsRU;
  }
  return sections;
};

export const sectionsRU: Section[] = [
  { name: "О компании", path: "/#about" },
  { name: "Почему мы", path: "/#whyus" },
  { name: "Наши сервисы", path: "/#services" },
  { name: "Наши партнеры", path: "/#partners" },
  { name: "Контакты", path: "/#contacts" },
];
export const sections: Section[] = [
  { name: "About us", path: "/#about" },
  { name: "Why us", path: "/#whyus" },
  { name: "Our services", path: "/#services" },
  { name: "Our partners", path: "/#partners" },
  { name: "Contacts", path: "/#contacts" },
];
