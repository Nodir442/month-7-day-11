import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout";
// import { Home } from "./pages/home";
// import { SingleProduct } from "./pages/singleProduct";
// import SingleCategory from "./pages/singleCategory";

const HomePage = lazy(() => import("./pages/home"));
const SingleProduct = lazy(() => import("./pages/singleProduct"));
const SingleCategory = lazy(() => import("./pages/singleCategory"));
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {" "}
          <Route
            index
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/single-product/:id"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <SingleProduct />
              </Suspense>
            }
          />
          <Route
            path="/single-category/:id"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <SingleCategory />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
