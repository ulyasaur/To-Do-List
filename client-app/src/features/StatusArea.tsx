import { Card, Col, Divider, Flex, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import TaskCard from './TaskCard';
import React from 'react';

interface Props {
    areaColour: string;
    areaName: string;
}

function StatusArea({ areaColour, areaName }: Props) {
    return (
        <Card title={areaName} style={{ backgroundColor: areaColour, minHeight: "90vh", borderRadius: "20px" }}>
            <TaskCard />
            <TaskCard />
            <TaskCard />
        </Card>
    );
}

export default StatusArea;