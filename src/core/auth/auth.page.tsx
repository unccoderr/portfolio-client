import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const decompress = require("brotli/decompress")
import {Button, Flex, Form, Layout, Typography, Skeleton} from "antd";
import {DiscordOutlined, GoogleOutlined} from "@ant-design/icons";
import {Header} from "@ui";

const host = "127.0.0.1"
const port = 5000
const protocol = "http"
const version = "v1"

interface IPayloadType {
    payload: {
        vk_url: string;
        yandex_url: string;
        google_url: string;
        discord_url: string;
    }
}
const getData = async (): Promise<IPayloadType> => {
    return fetch(`${protocol}://${host}:${port}/api/${version}/auth/links`)
        .then(binaryJson => binaryJson.text())
        .then(text => Buffer.from(text, "base64"))
        .then(buffer => decompress(buffer))
        .then(buffer => Buffer.from(buffer).toString("utf-8"))
        .then(rawJson => JSON.parse(rawJson))
        .catch((e) => {
            console.error(e)
            return null
        })
}
export const AuthPage = () => {
    const router = useRouter()
    const [payload, setPayload] = useState<IPayloadType | null>(null)
    useEffect(() => {
        getData()
            .then((payload) => setPayload(payload))
            .catch(console.error)
    }, [])

    return <Layout className={"app"}>
        <Header />
        <Flex vertical align={"center"} justify={"center"}  style={{ flexGrow: 1 }}>
            <Form  style={{ width: "50%", margin: "0 auto" }}>
                { (!payload || !payload?.payload) ? <div>
                        <Skeleton title loading />
                    </div> : <div>
                    <Typography.Title level={2}>
                        Войди
                    </Typography.Title>
                    <Button onClick={() => window?.open(payload?.payload.vk_url, "", "height=800,width=600")}>
                        Вконтакте
                    </Button>
                    <Button onClick={() => window?.open(payload?.payload.google_url, "", "height=800,width=600")}>
                        <GoogleOutlined />
                        Google
                    </Button>
                    <Button onClick={() => window?.open(payload?.payload.yandex_url, "", "height=800,width=600")}>
                        Yandex
                    </Button>
                    <Button onClick={() => window?.open(payload?.payload.discord_url, "", "height=800,width=600")}>
                        <DiscordOutlined />
                        Discord
                    </Button>
                </div> }
           </Form>
        </Flex>
    </Layout>
}
