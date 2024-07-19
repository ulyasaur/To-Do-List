import { Col, Flex, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import StatusArea from './StatusArea';

function MainPage() {
    return (
        <Layout>
            <Flex justify="center">
                <Row gutter={16} style={{ width: "80vw", height: "100%", marginTop: "4px" }}>
                    <Col span={8}>
                        <StatusArea areaColour="salmon" areaName="To Do" />
                    </Col>
                    <Col span={8}>
                        <StatusArea areaColour="lemonchiffon" areaName="In Progress" />
                    </Col>
                    <Col span={8}>
                        <StatusArea areaColour="lightgreen" areaName="Done" />
                    </Col>
                </Row>
            </Flex>
        </Layout>
    );
}

export default MainPage;