import BarChartComponent from "@/app/components/BarChart";
import React from "react";

function examples() {
  return (
    <div className="mb-12">
      <div className="h-[35em] w-[60vw] m-auto my-12">
        <h1 className="text-5xl text-center mb-8">Artikler udgivet i dag</h1>
        <BarChartComponent />
  
      </div>
      <div>examples</div>
    </div>
  );
}

export default examples;
