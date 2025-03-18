import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="bg-pink-900 text-pink-100 py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">{t("header.title")}</h3>
              <p className="text-pink-200">{t("footer.tagline")}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-white">
                  {t("footer.links")}
                </h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {t("header.nav.home")}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {t("header.nav.services")}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      {t("header.nav.products")}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-white">
                  {t("footer.contact")}
                </h4>
                <ul className="space-y-1">
                  <li className="hover:text-white transition-colors">
                    {t("footer.contactItems.email")}
                  </li>
                  <li className="hover:text-white transition-colors">
                    {t("footer.contactItems.phone")}
                  </li>
                  <li className="hover:text-white transition-colors">
                    {t("footer.contactItems.location")}
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-white">
                  {t("footer.followUs")}
                </h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-pink-800 mt-6 pt-4 text-center text-pink-300">
            <p className="text-sm sm:text-base">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
