import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AsyncProgressProvider from "./contexts/use-async-progress-context";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // AuthenticationService.getUser()
    //   .then((resp) => console.log(resp))
    //   .catch((err) => {
    //     console.error(err);
    //   });

    async function getData() {
      fetch("https://localhost:44387/authentication", {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ name: "Alice", age: 25 }),
      })
        .then((response) => response.json()) // Parse the response as JSON
        .then((data) => console.log(data)) // Do something with the data
        .catch((error) => console.error(error)); // Handle errors
    }
    getData();
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
