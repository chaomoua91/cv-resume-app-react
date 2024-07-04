import FormField from "/.FromField";

const ContactInfo = ({ cvData, setCvData }) => {
  const handleChange = (e) => {
    setCvData({ ...cvData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contactInfo">
      <div className="contactHeading">
        <h2>Contact Information</h2>
      </div>
      <form>
        <div className="nameIfoInputs">
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
      <div className="profSummery">
        <div className="profHeading">
          <h2>Professional Summary</h2>
        </div>
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
    </div>
  );
};

export default ContactInfo;
