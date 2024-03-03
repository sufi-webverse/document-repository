import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AsyncProgressProvider from "./contexts/use-async-progress-context";
import { useEffect } from "react";
import winAuthService from "./services/winAuthService";

function App() {
  useEffect(() => {
    winAuthService.getUser()
      .then((resp) => console.log(resp))
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
