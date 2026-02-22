import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

function CheckBox({ records, name }: any) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === "ar" ? "ar" : "en";
  const [searchParams] = useSearchParams();
  const selectedValues = searchParams.getAll(name);

  return (
    <div className="flex flex-col gap-2">
      {records.map((record: any) => (
        <label
          key={record.id}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <input
            type="checkbox"
            id={record.id}
            className="peer hidden"
            name={name}
            value={record.id}
            defaultChecked={selectedValues.includes(String(record.id))}
          />
          <span
            className="w-5 h-5 flex items-center justify-center rounded-md border-2 border-primary
                    peer-checked:bg-primary peer-checked:border-primary transition"
          ></span>
          <span className="text-sm text-foreground">
            {record.name[currentLang]}
          </span>
        </label>
      ))}
    </div>
  );
}

export default CheckBox;
