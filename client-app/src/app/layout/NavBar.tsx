import { Button, Flex, Typography } from "antd";
import { Header } from "antd/es/layout/layout";

const { Title } = Typography;

function NavBar() {
    return (
        <Header>
            <Flex justify="space-between" align="center">
                <Typography>
                    <Title style={{ color: "white", margin: 12}} level={3}>
                        To-Do List
                    </Title>
                </Typography>
                <Button type="primary">Create task</Button>
            </Flex>
        </Header>
    );
}

export default NavBar;