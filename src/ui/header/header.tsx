import {Layout, Menu} from "antd";
import {useRouter} from "next/navigation";

export const Header = () => {
    const router = useRouter();

    return <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
            items={[
                {
                    key: 1,
                    label: "auth",
                    onClick: () => router.push("/auth")
                }
            ]}
        />
    </Layout.Header>

}
