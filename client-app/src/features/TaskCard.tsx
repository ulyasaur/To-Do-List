import { Card, Col, Divider, Flex, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { EditOutlined, DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import ViewTaskModal from '../app/common/modals/ViewTaskModal';
import EditTaskModal from '../app/common/modals/EditTaskModal';

interface Props {
    statusColour: string;
    setDragging: (e:boolean) => void;
}


function TaskCard({ statusColour, setDragging }: Props) {
    const [isViewModalOpened, setViewModalOpened] = useState(false);
    const [isEditModalOpened, setEditModalOpened] = useState(false);

    useEffect(() => {
        setDragging(isEditModalOpened || isViewModalOpened)
    }, [isEditModalOpened, isViewModalOpened])

    const actions: React.ReactNode[] = [
        <InfoCircleOutlined key="view" onPointerDown={(e)=> e.stopPropagation()} onClick={(e) => {
            e.stopPropagation()
            setViewModalOpened(true)
        }} />,
        <EditOutlined key="edit" onPointerDown={(e)=> e.stopPropagation()} onClick={(e) => {
            e.stopPropagation()
            setEditModalOpened(true)
        }} />,
        <DeleteOutlined key="delete" onPointerDown={(e)=> e.stopPropagation()}/>
    ];

    return (
        <>
            <Card actions={actions} style={{ width: "100%", marginBottom: "5px" }}>
                <Card.Meta
                    title="Card title"
                    description={
                        <>
                            <p>This is the description</p>
                            <p>This is the description</p>
                        </>
                    }
                />
            </Card>

            <ViewTaskModal
                isOpen={isViewModalOpened}
                handleClose={() => setViewModalOpened(false)}
                openEditModal={() => setEditModalOpened(true)}
                statusColour={statusColour}
            />
            <EditTaskModal isOpen={isEditModalOpened} handleClose={() => setEditModalOpened(false)} />
        </>
    );
}

export default TaskCard;