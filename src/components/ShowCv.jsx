const ShowCv = ({ cvData }) => {
  return (
    <>
      <nav>
        <h2 className="cvShowHead">Name</h2>

        <h2 className="cvShowHead">
          {cvData.firstName} {cvData.lastName}
        </h2>

        <div className="contactTextHead">
          <p>PhoneNum: {cvData.phoneNumber}</p>
          <p>Email: {cvData.email}</p>
        </div>
      </nav>

      <section className="maincontainer">
        <div className="perDesText">
          <h2>Personal Description:</h2>

          <div>
            <p>Date Of Birth: {cvData.dateOfBirth}</p>
            <p>Summary: {cvData.summary} </p>
          </div>
        </div>

        <div className="EducationText">
          <h2>Education:</h2>

          <div className="EduTextDetail">
            {cvData.newEducation.map((edu) => (
              <div key={edu.id}>
                <p>Degree: {edu.degree}</p>
                <p>Institute: {edu.institute}</p>
                <p>Location: {edu.location}</p>
                <p>Completed: {edu.completed}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="workExpText">
          <h2>Work Experience:</h2>

          <div className="workTextDetail">
            {cvData.workExperience.map((work) => (
              <div key={work.id}>
                <p>Title: {work.title}</p>
                <p>Name: {work.name}</p>
                <p>Location: {work.location}</p>
                <p>Date: {work.date}</p>
                <p>Description: {work.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skillsText">
          <h2>Skills:</h2>
          <div className="skillsTextDetail">
            {cvData.allSkills.map((skill) => (
              <div key={skill.id}>
                <p>Title: {skill.title}</p>
                <p>Description: {skill.description}</p>
                <p>Start Date: {skill.startDate}</p>
                <p>End Date: {skill.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCv;
