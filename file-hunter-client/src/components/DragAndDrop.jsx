import React, { useState } from "react";
import "./DragAndDrop.css"



const DragAndDrop = () => {

  const [files, setFiles] = useState([])
  const [dragging, setDragging] = useState(false)

  const handleDragEnter = e =>{
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  }
  const handleDragLeave = e =>{
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  }
  const handleDragOver = e =>{
    e.preventDefault();
    e.stopPropagation();
  }
  const handleDrop = e =>{
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const files = e.dataTransfer.files;
    console.log(files)
  }
  
  return (
    <div className={`font-sans text-gray-900 border-box drag-drop-container  ${dragging ? 'dragging' : ''}`} onDragOver={handleDragOver} onDrop={handleDrop} onDragEnter={handleDragEnter}  onDragLeave={handleDragLeave}>
      <div className="flex justify-center w-full mx-auto ">
        <div className="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
          <div className="mt-10 mb-10 text-center">
            <h2 className="text-2xl font-semibold mb-2">Upload your files</h2>
            <p className="text-xs text-gray-500">
              File should be of format .mp4, .avi, .mov or .mkv
            </p>
          </div>
          <form
            action="#"
            className="relative w-4/5 h-32  mb-10 bg-white bg-gray-100 rounded-lg shadow-inner"
          >
            <input type="file" id="file-upload" className="hidden" multiple onChange={(e)=>setFiles(e.target.files)}/>
            <label
              htmlFor="file-upload"
              className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
            >
              <p className="z-10 text-xs font-light text-center text-gray-500">
                Drag & Drop your files here
              </p>
              <svg
                className="z-10  h-8 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
              </svg>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
