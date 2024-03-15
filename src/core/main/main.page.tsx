import {useRouter} from "next/navigation";
import {Breadcrumb, Button, Col, Flex, Layout, Menu, Row, Space, Typography} from "antd";
import {Header} from "@ui";

export const MainPage = () => {
    const router = useRouter()
    return <Layout style={{ flexDirection: "column", gap: "24px" }}>
        <Header />
        <Layout style={{ flexGrow: 1 }}>
            <Layout.Sider width={"15%"}>
                <Typography.Text type={"danger"}>left</Typography.Text>
            </Layout.Sider>
            <Layout.Content style={{ paddingLeft: "20px" }}>
                <Flex vertical gap={16}>
                    <Breadcrumb items={[
                        {
                            href: "/",
                            breadcrumbName: "Главная",
                        },
                        {
                            href: "/",
                            breadcrumbName: "Fsdd",
                        },
                    ]} />
                    <Typography.Title level={1}>Portfolio</Typography.Title>=
                </Flex>
            </Layout.Content>
        </Layout>
        <Layout.Footer>
            Portfolify@2025
        </Layout.Footer>
    </Layout>

}
