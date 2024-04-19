import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales, localePrefix } from "./i18n";
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

export const config = {
  matcher: ["/", "/(ru|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
