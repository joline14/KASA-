
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/homePage";
import AproposKasa from "./pages/aPropos";
import ErreurPage from "./pages/ErreurPage";
import LocationPage from "./pages/locationPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter basename="">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/APropos" element={<AproposKasa />} />
          <Route path="/location/:id" element={<LocationPage />} />
          <Route path="*" element={<ErreurPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
