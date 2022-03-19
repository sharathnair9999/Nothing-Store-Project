import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
     <Routes>
       <Route path="/mockapi" element={<MockmanEs/>}  />
     </Routes>
    </div>
  );
}

export default App;
