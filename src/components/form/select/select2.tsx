import Select from "react-select";

type Option = {
  label: string;
  value: string;
};

type Select2Props = {
  label?: string;
  name?: string;
  options: Option[];
  placeholder?: string;
  value?: Option | Option[] | null;
  onChange?: (v: any) => void;
  isMulti?: boolean;
  error?: string;
};

export default function Select2({
  label,
  name,
  options,
  placeholder = "Select...",
  value,
  onChange,
  isMulti = false,
  error,
}: Select2Props) {
  return (
    <div className="relative">
      {label && (
        <label htmlFor={name} className="block font-medium mb-1 text-sm">
          {label}
        </label>
      )}

      <Select
        inputId={name}
        options={options}
        placeholder={placeholder}
        value={value}
        onChange={(selectedOption) => {
          if (!onChange) return;
          onChange(isMulti ? selectedOption : selectedOption?.value);
        }}
        isMulti={isMulti}
        classNamePrefix="react-select"
        styles={{
          control: (base, state) => ({
            ...base,
            minHeight: "44px",
            borderRadius: "0.375rem",
            fontSize: "0.875rem",
            borderColor: error
              ? "#f87171"
              : state.isFocused
              ? "#6366f1"
              : "#d1d5db",
            boxShadow: state.isFocused
              ? error
                ? "0 0 0 1px #f87171"
                : "0 0 0 1px #6366f1"
              : "none",
            "&:hover": {
              borderColor: error ? "#f87171" : "#6366f1",
            },
          }),
          valueContainer: (base) => ({
            ...base,
            padding: "0 0.75rem",
          }),
          placeholder: (base) => ({
            ...base,
            color: "#9ca3af",
          }),
          singleValue: (base) => ({
            ...base,
            color: "#111827",
          }),
          multiValue: (base) => ({
            ...base,
            borderRadius: "0.375rem",
            backgroundColor: "#e5e7eb",
          }),
          multiValueLabel: (base) => ({
            ...base,
            fontSize: "0.75rem",
            color: "#111827",
          }),
          multiValueRemove: (base) => ({
            ...base,
            ":hover": {
              backgroundColor: "#ef4444",
              color: "white",
            },
          }),
        }}
      />

      {error && (
        <p className="text-red-500 text-xs mt-0.5 leading-tight">{error}</p>
      )}
    </div>
  );
}