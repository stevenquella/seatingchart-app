import { useState } from "react";
import Button from "../core/Button";
import InputText from "../core/InputText";

type ClassroomActionName = "grid" | "desks" | "none";

export default function Classroom() {
  const [rows, setRows] = useState<number>(1);
  const [columns, setColumns] = useState<number>(1);
  const [action, setAction] = useState<ClassroomActionName>("none");

  const styles = {
    display: "grid",
    "grid-template-rows": `repeat(${rows}, minmax(0, 1fr))`,
    "grid-template-columns": `repeat(${columns}, minmax(0, 1fr))`,
  };

  return (
    <div className="flex flex-col flex-nowrap gap-1 p-2">
      <div className="border-b border-slate-300">
        <div className="flex flex-row gap-1 pb-2">
          <Button text="Edit Grid" variant="secondary" onClick={() => setAction("grid")} />
          <Button text="Toggle Desks" variant="primary" onClick={() => setAction("desks")} />
        </div>

        <ClassroomAction value={action} action="grid" onDone={() => setAction("none")}>
          <h2>Edit Grid</h2>
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
        </ClassroomAction>

        <ClassroomAction value={action} action="desks" onDone={() => setAction("none")}>
          <h2>Edit Desks</h2>
          <p>Editing desks...</p>
        </ClassroomAction>
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

type ClassroomActionProps = {
  value: string;
  action: ClassroomActionName;
  children: React.ReactElement[];
  onDone: () => void;
};

function ClassroomAction(props: ClassroomActionProps) {
  return (
    <>
      {props.value === props.action ? (
        <div className="border border-slate-300 rounded my-1 px-2 py-1 flex flex-col gap-1">
          {props.children}
          <div className="flex flex-row pt-1">
            <Button text="Done" onClick={props.onDone} />
          </div>
        </div>
      ) : null}
    </>
  );
}
