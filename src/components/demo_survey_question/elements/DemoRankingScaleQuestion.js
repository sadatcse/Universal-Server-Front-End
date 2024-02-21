"use client"
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useState } from "react";
import { Column } from "./drag_and_drop/Column";
import { DemoColumn } from "./drag_and_drop/DemoColumn";




const question = {
  "question": "Please rank the following aspects of your job from most important to least important:",
  "questionType": "Ranking Questions",
  "options": [{ "id": 1, "title": "Compensation" },
  { "id": 2, "title": "Work-life balance" },
  { "id": 3, "title": "Career growth opportunities" },
  { "id": 4, "title": "Company culture" },
  { "id": 5, "title": "Job security" }]
}


export default function DemoRankingScaleQuestion() {
  const [tasks, setTasks] = useState(question.options);



  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addTask = (title) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      // changed element according to the drag and drop
      const changedElementOrderArray = arrayMove(tasks, originalPos, newPos);

      const changedIdArray = changedElementOrderArray.map((item, index) => ({ id: index + 1, title: item.title }));


      console.log("changedIdArray", changedIdArray)
      // console.log("changedElementOrderArray",changedElementOrderArray)

      return changedElementOrderArray

    });
  };

  return (
    <div>
      <h2 className='text-3xl font-bold text-center pt-8 pb-10'>{question?.question}</h2>
      <div className="App">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <DemoColumn id="toDo" tasks={tasks} />
        </DndContext>
      </div>
    </div>
  );
}