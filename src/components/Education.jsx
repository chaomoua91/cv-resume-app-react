import { v4 as uuidv4 } from "uuid";
import FormField from "./FormField";

const Education = ({ cvData, setCvData }) => {
  const handleChange = (e, id) => {
    const updateEducation = cvData.newEducation.map((edu) =>
      edu.id === id ? { ...edu, [e.target.name]: e.target.value } : edu
    );
    setCvData({ ...cvData, newEducation: updateEducation });
  };

  const addEducation = () => {
    setCvData({
      ...cvData,
      newEducation: [
        ...cvData.newEducation,
        {
          id: uuidv4(),
          degree: "",
          institute: "",
          location: "",
          completed: "",
        },
      ],
    });
  };

  const deleteEducation = (id) => {
    const updateEdu = cvData.newEducation.filter((edu) => edu.id !== id);

    setCvData({ ...cvData, newEducation: updateEdu });
  };

  return (
    <div className="Education">
      <div className="profHeading">
        <h2>Education</h2>
      </div>

      {cvData.newEducation.map((edu) => (
        <form key={edu.id}>
          <FormField
            placeholder="Degree Obtained"
            type="text"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleChange(e, edu.id)}
          />

          <FormField
            placeholder="Institute Name"
            type="text"
            name="institute"
            value={edu.institute}
            onChange={(e) => handleChange(e, edu.id)}
          />

          <FormField
            placeholder="Location"
            type="text"
            name="location"
            value={edu.location}
            onChange={(e) => handleChange(e, edu.id)}
          />

          <FormField
            label="Completed Date"
            type="date"
            name="completed"
            value={edu.completed}
            onChange={(e) => handleChange(e, edu.id)}
          />

          <button type="button" onClick={() => deleteEducation(edu.id)}>
            Delete
          </button>
        </form>
      ))}

      <button type="button" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
};

export default Education;
