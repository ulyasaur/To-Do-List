import { Card } from 'antd';
import TaskCard from './TaskCard';
import { useState } from 'react';
import DraggableItem from '../app/common/dnd/DraggableItem';
import { TaskItem } from '../app/models/TaskItem';

interface Props {
    areaColour: string;
    areaName: string;
    taskItems: TaskItem[];
}

function StatusArea({ areaColour, areaName, taskItems }: Props) {
    const [isDraggingDisabled, setIsDraggingDisabled] = useState(false)
    return (
        <Card title={areaName} 
        style={{ 
            backgroundColor: areaColour, 
            height: "100%", 
            borderRadius: "20px", 
            display: 'flex', 
            flexDirection: 'column' 
        }}>
            {taskItems.map(taskItem =>
                <DraggableItem key={taskItem.taskItemId} uniqueId={taskItem.taskItemId.toString()} isDraggingDisabled={isDraggingDisabled}>
                    <TaskCard statusColour={areaColour} setDragging={setIsDraggingDisabled} taskItem={taskItem} />
                </DraggableItem>
            )}
        </Card>
    );
}

export default StatusArea;