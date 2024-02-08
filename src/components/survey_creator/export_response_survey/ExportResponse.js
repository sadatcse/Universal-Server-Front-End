"use client"
import { useState } from "react"
import ExportResponseCard from "./components/ExportResponseCard"
import ExportResponseHeader from "./components/ExportResponseHeader"
import ExportResponseModal from "./components/ExportResponseModal"

function ExportResponse() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
    <ExportResponseHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-6">
          <ExportResponseCard setOpenModal={setOpenModal} />
          <ExportResponseCard setOpenModal={setOpenModal} />
          <ExportResponseCard setOpenModal={setOpenModal} />
      </div>
      {
        openModal ?
      <ExportResponseModal setOpenModal={setOpenModal} /> : null
      }

    </>
  )
}

export default ExportResponse