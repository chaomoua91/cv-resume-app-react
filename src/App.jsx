import "./App.css";
import { useState } from "react";
import ShowCV from "./components/ShowCv";
import CvDetail from "./components/CvDetail";

function App() {
  const [cvData, setCvData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    summary: "",
    workExperience: [],
    newEducation: [],
    allSkills: [],
  });

  return (
    <>
      <section className="cvDetail">
        <CvDetail cvData={cvData} setCvData={setCvData} />
      </section>
      <section className="showCv">
        <ShowCv cvData={cvData} />
      </section>
    </>
  );
}

export default App;
