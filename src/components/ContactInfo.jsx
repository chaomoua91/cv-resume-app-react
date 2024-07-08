import FormField from "./FormField";

const ContactInfo = ({ cvData, setCvData }) => {
  const handleChange = (e) => {
    setCvData({ ...cvData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contactInfo">
      <SectionHeading title="Contact Information" />
      <form>
        <div className="nameInfoInputs">
          <FormField
            placeholder="First Name"
            type="text"
            name="firstName"
            value={cvData.firstName}
            onChange={handleChange}
          />
          <FormField
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={cvData.lastName}
            onChange={handleChange}
          />
          <FormField
            placeholder="Phone Number"
            type="number"
            name="phoneNumber"
            value={cvData.phoneNumber}
            onChange={handleChange}
          />
          <FormField
            placeholder="Email"
            type="email"
            name="email"
            value={cvData.email}
            onChange={handleChange}
          />
        </div>
        <div className="contDateInput">
          <FormField
            type="date"
            name="dateOfBirth"
            value={cvData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
      </form>
      <SectionHeading title="Professional Summary" />
      <form>
        <FormField
          placeholder="Summary"
          type="text"
          name="summary"
          value={cvData.summary}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

const SectionHeading = ({ title }) => (
  <div className="sectionHeading">
    <h2>{title}</h2>
  </div>
);

export default ContactInfo;
