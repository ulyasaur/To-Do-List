import { Button, Flex, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import EditTaskModal from "../common/modals/EditTaskModal";

const { Title } = Typography;

function NavBar() {
    const [isEditModalOpened, setEditModalOpened] = useState(false);

    return (
        <Header>
            <Flex justify="space-between" align="center">
                <Typography>
                    <Title style={{ color: "white", margin: 12 }} level={3}>
                        To-Do List
                    </Title>
                </Typography>
                <Button type="primary" onClick={() => setEditModalOpened(true)}>Create task</Button>
            </Flex>
            <EditTaskModal isOpen={isEditModalOpened} handleClose={() => setEditModalOpened(false)} />
        </Header>
    );
}

export default NavBar;