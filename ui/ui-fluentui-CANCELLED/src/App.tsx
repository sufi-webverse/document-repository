import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@fluentui/react-components";
import { FileListTable } from "./FileListTable";

function App() {
  return (
    <div className="App">
      <Button appearance="primary">Get started</Button>

      <div className="file-list__container">
        <FileListTable />
      </div>
    </div>
  );
}

export default App;
