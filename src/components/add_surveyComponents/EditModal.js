import { IoClose } from 'react-icons/io5'
import EditModalForm from './EditModalForm'

function EditModal({ setOpenEditModal, setShowQuestionArea, setFormData, formData }) {
    return (
        <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div class="max-h-full w-full max-w-[800px] overflow-y-auto sm:rounded-2xl bg-white">
                <EditModalForm
                    formData={formData}
                    setFormData={setFormData}
                    setOpenEditModal={setOpenEditModal}
                />
                <div class="w-full">

                    <button class="text-white text-4xl absolute top-6 right-10" onClick={() => setOpenEditModal(false)}><IoClose /></button>
                </div>
            </div>
        </div>
    )
}

export default EditModal