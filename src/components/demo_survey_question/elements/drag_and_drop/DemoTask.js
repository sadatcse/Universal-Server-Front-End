import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GrDrag } from "react-icons/gr";


export const DemoTask = ({ id, title, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="task relative"
    >
        <GrDrag />
      <div className="text-neutral bg-white border-2 border-neutral rounded-full w-8 h-8 shadow-lg flex justify-center items-center text-md cursor-pointer">{id}</div>
      {title}
      <div className="text-neutral bg-white border-b-2 border-neutral w-8 h-8 shadow-lg flex justify-center items-center text-md cursor-pointer absolute top-1/2 right-3 -translate-y-1/2">{index + 1}</div>
    </div>
  );
};