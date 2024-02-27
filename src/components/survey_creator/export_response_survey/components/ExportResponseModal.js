import { saveAs } from "file-saver"; // Importing the saveAs function from the file-saver library for saving files locally.
import Papa from "papaparse"; // Importing PapaParse library for parsing CSV data.
import { BiSolidFileHtml, BiSolidFileJson } from "react-icons/bi"; // Importing icons for HTML and JSON file types.
import { FaFileCsv, FaFilePdf } from "react-icons/fa"; // Importing icons for CSV and PDF file types.
import { IoClose } from "react-icons/io5"; // Importing the close icon from React Icons.
import { SiMicrosoftexcel } from "react-icons/si"; // Importing icon for Excel file type.
import * as XLSX from "xlsx"; // Importing XLSX library for Excel file handling.
import ExportDataToPDF from "./ExportDataToPDF"; // Importing component for exporting data to PDF format.
import { useEffect, useState } from "react"; // Importing React hooks for managing component state and side effects.
import axios from "axios"; // Importing Axios for making HTTP requests.
import useAxiosPublic from "@/Hook/useAxiosPublic"; // Custom hook for Axios instance configuration.

// Function component for exporting survey response data.
function ExportResponseModal({ setOpenModal, currentSurveyData }) {
  // Sample response data for demonstration purposes.
  const data = [
    {
      id: 1,
      name: "John Doe",
      date: "2023-12-31",
      email: "johndoe@yahoo.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "2023-12-31",
      email: "johesmith@yahoo.com",
    },
    {
      id: 3,
      name: "Sam Wilson",
      date: "2023-12-31",
      email: "samwilson@yahoo.com",
    },
    {
      id: 4,
      name: "Sara Jones",
      date: "2023-12-31",
      email: "sarajones@yahoo.com",
    },
    {
      id: 5,
      name: "Alex Rodriguez",
      date: "2023-12-31",
      email: "alexroot@yahoo.com",
    },
    {
      id: 6,
      name: "Emily White",
      date: "2023-12-31",
      email: "emilywhtie@yahoo.com",
    },
  ];
  const [responseData, setResponseData] = useState([]); // State variable to store transformed response data.

  const axiosPublic = useAxiosPublic(); // Custom Axios instance configured using a custom hook.

  // Fetching participant data for the current survey from the server.
  useEffect(() => {
    const participantIds = currentSurveyData?.participantIds;
    if (participantIds) {
      axiosPublic.post("/get_participant", { participantIds }).then((res) => {
        // Transforming the raw response data received from the server.
        const transformArray = res?.data?.flatMap((item) => {
          // Transformation logic...
          const answersArray = item?.answers.map((answer) => {
            if (typeof answer.answer === "object") {
              const { answers, ...rest } = item;
              const { options, answer: qnAnswer, ...restOptions } = answer;
              let transformType = Object.entries(qnAnswer)
                .flatMap((item, index) => {
                  const valueIndex = Object.values(item[1]).findIndex(
                    (value) => value === true
                  );
                  const answerValue =
                    valueIndex > 0 && options.rowLabels[valueIndex];
                  // console.log("answerValue", answerValue);
                  // console.log("question option", options.columnLabels[index]);
                  if (answerValue) {
                    // console.log(
                    //   [options.columnLabels[index], answerValue].join(": ")
                    // );
                    return [options.columnLabels[index], answerValue].join(
                      ": "
                    );
                  } else {
                    return false;
                  }
                })
                .filter((item) => item !== false)
                .join("; ");

              return { ...restOptions, ...rest, answer: transformType };
            } else if (Array.isArray(answer.answer)) {
              const { answers, ...rest } = item;
              const { options, answer: qnAnswer, ...restOptions } = answer;
              const transformType = qnAnswer
                .flatMap((item) => Object.values(item).join(". "))
                .join("; ");
              return { ...restOptions, ...rest, answer: transformType };
            } else {
              const { answers, ...rest } = item;
              const { options, ...restOptions } = answer;
              return { ...restOptions, ...rest };
            }
          });
          return answersArray.filter((item) => typeof item !== "undefined");
        });

        console.log(transformArray);
        setResponseData(transformArray);
      });
    }
  }, [currentSurveyData]);

  // Function to export response data to Excel format.

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(responseData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Buffer to store the generated Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(blob, `${currentSurveyData?.title}.xlsx`);
  };

  const exportToCSV = () => {
    const stringData = JSON.stringify(responseData);
    const csvBlob = new Blob([Papa.unparse(responseData)], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(csvBlob, "Customer-Satisfaction-Survey.csv");
  };

  const exportToJson = () => {
    const stringData = JSON.stringify(responseData);
    const jsonBlob = new Blob([stringData], { type: "application/json" });

    saveAs(jsonBlob, "Customer-Satisfaction-Survey.json");
  };

  function exportJSONtoHTML() {
    // Convert JSON data to HTML string (customize this based on your data structure)

    // crate table header
    const tableHead = `<thead>
        <tr>
            <th style="border: 1px solid #000; padding: 8px; textAlign: left" >id</th>
            <th style="border: 1px solid #000; padding: 8px; textAlign: left" >First Name</th>
            <th style="border: 1px solid #000; padding: 8px; textAlign: left" >List Name</th>
            <th style="border: 1px solid #000; padding: 8px; textAlign: left" >Email</th>
            <th style="border: 1px solid #000; padding: 8px; textAlign: left" >Gender</th>
            <th style="border: 1px solid #000; padding: 8px; textAlign: left" >Date</th>
            <th style="border: 1px solid #000; padding: 8px; textAlign: left" >Question</th>
            <th style="border: 1px solid #000; padding: 8px; textAlign: left" >Answer</th>
            <th style="border: 1px solid #000; padding: 8px; textAlign: left" >Country</th>
            <th style="border: 1px solid #000; padding: 8px; textAlign: left" >Question Type</th>
        </tr>
    </thead>`;
    // create table row
    const tableRows = responseData
      .map(
        (item, ind) => `<tr key={${ind}}>
        <td style="border: 1px solid #000; padding: 8px">
            ${item._id}
        </td>
        <td style="border: 1px solid #000; padding: 8px">
        ${item.first_name}
        </td>
        <td style="border: 1px solid #000; padding: 8px" >${item.list_name}</td>
        <td style="border: 1px solid #000; padding: 8px" >${item.email}</td>
        <td style="border: 1px solid #000; padding: 8px" >${item.gender}</td>
        <td style="border: 1px solid #000; padding: 8px" >${item.date}</td>
        <td style="border: 1px solid #000; padding: 8px" >${item.question}</td>
        <td style="border: 1px solid #000; padding: 8px" >${item.answer}</td>
        <td style="border: 1px solid #000; padding: 8px" >${item.country}</td>
        <td style="border: 1px solid #000; padding: 8px" >${item.questionType}</td>
    </tr>`
      )
      .join("");

    const htmlContent = `<html><head><title>Universal Survey Response Data</title></head><body>
        <h1 style="text-align: center; font-size: 30px;">${currentSurveyData.title}</h1>
        <p style="text-align: center; font-size: 16px; color: gray">${currentSurveyData.description}</p>
        <table> ${tableHead} <tbody> ${tableRows}</tbody></table>
        </body></html>`;
    // code for download json data as html file
    const htmlBlob = new Blob([htmlContent], { type: "text/html" });

    saveAs(htmlBlob, "Customer-Satisfaction-Survey.html");
  }

  return (
    <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div class="max-h-full w-full max-w-[800px] overflow-y-auto sm:rounded-2xl bg-white p-8">
        <h2 className="text-3xl text-neutral-800 pb-3 border-b-2 border-blue-500 mb-3">
          Export Data
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full">
          <button
            className="flex justify-center items-center shadow-xl rounded-md text-2xl bg-green-300 24"
            onClick={exportToExcel}
          >
            <span className="p-2 rounded-md bg-white">
              <SiMicrosoftexcel className="text-green-600 text-4xl" />
            </span>
          </button>

          <button className="flex justify-center items-center shadow-xl rounded-md h-24 text-2xl bg-red-200">
            <span className="p-2 rounded-md bg-white">
              <ExportDataToPDF tableData={responseData}>
                <FaFilePdf className="text-red-500 text-4xl" />
              </ExportDataToPDF>
            </span>
          </button>

          <button
            className="flex justify-center items-center shadow-xl rounded-md text-2xl bg-blue-200 h-24"
            onClick={exportToCSV}
          >
            <span className="p-2 rounded-md bg-white">
              <FaFileCsv className="text-blue-500 text-4xl" />
            </span>
          </button>

          <button
            className="flex justify-center items-center shadow-xl rounded-md text-2xl bg-yellow-100 h-24"
            onClick={exportJSONtoHTML}
          >
            <span className="p-2 rounded-md bg-white">
              <BiSolidFileHtml className="text-yellow-600 text-4xl" />
            </span>
          </button>

          <button
            className="flex justify-center items-center shadow-xl rounded-md text-2xl bg-pink-300 h-24"
            onClick={exportToJson}
          >
            <span className="p-2 rounded-md bg-white">
              <BiSolidFileJson className="text-pink-500  text-4xl" />
            </span>
          </button>
        </div>

        <div className="w-full">
          <button
            className="text-white text-4xl absolute top-6 right-10"
            onClick={() => setOpenModal(false)}
          >
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExportResponseModal;
