import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import AllTask from "./components/AllTask";
import SpecificTask from "./components/SpecificTask";
import UpdateTask from "./components/UpdateTask";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/allTask" element={<AllTask />} />
        <Route path="task/:id" element={<SpecificTask />} />
        <Route path="task/update/:id" element={<UpdateTask />} />
      </Routes>
    </>
  );
}

export default App;
