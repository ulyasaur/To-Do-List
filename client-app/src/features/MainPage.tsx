import { Col, Flex, Layout, Row } from 'antd';
import StatusArea from './StatusArea';
import DroppableArea from '../app/common/dnd/DroppableArea';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { useState } from 'react';
import TaskCard from './TaskCard';

function MainPage() {

    const [activeId, setActiveId] = useState(null);

    const handleDragStart = (event: any) => {
        setActiveId(event.active.id);
    }

    const handleDragEnd = (event: any) => {
        setActiveId(null);
    }

    return (
        <Layout>
            <Flex justify="center">
                <Row gutter={16} style={{ width: "80vw", height: "100%", marginTop: "4px" }}>
                    <DndContext
                        onDragStart={(e) => handleDragStart(e)}
                        onDragEnd={(e) => handleDragEnd(e)} >
                        <Col span={8}>
                            <DroppableArea uniqueId='ToDo'>
                                <StatusArea areaColour="salmon" areaName="To Do" />
                            </DroppableArea>
                        </Col>
                        <Col span={8}>
                            <DroppableArea uniqueId='InProgress'>
                                <StatusArea areaColour="khaki" areaName="In Progress" />
                            </DroppableArea>
                        </Col>
                        <Col span={8}>
                            <DroppableArea uniqueId='Done'>
                                <StatusArea areaColour="lightgreen" areaName="Done" />
                            </DroppableArea>
                        </Col>

                        <DragOverlay>
                            {activeId ? (
                                <TaskCard statusColour='hotpink' setDragging={(e)=> {}}/>
                            ) : null}
                        </DragOverlay>
                    </DndContext>
                </Row>
            </Flex>
        </Layout>
    );
}

export default MainPage;