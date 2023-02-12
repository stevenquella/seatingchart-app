import Classroom from "./components/Classroom";

export default function App() {
  return (
    <>
      <div className="max-md:block hidden p-4">
        <h1>Seating Chart</h1>
        <p>
          This app is only functional on larger screen sizes. Please make screen width larger or use on desktop device.
        </p>
      </div>

      <div className="max-md:hidden flex flex-col h-full">
        <div className="p-2 border border-slate-300">
          <h1>Seating Chart, main toolbar</h1>
        </div>
        <div className="flex-grow flex flex-row flex-nowrap">
          <div className="w-1/5 p-2 border-r border-slate-300">build the classroom</div>
          <div className="flex-grow p-2">
            <Classroom />
          </div>
          <div className="w-1/5 p-2 border-l border-slate-300">set the rules</div>
        </div>
      </div>
    </>
  );
}
