import { saveAs } from 'file-saver';
import { BsFiletypeHtml } from "react-icons/bs";
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

    const exportToPDF = () => {

        const pdfBlob = new Blob([<ExportDataToPDF key={"exportToPDF"} tableData={data} />], { type: 'application/pdf' });

        const pdfUrl = URL.createObjectURL(pdfBlob);

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'Customer-Satisfaction-Survey.pdf');
        document.body.appendChild(link);

        link.click();

        // Cleanup: remove the temporary URL created
        URL.revokeObjectURL(pdfUrl);
    };

    return (
        <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div class="max-h-full w-full max-w-[800px] overflow-y-auto sm:rounded-2xl bg-white p-8">
                <h2 className="text-3xl text-neutral-800 pb-3 border-b-2 border-blue-500 mb-3">Export Data</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center w-full">
                    <button className="flex justify-center items-center shadow-xl rounded-md text-2xl bg-green-300 24" onClick={exportToExcel}  ><SiMicrosoftexcel className="text-green-600 text-4xl" /></button>

                    <button className="flex justify-center items-center shadow-xl rounded-md h-24 text-2xl bg-red-200"> <ExportDataToPDF tableData={data}><FaFilePdf className="text-red-500 text-4xl" /></ExportDataToPDF></button>

                    <button className="flex justify-center items-center shadow-xl rounded-md text-2xl bg-blue-200 h-24"><FaFileCsv className="text-blue-500 text-4xl" /></button>

                    <button className="flex justify-center items-center shadow-xl rounded-md text-2xl bg-yellow-200 h-24"><BsFiletypeHtml className="text-yellow-500 text-4xl" /></button>
                </div>

                <div class="w-full">

                    <button class="text-white text-4xl absolute top-6 right-10" onClick={() => setOpenModal(false)} ><IoClose /></button>
                </div>
            </div>
        </div>
    )
}

export default ExportResponseModal