import FormField from "./FormField";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function Skills({ cvData, setCvData }) {
  const [skill, setSkill] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSkill({ ...skill, [name]: value });
  };

  const addSkill = (e) => {
    e.preventDefault();
    setCvData({
      ...cvData,
      allSkills: [
        ...cvData.allSkills,
        {
          id: uuidv4(),
          ...skill,
        },
      ],
    });

    setSkill({ title: "", description: "", startDate: "", endDate: "" });
  };

  const deleteSkill = (id) => {
    const updatedSkills = cvData.allSkills.filter((skill) => skill.id !== id);

    setCvData({ ...cvData, allSkills: updatedSkills });
  };

  return (
    <>
      <div className="skills">
        <h2>Skills</h2>
      </div>

      <form onSubmit={addSkill}>
        <FormField
          placeholder="Skill Title"
          type="text"
          name="title"
          value={skill.title}
          onChange={handleChange}
        />

        <FormField
          placeholder="Skill Description"
          type="text"
          name="description"
          value={skill.description}
          onChange={handleChange}
        />

        <FormField
          label="Start Date"
          type="date"
          name="startDate"
          value={skill.startDate}
          onChange={handleChange}
        />

        <FormField
          label="End Date"
          type="date"
          name="endDate"
          value={skill.endDate}
          onChange={handleChange}
        />

        <button type="submit">Add Skill</button>
      </form>

      {cvData.allSkills.map((skill) => (
        <div key={skill.id} className="eachSkill">
          <p>{skill.title}</p>

          <button onClick={() => deleteSkill(skill.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default Skills;
