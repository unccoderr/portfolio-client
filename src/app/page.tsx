"use client"

import * as React from 'react';
import {
    AdaptivityProvider,
    ConfigProvider,
    AppRoot,
    SplitLayout,
    SplitCol,
    View,
    Panel,
    PanelHeader,
    Header,
    Group,
    SimpleCell,
    usePlatform,
    RichCell,
    CellButton,
    Button,
    Calendar,
    Alert,
    Title,
    Avatar,
    Spacing,
    SegmentedControl,
    Pagination, ButtonGroup, Text, Root, FormLayoutGroup, Input, platform, Appearance, AppearanceProvider,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {useState} from "react";
import {Platform} from "@vkontakte/vkui/src/lib/platform";

const App = () => {
    const [id, setId] = useState("index")

    return <>
        <Root activeView={"main"}>
            <View activePanel={id} id={"main"}>
                <Panel id={"index"}>
                    <PanelHeader>
                        Главная
                    </PanelHeader>

                    <SplitLayout>
                        <SplitCol>
                            <Group>
                                <ButtonGroup>
                                    <Button onClick={() => setId("login")} size={"m"} mode={"primary"}>
                                        Вход
                                    </Button>
                                    <Button onClick={() => setId("register")} size={"m"} mode={"secondary"}>
                                        Регистрация
                                    </Button>
                                </ButtonGroup>
                            </Group>
                        </SplitCol>
                    </SplitLayout>
                </Panel>
                <Panel id={"login"}>
                    <PanelHeader>
                        Вход
                    </PanelHeader>
                    <FormLayoutGroup mode={"vertical"}>
                        <Text>
                            Вход
                        </Text>
                        <ButtonGroup>
                            <Button onClick={() => setId("login")} size={"m"} mode={"primary"}>
                                Войти
                            </Button>
                            <Button onClick={() => setId("register")} size={"m"} mode={"secondary"}>
                                Регистрация
                            </Button>
                        </ButtonGroup>
                        <Button onClick={() => setId("index")} size={"m"} mode={"link"}>
                            Назад
                        </Button>
                    </FormLayoutGroup>
                </Panel>
                <Panel id={"register"}>
                    <PanelHeader>
                        Регистрация
                    </PanelHeader>
                    <FormLayoutGroup mode={"vertical"}>
                        <Text>
                            Регистрация
                        </Text>
                        <ButtonGroup>
                            <Button onClick={() => setId("register")} size={"m"} mode={"primary"}>
                                Зарегистрироваться
                            </Button>
                            <Button onClick={() => setId("login")} size={"m"} mode={"secondary"}>
                                Вход
                            </Button>
                        </ButtonGroup>
                        <Button onClick={() => setId("index")} size={"m"} mode={"link"}>
                            Назад
                        </Button>
                    </FormLayoutGroup>
                </Panel>
            </View>
        </Root>
    </>
};

export default () => {
    return <AppRoot layout={"card"}>
        <ConfigProvider platform={Platform.IOS}>
            <AdaptivityProvider >
                <AppearanceProvider value={Appearance.LIGHT}>
                    <App />
                </AppearanceProvider>
            </AdaptivityProvider>
        </ConfigProvider>
    </AppRoot>
}
