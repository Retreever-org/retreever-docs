import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DocPage from "./pages/Dashboard";

export default function App() {
  return (
      <div className="flex flex-col h-screen bg-(--dark-1) text-(--text-light)">
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/docs/:slug*" element={<DocPage />} />
            </Routes>
          </main>
        </div>
      </div>
  );
}
