import { Card, Col, Divider, Flex, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';

interface Props {
}


function TaskCard({ }: Props) {
    const actions: React.ReactNode[] = [
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete" />
    ];

    return (
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
    );
}

export default TaskCard;