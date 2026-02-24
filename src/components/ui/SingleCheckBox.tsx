import { useSearchParams } from "react-router-dom";

function SingleCheckBox({ name, label }: { name: string; label: string }) {
  const [searchParams] = useSearchParams();

  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <input
        type="checkbox"
        className="peer hidden"
        name={name}
        value="1"
        defaultChecked={searchParams.get(name) === "1"}
      />
      <span
        className="w-5 h-5 flex items-center justify-center rounded-md border-2 border-primary
        peer-checked:bg-primary peer-checked:border-primary transition"
      ></span>
      <span className="text-sm text-foreground">{label}</span>
    </label>
  );
}

export default SingleCheckBox;
