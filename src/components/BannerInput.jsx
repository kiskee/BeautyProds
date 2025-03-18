import { useTranslation } from "react-i18next";

export default function BannerInput() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto px-4 py-6 sm:py-8 flex-grow">
        <section className="bg-gradient-to-r from-pink-400 to-pink-300 rounded-lg p-4 sm:p-6 md:p-8 text-center shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            {t("main.cta.title")}
          </h2>
          <p className="text-pink-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            {t("main.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("main.cta.placeholder")}
              className="px-3 sm:px-4 py-2 sm:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm text-sm sm:text-base w-full"
            />
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 shadow-md transition-all font-medium text-sm sm:text-base whitespace-nowrap">
              {t("main.cta.button")}
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
