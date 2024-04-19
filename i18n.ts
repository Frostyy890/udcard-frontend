import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ru"];
export const defaultLocale = "en";
export const localePrefix = "as-needed";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });

export default getRequestConfig(async ({ locale }) => {
  // const baseLocale = new Intl.Locale(locale).baseName;
  if (!locales.includes(locale)) notFound();
  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
