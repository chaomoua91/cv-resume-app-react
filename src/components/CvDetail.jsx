import ContactInfo from "./ContactInfo";
import WorkExp from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

const CvDetail = (cvData, setCvData) => {
  return (
    <>
      <ContactInfo cvData={cvData} setCvData={setCvData} />
      <WorkExp cvData={cvData} setCvData={setCvData} />
      <Education cvData={cvData} setCvData={setCvData} />
      <Skills cvData={cvData} setCvData={setCvData} />
    </>
  );
};

export default CvDetail;
