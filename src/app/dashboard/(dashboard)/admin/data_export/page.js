"use client";
import { useState } from "react";
import { FaFileCsv, FaFileExcel, FaFilePdf } from "react-icons/fa";
import toast from "react-hot-toast";

const DataExportPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState("");
  const [endDate, setEndDate] = useState(null);

  const handleExport = (format, startDate, endDate) => {
    if (!startDate || !endDate) {
      toast.error("Please select both start and end dates.");
      return;
    }

    toast.success(
      `Exported data successfully in ${format} format for date range: ${startDate} - ${endDate}`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Data Export
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Select a date range and export data to CSV, Excel, or PDF format.
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-4 md:space-y-0">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date:
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 block w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Date:
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 block w-full"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleExport("CSV", startDate, endDate)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaFileCsv className="mr-2" />
              Export to CSV
            </button>
            <button
              onClick={() => handleExport("Excel", startDate, endDate)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <FaFileExcel className="mr-2" />
              Export to Excel
            </button>
            <button
              onClick={() => handleExport("PDF", startDate, endDate)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <FaFilePdf className="mr-2" />
              Export to PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataExportPage;
