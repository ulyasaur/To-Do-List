import { Badge, Card, Modal, Tag } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons';
import EditTaskModal from "./EditTaskModal";

interface Props {
    isOpen: boolean;
    handleClose: () => void;
    openEditModal: () => void;
    statusColour: string;
}

function ViewTaskModal({ handleClose, isOpen, openEditModal, statusColour }: Props) {
    const actions: React.ReactNode[] = [
        <EditOutlined key="edit" onClick={() => {
            openEditModal()
            handleClose()
        }} />,
        <DeleteOutlined key="delete" />
    ];

    return (
        <Modal
            title="Task info"
            open={isOpen}
            onClose={handleClose}
            onOk={handleClose}
            onCancel={handleClose}
            footer={<></>}
        >
            <Card actions={actions}>
                <Card.Meta
                    title="Card title"
                    description={
                        <>
                            <Tag bordered={false} color={statusColour} >
                                status
                            </Tag>
                            <p>This is the description</p>
                            <p>This is the description</p>
                        </>
                    }
                />
            </Card>
        </Modal>
    );
}

export default ViewTaskModal;