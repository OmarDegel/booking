import Select from "react-select";

export default function Select2({
  label,
  options,
  placeholder = "Select...",
  value,
  onChange,
  isMulti = false,
}: any) {
  return (
    <>
      {label && <label className="block mb-1">{label}</label>}

      <Select
        options={options}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isMulti={isMulti}
        classNamePrefix="react-select"
        styles={{
          control: (base, state) => ({
            ...base,
            minHeight: "52px",
            borderRadius: "0.75rem",
            borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
            boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none",
            "&:hover": {
              borderColor: "#3b82f6",
            },
          }),
          placeholder: (base) => ({
            ...base,
            color: "#9ca3af",
          }),
        }}
      />
    </>
  );
}
