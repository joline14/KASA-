
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/homePage";
import AproposKasa from "./pages/aPropos";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter basename="">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/APropos" element={<AproposKasa />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
