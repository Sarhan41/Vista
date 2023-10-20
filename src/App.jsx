import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FindDesigner, Footer, Header, Home, Work } from "./sections";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Home />} />
        <Route path="/categories/:path" element={<Home />} />
        <Route path="/how-it-works" element={<Work />} />
        <Route path="/find-a-designer" element={<FindDesigner />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
