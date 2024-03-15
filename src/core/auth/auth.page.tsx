import {Button, Flex, Form, Layout, List, Segmented, Typography} from "antd";
import {DiscordOutlined, GoogleOutlined} from "@ant-design/icons";

import {Header} from "@ui";


export const AuthPage = () => {
    return <Layout className={"app"}>
        <Header />
        <Flex vertical align={"center"} justify={"center"}  style={{ flexGrow: 1 }}>
           <Form>
               <Typography.Title level={2} title={""}>
                   Войди
               </Typography.Title>
               <Button>
                   Вконтакте
               </Button>
               <Button>
                   <GoogleOutlined />
                   Google
               </Button>
               <Button>
                   Yandex
               </Button>
               <Button>
                   <DiscordOutlined />
                   Discord
               </Button>
           </Form>
        </Flex>
    </Layout>
}
