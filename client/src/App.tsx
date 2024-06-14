import { Global } from "@emotion/react";
import { FC } from "react";
import Cars from "./pages/Cars/Cars";
import Favorites from "./pages/Favorites/Favorites";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GLOBAL_STYLES } from "./styles/global.styles";

const App: FC = () => {
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route  path="/" element={<Cars />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Global styles={GLOBAL_STYLES} />
    </div>
  </BrowserRouter>
  );
};

export default App;
