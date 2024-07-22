import { useDroppable } from '@dnd-kit/core';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    uniqueId: string;
}

function DroppableArea({ uniqueId, children }: Props) {
    const { setNodeRef, isOver, over } = useDroppable({
        id: `${uniqueId}`,
    });

    const style = {
        boxShadow: isOver && over ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none",
      };

    return (
        <div ref={setNodeRef}>
            {children}
        </div>
    );
}

export default DroppableArea;