import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../containers/home";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};