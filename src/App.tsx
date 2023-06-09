import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./features/home/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
