import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <header className="bg-gradient-to-r from-pink-500 to-pink-400 shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-6xl sm:text-6xl font-bold text-white">
              {t("header.title")}
            </h1>

            <div className="flex items-center">
              {/* Selector de idioma */}
              <div className="mr-4 flex space-x-2">
                <button
                  onClick={() => changeLanguage("es")}
                  className={`px-2 py-1 rounded-md text-xs font-medium ${
                    i18n.language === "es"
                      ? "bg-white text-pink-500"
                      : "bg-pink-600 text-white"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-2 py-1 rounded-md text-xs font-medium ${
                    i18n.language === "en"
                      ? "bg-white text-pink-500"
                      : "bg-pink-600 text-white"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Botón hamburguesa para móvil */}
              <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Navegación para desktop */}
            <nav className="hidden md:flex gap-2 lg:gap-4 mt-3">
              <button className="px-3 py-1 lg:px-4 lg:py-2 bg-white text-pink-500 rounded-md hover:bg-pink-50 font-medium shadow-sm transition-all text-sm lg:text-base">
                {t("header.nav.home")}
              </button>
              <button className="px-3 py-1 lg:px-4 lg:py-2 bg-white text-pink-500 rounded-md hover:bg-pink-50 font-medium shadow-sm transition-all text-sm lg:text-base">
                {t("header.nav.services")}
              </button>
              <button className="px-3 py-1 lg:px-4 lg:py-2 bg-white text-pink-500 rounded-md hover:bg-pink-50 font-medium shadow-sm transition-all text-sm lg:text-base">
                {t("header.nav.products")}
              </button>
              <button className="px-3 py-1 lg:px-4 lg:py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 font-medium shadow-sm transition-all text-sm lg:text-base">
                {t("header.nav.contact")}
              </button>
            </nav>
          </div>
          {/* Menú móvil expandible */}
          {isMenuOpen && (
            <nav className="md:hidden mt-3 pb-3 flex flex-col gap-2">
              <button className="px-4 py-2 bg-white text-pink-500 rounded-md hover:bg-pink-50 font-medium shadow-sm transition-all w-full text-left">
                {t("header.nav.home")}
              </button>
              <button className="px-4 py-2 bg-white text-pink-500 rounded-md hover:bg-pink-50 font-medium shadow-sm transition-all w-full text-left">
                {t("header.nav.services")}
              </button>
              <button className="px-4 py-2 bg-white text-pink-500 rounded-md hover:bg-pink-50 font-medium shadow-sm transition-all w-full text-left">
                {t("header.nav.products")}
              </button>
              <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 font-medium shadow-sm transition-all w-full text-left">
                {t("header.nav.contact")}
              </button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
