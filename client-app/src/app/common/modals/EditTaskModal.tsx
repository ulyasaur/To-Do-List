import { Button, Card, Form, Input, Modal, Space } from "antd";
import { useState } from "react";

interface Props {
    isOpen: boolean;
    handleClose: () => void;
}

function EditTaskModal({ handleClose, isOpen }: Props) {
    const [form] = Form.useForm();

    const onFinish = () => {
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
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true }, { type: 'string', min: 3, max: 50 }]}
                    >
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ type: 'string' }]}
                    >
                        <Input placeholder="Description" />
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>

        </Modal>
    );
}

export default EditTaskModal;