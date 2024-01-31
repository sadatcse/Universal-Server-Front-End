"use client"
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import AddQuestionCard from "./AddQuestionCard";
import AddQuestionModal from "./AddQuestionModal";
import EditModal from "./EditModal";

function AddQuestionArea({ formData, setShowQuestionArea, setFormData }) {
    const [openEditModal, setOpenEditModal] = useState(false)
    const [openAddQuestionModal, setOpenAddQuestionModal] = useState(false)
    return (
        <div className='w-full'>
            <h2 className='text-3xl font-bold pb-4 border-b-2 border-rose-400 relative'>{formData.title} <button className="p-2 absolute top-1/2 right-6 -translate-y-1/2 text-sm rounded-sm text-white bg-neutral-400 border hover:bg-blue-500 hover:text-white" onClick={() => setOpenEditModal(true)} ><FaEdit /></button></h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 mt-4 gap-6">
                <div className="rounded-lg border-2 text-neutral-800 text-4xl bg-amber-200 border-amber-500 h-24 p-2 relative">
                    <h3 className="text-base font-bold">Are you student?</h3>
                    <button className="p-1 absolute -top-3 -right-3 text-[10px] text-white bg-neutral-400 border rounded-full hover:bg-red-500 hover:text-white"><IoCloseSharp /></button>

                    <p className="text-sm"><b className="text-rose-600">Q:</b> 8</p>
                </div>
                <AddQuestionCard
                    setOpenAddQuestionModal={setOpenAddQuestionModal}
                />
                {
                    openEditModal ?
                        <EditModal
                            setOpenEditModal={setOpenEditModal}
                            formData={formData}
                            setShowQuestionArea={setShowQuestionArea} setFormData={setFormData}

                        />
                        : null
                }
            </div>
            {
                openAddQuestionModal ?
                    <AddQuestionModal
                        setOpenAddQuestionModal={setOpenAddQuestionModal}

                    />
                    : null
            }
        </div>
    )
}

export default AddQuestionArea