"use client";
import { useState } from "react";
import { FaFileCsv, FaFileExcel } from "react-icons/fa";
import toast from "react-hot-toast";

const DataImportPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

    const fileName = event.target.files[0].name;
    const fileType = fileName.split(".").pop().toUpperCase();
    setFileType(fileType);
  };

  const handleImport = () => {
    if (!selectedFile) {
      toast.error("Please select a file to import.");
      return;
    }

    toast.success(`Imported data successfully from ${fileType} file.`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Data Import
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Upload a CSV or Excel file to import data.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="flex flex-col items-center space-y-4">
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-white rounded-lg p-4 border border-gray-300 shadow-md hover:border-blue-500 hover:bg-blue-50 transition duration-300 ease-in-out"
            >
              {selectedFile ? (
                <span className="text-blue-500">{selectedFile.name}</span>
              ) : (
                <span>
                  <FaFileCsv className="inline-block text-4xl text-blue-500 mb-2" />
                  <span className="text-lg text-gray-600">Select File</span>
                </span>
              )}
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".csv,.xlsx"
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              onClick={handleImport}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Import Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataImportPage;
