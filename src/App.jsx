import React from "react"
import Header from "./components/Header"
import Aboutme from "./components/Aboutme";
import Banners from "./components/Banners";
import Avatars from "./components/Avatars";
import Overlays from "./components/Overlays";
import BeatmapBanners from "./components/BeatmapBanners";
import { I18nextProvider } from 'react-i18next';
import i18n from './components/i18n';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Header />
        <Aboutme />
        <Banners />
        <BeatmapBanners />
        <Avatars />
        <Overlays />
      </div>
    </I18nextProvider>
  )
}

export default App
