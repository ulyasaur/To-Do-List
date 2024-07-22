import { Col, Flex, Layout, Row, Spin } from 'antd';
import StatusArea from './StatusArea';
import DroppableArea from '../app/common/dnd/DroppableArea';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import { observer } from 'mobx-react';
import { useStore } from '../app/stores/store';
import { LoadingOutlined } from '@ant-design/icons';
import { TaskItemStatus } from '../app/models/enums/TaskItemStatus';

export default observer(function MainPage() {
    const { taskitemstore } = useStore();
    const { taskItems, loadTaskItems, loading, updateTaskItem } = taskitemstore;
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        loadTaskItems();
    }, [loadTaskItems]);

    const handleDragStart = (event: any) => {
        setActiveId(event.active.id);
    }

    const handleDragEnd = (event: any) => {
        setActiveId(null);

        const { active, over } = event;

        if (over) {
            const taskItem = taskItems?.find(e => e.taskItemId == active.id)
            taskItem!.status = TaskItemStatus[over.id as keyof typeof TaskItemStatus]
            console.log(`Dropped ${active.id} in ${over.id}`);
            console.log(taskItem)
            updateTaskItem(taskItem!);
        }
    }

    if (!taskItems) {
        return (
            <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        )
    }

    return (
        <Layout>
            <Flex justify="center">
                <Row gutter={16} style={{ width: "80vw", height: "100%", marginTop: "4px" }}>
                    <DndContext
                        onDragStart={(e) => handleDragStart(e)}
                        onDragEnd={(e) => handleDragEnd(e)} >
                        <Col span={8} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <DroppableArea uniqueId='ToDo'>
                                <StatusArea areaColour="salmon" areaName="To Do" taskItems={taskItems?.filter(e => e.status == 0) || null} />
                            </DroppableArea>
                        </Col>
                        <Col span={8} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <DroppableArea uniqueId='InProgress'>
                                <StatusArea areaColour="khaki" areaName="In Progress" taskItems={taskItems?.filter(e => e.status == 1) || null} />
                            </DroppableArea>
                        </Col>
                        <Col span={8} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <DroppableArea uniqueId='Done'>
                                <StatusArea areaColour="lightgreen" areaName="Done" taskItems={taskItems?.filter(e => e.status == 2) || null} />
                            </DroppableArea>
                        </Col>

                        <DragOverlay>
                            {activeId ? (
                                <TaskCard statusColour='hotpink' setDragging={(e) => { }} taskItem={taskItems?.find(e => e.taskItemId == activeId)!} />
                            ) : null}
                        </DragOverlay>
                    </DndContext>
                </Row>
            </Flex>
        </Layout>
    );
})