import "./App.css";
import DocumentOutline, { DocumentType } from "./components/DocumentOutline/DocumentOutline";

function App() {

  return (
    <main className="bg-gray-700 w-[100%] h-full pl-4" >
      <div id="title" className="pt-6">
        <h1 className="text-white font-bold text-center text-2xl">Connecting Words</h1>
      </div>
      <div id="create-docs" className="mt-8 flex flex-nowrap gap-12">
        <div><DocumentOutline type={DocumentType.DEFAULT} /></div>
        <div><DocumentOutline type={DocumentType.BOOK} /></div>
      </div>
      <div id="recent-docs" className="mt-16">
          <p className="text-white font-semibold">Recent documents</p>
      </div>
    </main>
  );
}

export default App;
