import "./App.css";
import Counter from "./counter/Counter";

function App() {
  

  return (
   <>
    <div className="container mx-auto flex justify-center flex-col md:flex-row md:justify-between space-x-2">
          <div className="w-full">
            <Counter/>
          </div>
          <div className="w-full">
            <Counter/>
          </div>
          <div className="w-full">
            <Counter/>
          </div>
          <div className="w-full">
            <Counter/>
          </div>
    </div>
   </>
  );
}

export default App;
