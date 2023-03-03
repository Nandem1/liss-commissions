import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "navbarTitle": "Lissaru's Commissions",
      "navbarInicio": "Home",
      "navbarBanners": "Banners",
      "navbarAvatars": "Avatars",
      "navbarOverlays": "Overlays",
      "navbarContacto": "Contact",
      "aboutmeh1": "¡Hola! Bienvenidos a mi página de comisiones.",
    }
  },
  es: {
    translation: {
      "navbarTitle": "Lissaru's Commissions",
      "navbarInicio": "Inicio",
      "navbarBanners": "Banners",
      "navbarBeatmapBanner": "Beatmaps Banners",
      "navbarAvatars": "Avatars",
      "navbarOverlays": "Overlays",
      "navbarContacto": "Contacto",
      "aboutmeh1": "¡Hola! Bienvenidos a mi página de comisiones.",
      "aboutmeP": "Soy Lissaru, una humana jugadora de osu!, estudiante y streamer que vende banners, avatars y overlays para osu! y tus streams de Twitch. Aquí encontrarás trabajos previos que he hecho, junto a mi contacto si te interesa algo. (˵ •̀ ᴗ - ˵ ) ✧",
      "dineroValue": "Valor: ",
      "avatarBordes": "Bordes",
      "avatarTrabajos": "Trabajos",
      "avatarForma": "Forma"

    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
