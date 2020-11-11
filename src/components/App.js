import React from "react";
import BranchOutDataset from "./BranchOutDataset";
import DataTable from "./DataTable";
import Header from "./Header";
import Navigation from "./Navigation";

class App extends React.Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Navigation />
        <DataTable />
        <BranchOutDataset />
      </div>
    );
  }
}

export default App;
