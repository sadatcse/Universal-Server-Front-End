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


export default function RankingScaleQuestion({question, setQuestions}) {
  const [tasks, setTasks] = useState(question.answer || question.options);

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

      setQuestions(prevValue => {
        const current_question = prevValue.findIndex(item => item.id === question.id);

        const copyArray = {...question};

        copyArray.answer = changedElementOrderArray;

        const updatedArray = prevValue.toSpliced(current_question, 1, copyArray)

        console.log(updatedArray)


        return updatedArray;
      })
      

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
          <Column id="toDo" tasks={tasks} />
        </DndContext>
      </div>
    </div>
  );
}