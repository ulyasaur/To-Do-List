import { Card } from 'antd';
import { EditOutlined, DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import ViewTaskModal from '../app/common/modals/ViewTaskModal';
import EditTaskModal from '../app/common/modals/EditTaskModal';
import { TaskItem } from '../app/models/TaskItem';
import { observer } from 'mobx-react';
import DeleteConfirmModal from '../app/common/modals/DeleteConfirmModal';

interface Props {
    statusColour: string;
    setDragging: (e: boolean) => void;
    taskItem: TaskItem;
}


export default observer(function TaskCard({ statusColour, setDragging, taskItem }: Props) {
    const [isViewModalOpened, setViewModalOpened] = useState(false);
    const [isEditModalOpened, setEditModalOpened] = useState(false);
    const [isDeleteModalOpened, setDeleteModalOpened] = useState(false);

    useEffect(() => {
        setDragging(isEditModalOpened || isViewModalOpened || isDeleteModalOpened)
    }, [isEditModalOpened, isViewModalOpened, isDeleteModalOpened])

    const actions: React.ReactNode[] = [
        <InfoCircleOutlined key="view" onPointerDown={(e) => e.stopPropagation()} onClick={(e) => {
            e.stopPropagation()
            setViewModalOpened(true)
        }} />,
        <EditOutlined key="edit" onPointerDown={(e) => e.stopPropagation()} onClick={(e) => {
            e.stopPropagation()
            setEditModalOpened(true)
        }} />,
        <DeleteOutlined key="delete" onPointerDown={(e) => e.stopPropagation()} onClick={(e) => {
            e.stopPropagation()
            setDeleteModalOpened(true);
        }} />
    ];

    return (
        <>
            <Card actions={actions} style={{ width: "100%", marginBottom: "5px" }}>
                <Card.Meta
                    title={<div style={{ whiteSpace: 'normal', wordBreak: "break-word" }}>{taskItem.name}</div>}
                    description={
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            }}
                        >
                            {taskItem.description}
                        </div>
                    }
                />
            </Card >

            <ViewTaskModal
                isOpen={isViewModalOpened}
                handleClose={() => setViewModalOpened(false)}
                openEditModal={() => setEditModalOpened(true)}
                openDeleteModal={() => setDeleteModalOpened(true)}
                statusColour={statusColour}
                taskItem={taskItem}
            />
            <EditTaskModal isOpen={isEditModalOpened} handleClose={() => setEditModalOpened(false)} taskItem={taskItem} />
            <DeleteConfirmModal
                isOpen={isDeleteModalOpened}
                handleClose={() => setDeleteModalOpened(false)}
                statusColour={statusColour}
                taskItem={taskItem}
            />
        </>
    );
})