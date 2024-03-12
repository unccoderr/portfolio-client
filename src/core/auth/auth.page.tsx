import {
    CardGrid, ContentCard,
    Group,
    Panel,
    PanelHeader,
    Root,
    View
} from "@vkontakte/vkui"

export const AuthPage = () => {
    return <Root activeView={"main"}>
        <View id={"main"} activePanel={"main"}>
            <Panel id={"main"}>
                <PanelHeader>
                    Auth Page
                </PanelHeader>
                <Group description={"Способ авторизации"}>
                    <CardGrid size={"m"}>
                        <ContentCard
                            mode={"outline"}
                            onClick={() => alert("login by vk")}
                            height={140}
                            header={"Vkontakte"}
                            src={"https://images.unsplash.com/photo-1603928726698-a015a1015d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"}
                        />
                        <ContentCard
                            mode={"outline"}
                            onClick={() => alert("login by inst")}
                            height={140}
                            header={"Instagram"}
                            src={"https://images.unsplash.com/photo-1603928726698-a015a1015d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"}
                        />
                        <ContentCard
                            mode={"outline"}
                            onClick={() => alert("login by google")}
                            height={140}
                            header={"Google"}
                            src={"https://images.unsplash.com/photo-1603928726698-a015a1015d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"}
                        />
                        <ContentCard
                            mode={"outline"}
                            onClick={() => alert("login by discord")}
                            height={140}
                            header={"Discord"}
                            src={"https://images.unsplash.com/photo-1603928726698-a015a1015d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"}
                        />
                    </CardGrid>

                </Group>
            </Panel>
        </View>
    </Root>
}
