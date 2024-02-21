import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Task } from "./Task";
import { DemoTask } from "./DemoTask";

  
  
  export const DemoColumn = ({ tasks }) => {
    return (
      <div className="column w-full md:w-[80%]">
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((task, index) => (
            <DemoTask key={task.id} id={task.id} title={task.title} index={index} />
          ))}
        </SortableContext>
      </div>
    );
  };