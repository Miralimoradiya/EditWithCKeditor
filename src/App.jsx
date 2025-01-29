import React from "react";
import ImageUpload from "./Components/ImageUpload";
import MyEditor from "./Components/MyEditor";
import "./App.css";

export default function App() {
  return (
    <div className="p-4">
      <p className="pl-10 py-1.5 text-lg font-semibold">
        TYPE ANYTHING AND SELECT IT AND APPLY STYLING TO YOUR TEXT.
      </p>
      <div className="flex flex-col lg:flex-row gap-10 w-full h-full">
        <div className="w-full lg:w-1/2">
          <ImageUpload />
        </div>
        <div className="w-full lg:w-1/2">
          <MyEditor />
        </div>
      </div>
    </div>
  );
}
