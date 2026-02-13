
function CheckBox({ records }: { records: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      {records.map((record) => (
        <label
          key={record}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <input type="checkbox" id={record} className="peer hidden" />
          <span
            className="w-5 h-5 flex items-center justify-center rounded-md border-2 border-primary
                    peer-checked:bg-primary peer-checked:border-primary transition"
          ></span>
          <span className="text-sm text-foreground">{record}</span>
        </label>
      ))}
    </div>
  );
}

export default CheckBox;
