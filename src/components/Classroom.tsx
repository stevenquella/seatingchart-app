import { useState } from "react";
import InputText from "../core/InputText";

export default function Classroom() {
  const [rows, setRows] = useState<number>(1);
  const [columns, setColumns] = useState<number>(1);

  const styles = {
    display: "grid",
    "grid-template-rows": `repeat(${rows}, minmax(0, 1fr))`,
    "grid-template-columns": `repeat(${columns}, minmax(0, 1fr))`,
  };

  return (
    <div className="flex flex-col flex-nowrap gap-1">
      <div className="border-b border-slate-300 p-1">
        <h2>Classroom Edit</h2>
        <InputText
          name="rows"
          label="Rows"
          type="number"
          min={1}
          max={10}
          value={rows}
          onChange={(e) => setRows(Number.parseInt(e.target.value))}
        />
        <InputText
          name="columns"
          label="Columns"
          type="number"
          min={1}
          max={10}
          value={columns}
          onChange={(e) => setColumns(Number.parseInt(e.target.value))}
        />
      </div>
      <div style={styles} className="gap-1">
        {Array.from({ length: rows * columns }, (_x, i) => (
          <div key={i} className="bg-slate-300 rounded p-4 text-center cursor-pointer hover:bg-slate-400">
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
