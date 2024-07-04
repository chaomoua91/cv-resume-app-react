const FormField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <label>
      {label}
      {""}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default FormField;
