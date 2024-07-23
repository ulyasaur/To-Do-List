import { Button, Card, Form, Input, Modal, Space } from "antd";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { TaskItem } from "../../models/TaskItem";
import { useStore } from "../../stores/store";
import TextArea from "antd/es/input/TextArea";

interface Props {
    isOpen: boolean;
    handleClose: () => void;
    taskItem?: TaskItem | null;
}

export default observer(function EditTaskModal({ handleClose, isOpen, taskItem }: Props) {
    const { taskitemstore } = useStore();
    const { addTaskItem, updateTaskItem } = taskitemstore;
    const [form] = Form.useForm();
    const [taskItemValues, setTaskItemValues] = useState(new TaskItem());

    useEffect(() => {
        if (taskItem) {
            taskItemValues.taskItemId = taskItem.taskItemId;
            taskItemValues.name = taskItem.name;
            taskItemValues.description = taskItem.description
            taskItemValues.status = taskItem.status;
        }
    }, [])

    const onFinish = (values: any) => {
        taskItemValues.name = values.name;
        taskItemValues.description = values.description;

        if (taskItem) {
            updateTaskItem(taskItemValues)
        } else {
            addTaskItem(taskItemValues);
        }
        handleClose();
    };

    const onFinishFailed = () => {
        //message.error('Submit failed!');
    };
    return (
        <Modal
            title="Task info"
            open={isOpen}
            onClose={handleClose}
            onOk={handleClose}
            onCancel={handleClose}
            footer={<></>}
        >
            <Card>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    initialValues={taskItemValues}
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true }, { type: 'string', min: 3, max: 50 }]}
                    >
                        <Input placeholder="Name" minLength={3} maxLength={50}/>
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ type: 'string' }]}
                    >
                        <TextArea placeholder="Description" rows={4} minLength={3} maxLength={500}/>
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>

        </Modal>
    );
})