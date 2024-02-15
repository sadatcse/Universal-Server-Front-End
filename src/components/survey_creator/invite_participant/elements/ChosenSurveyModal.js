"use client"
import { IoClose } from 'react-icons/io5';
import ChosenCard from './ChosenCard';

export default function ChosenSurveyModal({ setOpenSelectedItemModal, selectedItem, setSelectedItem }) {
    return (
        <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div class="max-h-full w-full max-w-[1000px] overflow-y-auto sm:rounded-2xl bg-white p-8">
                <div className="flex pb-3 border-b-2 border-blue-500 mb-3 items-center justify-between">
                    <h2 className="text-3xl text-neutral-800 flex items-center">Choose Survey</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full mt-4 gap-6">
                    {
                        selectedItem && selectedItem.map((data, idx) => (
                            <ChosenCard key={idx} data={data} />

                        ))
                    }
                </div>
            </div>
            <button class="text-white text-4xl absolute top-6 right-10" onClick={() => setOpenSelectedItemModal(false)} ><IoClose /></button>
        </div>
    )
}
