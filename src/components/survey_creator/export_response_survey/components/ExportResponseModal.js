import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import { BiSolidFileHtml, BiSolidFileJson } from "react-icons/bi";
import { FaFileCsv, FaFilePdf } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { SiMicrosoftexcel } from "react-icons/si";
import * as XLSX from 'xlsx';
import ExportDataToPDF from './ExportDataToPDF';
function ExportResponseModal({ setOpenModal }) {

    const data = [
        {
            "id": 1,
            "name": "John Doe",
            "date": "2023-12-31",
            "email": "johndoe@yahoo.com"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "date": "2023-12-31",
            "email": "johesmith@yahoo.com"
        },
        {
            "id": 3,
            "name": "Sam Wilson",
            "date": "2023-12-31",
            "email": "samwilson@yahoo.com"
        },
        {
            "id": 4,
            "name": "Sara Jones",
            "date": "2023-12-31",
            "email": "sarajones@yahoo.com"
        },
        {
            "id": 5,
            "name": "Alex Rodriguez",
            "date": "2023-12-31",
            "email": "alexroot@yahoo.com"
        },
        {
            "id": 6,
            "name": "Emily White",
            "date": "2023-12-31",
            "email": "emilywhtie@yahoo.com"
        }
    ]

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        // Buffer to store the generated Excel file
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

        saveAs(blob, "Customer-Satisfaction-Survey.xlsx");
    };

    const exportToCSV = () => {
        const stringData = JSON.stringify(data)
        const csvBlob = new Blob([Papa.unparse(data)], { type: 'text/csv;charset=utf-8;' });

        saveAs(csvBlob, "Customer-Satisfaction-Survey.csv")

    };

    const exportToJson = () => {
        const stringData = JSON.stringify(data)
        const jsonBlob = new Blob([stringData], { type: 'application/json' });

        saveAs(jsonBlob, "Customer-Satisfaction-Survey.json")

    };


    function exportJSONtoHTML() {
        // Convert JSON data to HTML string (customize this based on your data structure)

        // crate table header
        const tableHead = `<thead>
        <tr>
            <th style={{ border: "1px solid #000", padding: "8px", textAlign: "left" }}>Title</th>
            <th style={{ border: "1px solid #000", padding: "8px", textAlign: "left" }}>Description</th>
            <th style={{ border: "1px solid #000", padding: "8px", textAlign: "left" }}>Date</th>
            <th style={{ border: "1px solid #000", padding: "8px", textAlign: "left" }}>Participants</th>
            <th style={{ border: "1px solid #000", padding: "8px", textAlign: "left" }}>Response Rate</th>
            <th style={{ border: "1px solid #000", padding: "8px", textAlign: "left" }}>Action</th>
        </tr>
    </thead>`
        // create table row
        const tableRows = data.map(item => `<tr key={${item.id}}>
        <td style={{ border: "1px solid #000", padding: "8px" }}>
            <h3>${item.id}</h3>
        </td>
        <td style={{ border: "1px solid #000", padding: "8px", textOverflow: "ellipsis", maxWidth: "80px", whiteSpace: "nowrap", overflow: "hidden" }}>
        ${item.name}
        </td>
        <td style={{ border: "1px solid #000", padding: "8px" }}>${item.date}</td>
        <td style={{ border: "1px solid #000", padding: "8px" }}>${item.email}</td>
    </tr>`).join('');

        const htmlContent = `<html><head><title>JSON to HTML</title></head><body><table> ${tableHead} <tbody> ${tableRows}</tbody></table></body></html>`;
        ;

        // code for download json data as html file
        const htmlBlob = new Blob([htmlContent], { type: 'text/html' });

        saveAs(htmlBlob, "Customer-Satisfaction-Survey.html")
    }

//    async function downloadAsDocx() {
//         try {
//             // Create a new instance of JSZip
//             const zip = new JSZip();
    
//             // Load the template content
//             zip.loadAsync(template).then((docx) => {
//                 // Create a new instance of Docxtemplater
//                 const doc = new Docxtemplater();
//                 doc.loadZip(docx);
    
//                 // Set the template data
//                 doc.setData(data);
    
//                 // Render the template with the data
//                 doc.render();
    
//                 // Generate the DOCX file as a binary Blob
//                 const content = doc.getZip().generate({ type: 'blob' });
    
//                 // Save the Blob as a DOCX file
//                 saveAs(content, 'Customer-Satisfaction-Survey.docx');
//             });
//         } catch (error) {
//             console.error('Error generating DOCX:', error);
//         }
//     }


    return (
        <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div class="max-h-full w-full max-w-[800px] overflow-y-auto sm:rounded-2xl bg-white p-8">
                <h2 className="text-3xl text-neutral-800 pb-3 border-b-2 border-blue-500 mb-3">Export Data</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full">
                    <button className="flex justify-center items-center shadow-xl rounded-md text-2xl bg-green-300 24" onClick={exportToExcel}  >
                        <span className='p-2 rounded-md bg-white'>
                            <SiMicrosoftexcel className="text-green-600 text-4xl" />

                        </span>
                    </button>

                    <button className="flex justify-center items-center shadow-xl rounded-md h-24 text-2xl bg-red-200">
                        <span className='p-2 rounded-md bg-white'>
                            <ExportDataToPDF tableData={data}>
                                <FaFilePdf className="text-red-500 text-4xl" />
                            </ExportDataToPDF>
                        </span>
                    </button>

                    <button className="flex justify-center items-center shadow-xl rounded-md text-2xl bg-blue-200 h-24" onClick={exportToCSV}>
                        <span className='p-2 rounded-md bg-white'>
                            <FaFileCsv className="text-blue-500 text-4xl" />

                        </span>
                    </button>

                    <button className="flex justify-center items-center shadow-xl rounded-md text-2xl bg-yellow-100 h-24" onClick={exportJSONtoHTML}>
                        <span className='p-2 rounded-md bg-white'>
                            <BiSolidFileHtml className="text-yellow-600 text-4xl" />

                        </span>
                    </button>

                    <button className="flex justify-center items-center shadow-xl rounded-md text-2xl bg-pink-300 h-24" onClick={exportToJson}><span className='p-2 rounded-md bg-white'>

                        <BiSolidFileJson className="text-pink-500  text-4xl" />
                    </span>
                    </button>

                    {/* <button className="flex justify-center items-center shadow-xl rounded-md text-2xl bg-pink-300 h-24" onClick={downloadAsDocx}><span className='p-2 rounded-md bg-white'>

                        <BiSolidFileJson className="text-pink-500  text-4xl" />
                    </span>
                    </button> */}
                </div>

                <div class="w-full">

                    <button class="text-white text-4xl absolute top-6 right-10" onClick={() => setOpenModal(false)} ><IoClose /></button>
                </div>
            </div>
        </div>
    )
}

export default ExportResponseModal