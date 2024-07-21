import { DndContext, DragEndEvent, useDraggable } from "@dnd-kit/core";
import { PropsWithChildren } from "react";
import { CSS } from '@dnd-kit/utilities';

interface Props extends PropsWithChildren {
  uniqueId: string;
  isDraggingDisabled: boolean;
}

function DraggableItem({ uniqueId, children, isDraggingDisabled }: Props) {
  const { setNodeRef, listeners, attributes, over, isDragging } = useDraggable({
    id: `${uniqueId}`,
    disabled: isDraggingDisabled
  });

  const style = {
    transform: "translate: { x: 100, y: 50 }",
    opacity: isDragging ? 0 : 1,
    boxShadow: over && isDragging ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}

export default DraggableItem;