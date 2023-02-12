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

      <div className="max-md:hidden h-full">
        <div className="p-2 border border-slate-300 h-[48px]">
          <h1>Seating Chart, main toolbar</h1>
        </div>
        <div className="flex flex-row flex-nowrap h-[calc(100%-48px)]">
          <div className="w-1/4 border-r border-slate-300 h-full overflow-scroll">build the classroom</div>
          <div className="flex-grow h-full overflow-scroll">
            <Classroom />
          </div>
        </div>
      </div>
    </>
  );
}
