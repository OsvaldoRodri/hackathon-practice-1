
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Donate from "./pages/donate";
import SaveDogs from "./pages/save_dogs";



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/save_dogs" element={<SaveDogs />} />

      </Routes>
      <Footer />
    </>
  );

};

export default App;