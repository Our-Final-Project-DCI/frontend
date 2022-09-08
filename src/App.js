import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./routes/upload-photo";
import Photo from "./routes/photos_id";
import Overview from "./routes/overview";
import Login from "./routes/login";
import Contact from "./routes/contact";
import Category from "./routes/category";
import Account from "./routes/account";
import About from "./routes/about";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload-photo" element={<Upload />} />
        <Route path="/photos/:id" element={<Photo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
