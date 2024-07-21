import { useDroppable } from '@dnd-kit/core';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    uniqueId: string;
}

function DroppableArea({ uniqueId, children }: Props) {
    const { setNodeRef } = useDroppable({
        id: `${uniqueId}`,
    });

    return (
        <div ref={setNodeRef}>
            {children}
        </div>
    );
}

export default DroppableArea;