import { Card, Modal, Tag } from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { TaskItem } from "../../models/TaskItem";
import { TaskItemStatus } from "../../models/enums/TaskItemStatus";
import { useStore } from "../../stores/store";
import DeleteConfirmModal from "./DeleteConfirmModal";

interface Props {
    isOpen: boolean;
    handleClose: () => void;
    openEditModal: () => void;
    openDeleteModal: () => void;
    statusColour: string;
    taskItem: TaskItem;
}

function ViewTaskModal({ handleClose, isOpen, openEditModal, openDeleteModal, statusColour, taskItem }: Props) {
    const { taskitemstore } = useStore();
    const { deleteTaskItem } = taskitemstore;

    const actions: React.ReactNode[] = [
        <EditOutlined key="edit" onClick={() => {
            openEditModal()
            handleClose()
        }} />,
        <DeleteOutlined key="delete" onClick={(e) => {
            openEditModal();
            handleClose();
        }} />
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
}

export default ViewTaskModal;