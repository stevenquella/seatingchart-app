import { useState } from "react";
import Button from "../core/Button";
import InputText from "../core/InputText";
import { Seat, useStore } from "../store";

type ClassroomActionName = "grid" | "desks" | "none";

export default function Classroom() {
  const [rows, setRows] = useState<number>(1);
  const [columns, setColumns] = useState<number>(1);
  const [action, setAction] = useState<ClassroomActionName>("none");
  const [seats, resetAll] = useStore((state) => [state.seats, state.resetAll]);

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
          <Button text="Reset All" variant="danger" onClick={() => resetAll()} />
        </div>

        {action === "grid" ? (
          <div className="border border-slate-300 rounded my-1 px-2 py-1 flex flex-col gap-1">
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
            <div className="flex flex-row pt-1">
              <Button text="Done" onClick={() => setAction("none")} />
            </div>
          </div>
        ) : null}

        {action === "desks" ? (
          <div className="border border-slate-300 rounded my-1 px-2 py-1 flex flex-col gap-1">
            <h2>Edit Desks</h2>
            <p>Editing desks...</p>
            <div className="flex flex-row pt-1">
              <Button text="Done" onClick={() => setAction("none")} />
            </div>
          </div>
        ) : null}
      </div>
      <div style={styles} className="gap-1">
        {Array.from({ length: rows * columns }, (_x, i) => (
          <ClassroomSeat key={i} seat={seats[i]} action={action} />
        ))}
      </div>
    </div>
  );
}

type ClassroomSeatProps = {
  seat: Seat;
  action: ClassroomActionName;
};

function ClassroomSeat(props: ClassroomSeatProps) {
  const [toggleSeat] = useStore((x) => [x.toggleSeat]);

  const handleClick = () => {
    if (props.action === "desks") {
      toggleSeat(props.seat.index);
    }
  };

  let className = "bg-slate-100 hover:bg-slate-200";
  if (props.seat.enabled) {
    className = "bg-green-300 hover:bg-green-400";
  }

  return (
    <div className={`rounded p-4 text-center cursor-pointer ${className}`} onClick={handleClick}>
      {props.seat.index}
    </div>
  );
}
