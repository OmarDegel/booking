type TextProps = {
  label: string;
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (v: string) => void;
  type?: string;
  readOnly?: boolean;
  error?: string;
  placeholder?: string;
};

export default function Text({
  label,
  name,
  value,
  defaultValue,
  onChange,
  type,
  readOnly,
  error,
  placeholder,
}: TextProps) {
  const isControlled = onChange !== undefined;

  return (
    <div className="relative">
      <label htmlFor={name} className="block font-medium mb-1 text-sm">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type || "text"}
        {...(isControlled
          ? { value: value ?? "" }
          : { defaultValue: defaultValue ?? "" })}
        onChange={isControlled ? (e) => onChange(e.target.value) : undefined}
        readOnly={readOnly}
        placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
        className={`w-full h-11 px-3 border rounded-md text-sm transition ${error
          ? "border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"
          : readOnly
            ? "bg-gray-100 cursor-not-allowed border-gray-300"
            : "border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-400"
          }`}
      />
      {error && (
        <p className="text-red-500 text-xs mt-0.5 leading-tight">{error}</p>
      )}
    </div>
  );
}
