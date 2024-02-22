"use client"
import { useState } from 'react';
import { MdOutlineStreetview } from 'react-icons/md';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import DetailModal from './elements/DetailModal';
import ViewResponseOverview from './elements/ViewResponseOverview';
import ViewResponseParticipateList from './elements/ViewResponseParticipateList';
import ViewResponseTable from './elements/ViewResponseTable';

function ViewResponse() {
    const [isOpenModal, setIsOpenModal] = useState(false)

    return (
        <>
        <Tabs>
            <div className='pb-4 border-b-2 border-stone-300 relative flex justify-between items-center'>
                <h2 className="text-3xl font-bold  flex items-center gap-3">
                    <button className="bg-stone-200 text-neutral-800 btn text-3xl flex justify-center items-center" ><MdOutlineStreetview /></button>
                    View Response</h2>
                <TabList>
                    <Tab><button>Overview</button></Tab>
                    <Tab><button>Survey List</button></Tab>
                    <Tab><button>Participates</button></Tab>
                </TabList>

            </div>

            <TabPanel>
                <ViewResponseOverview />
            </TabPanel>
            <TabPanel>
                <ViewResponseTable setIsOpenModal={setIsOpenModal} />
            </TabPanel>
            <TabPanel>
                <ViewResponseParticipateList />
            </TabPanel>
        </Tabs>
            {
                isOpenModal ?
                <DetailModal setIsOpenModal={setIsOpenModal} /> : null
            }
        </>
    )
}

export default ViewResponse