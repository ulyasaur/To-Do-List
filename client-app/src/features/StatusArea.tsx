import { Card, Col, Divider, Flex, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import TaskCard from './TaskCard';
import React, { useState } from 'react';
import DraggableItem from '../app/common/dnd/DraggableItem';

interface Props {
    areaColour: string;
    areaName: string;
}

function StatusArea({ areaColour, areaName }: Props) {
    const [isDraggingDisabled, setIsDraggingDisabled] = useState(false)
    return (
        <Card title={areaName} style={{ backgroundColor: areaColour, minHeight: "90vh", borderRadius: "20px" }}>
            <DraggableItem uniqueId={`${areaColour}1`} isDraggingDisabled={isDraggingDisabled}>
                <TaskCard statusColour={areaColour} setDragging={setIsDraggingDisabled} />
            </DraggableItem>
            <DraggableItem uniqueId={`${areaColour}2`} isDraggingDisabled={isDraggingDisabled}>
                <TaskCard statusColour={areaColour} setDragging={setIsDraggingDisabled} />
            </DraggableItem>
            <DraggableItem uniqueId={`${areaColour}3`} isDraggingDisabled={isDraggingDisabled}>
                <TaskCard statusColour={areaColour} setDragging={setIsDraggingDisabled} />
            </DraggableItem>
        </Card>
    );
}

export default StatusArea;