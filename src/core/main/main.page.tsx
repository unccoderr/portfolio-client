import {Panel, PanelHeader, Root, View} from "@vkontakte/vkui";

export const MainPage = () => <Root activeView={"main"}>
    <View activePanel={"main"} id={"main"}>
        <Panel id={"main"}>
            <PanelHeader>
                Index Page
            </PanelHeader>
        </Panel>
    </View>
</Root>
