import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { Dropdown, Button, message, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

function handleMenuClick(e) {
	message.info("Click on menu item.");
	console.log("click", e);
}

const menu = (
	<Menu onClick={handleMenuClick}>
		<Menu.Item key="1" icon={<UserOutlined />}>
			1st menu item
		</Menu.Item>
		<Menu.Item key="2" icon={<UserOutlined />}>
			2nd menu item
		</Menu.Item>
	</Menu>
);

function App() {
	return (
		<Layout>
			<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["2"]}
				>
					<Menu.Item key="1">nav 1</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
				</Menu>
			</Header>
			<Content
				className="site-layout"
				style={{ padding: "0 50px", marginTop: 64 }}
			>
				<Breadcrumb style={{ margin: "16px 0" }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<div
					className="site-layout-background"
					style={{ padding: 24, minHeight: 380 }}
				>
					<Space wrap>
						<Dropdown overlay={menu}>
							<Button>
								Button <DownOutlined />
							</Button>
						</Dropdown>
					</Space>
				</div>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Ant Design ©2018 Created by Ant UED
			</Footer>
		</Layout>
	);
}

export default App;
