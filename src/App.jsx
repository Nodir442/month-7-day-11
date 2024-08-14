import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout";
import { Home } from "./pages/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {" "}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
