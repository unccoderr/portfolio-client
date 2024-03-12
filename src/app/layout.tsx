"use client"

import {ReactNode} from "react";

import {AdaptivityProvider, Appearance, AppearanceProvider, AppRoot, ConfigProvider} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
const RootLayout = ({ children }: Readonly<{ children: ReactNode; }>) => {
    return <html lang="en">
        <body>
            <AppRoot layout={"card"}>
                <ConfigProvider platform={"ios"}>
                    <AdaptivityProvider >
                        <AppearanceProvider value={Appearance.LIGHT}>
                            {children}
                        </AppearanceProvider>
                    </AdaptivityProvider>
                </ConfigProvider>
            </AppRoot>
        </body>
    </html>
}

export default RootLayout;
