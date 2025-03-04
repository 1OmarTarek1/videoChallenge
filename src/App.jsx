import { Routes, Route } from "react-router-dom";
import { CourseDetailPage } from './Pages'
import './App.css'
import NavbarSec from "./Sections/NavbarSec/NavbarSec";


function App() {
  return (
    <>
      <NavbarSec />
      <Routes>
        <Route path="/" element={<CourseDetailPage />} />
      </Routes>
    </>
  );
}

export default App;

