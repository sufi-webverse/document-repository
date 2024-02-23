import { Suspense, useEffect, useState } from "react";
import "./App.css";
import LoadingBar from "./components/LoadingBar";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AsyncProgressProvider from "./contexts/use-async-progress-context";

function App() {
  return (
    <>
      <div className=" bg-gray-50 h-[100vh] " id="div_main">
        <AsyncProgressProvider>
          <RouterProvider router={router} />
        </AsyncProgressProvider>
      </div>
    </>
  );
}

export default App;
