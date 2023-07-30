import { React, useState, useEffect } from "react";
import Section from "./components/Fashion.jsx";
import Electric from "./components/Electric.jsx";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Section />} />
          <Route path="/electric" element={<Electric />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
