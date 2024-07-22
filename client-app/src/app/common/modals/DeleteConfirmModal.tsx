import React, { useState } from 'react';
import { Button, Card, Modal, Tag } from 'antd';
import { TaskItem } from '../../models/TaskItem';
import { useStore } from '../../stores/store';
import { TaskItemStatus } from '../../models/enums/TaskItemStatus';

interface Props {
    taskItem: TaskItem;
    isOpen: boolean;
    handleClose: () => void;
    statusColour: string;
}

function DeleteConfirmModal({ handleClose, isOpen, taskItem, statusColour }: Props) {
    const { taskitemstore } = useStore();
    const { deleteTaskItem } = taskitemstore;

    const handleOk = () => {
        deleteTaskItem(taskItem.taskItemId);
        handleClose();
    };

    const handleCancel = () => {
        handleClose();
    };

    return (
            <Modal title="Do you want to delete this task?" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
                <Card>
                <Card.Meta
                    title={<div style={{ whiteSpace: 'normal', wordBreak: "break-word" }}>{taskItem.name}</div>}
                    description={
                        <>
                            <Tag bordered={false} color={statusColour} >
                                {TaskItemStatus[taskItem.status]}
                            </Tag>
                            <p>{taskItem.description}</p>
                        </>
                    }
                />
            </Card>
            </Modal>
    );
};

export default DeleteConfirmModal;