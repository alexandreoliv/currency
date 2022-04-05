import "../App.css";
import { Dropdown, Button, Menu, message, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const currencies = require("../currencies.json");

function handleMenuClick(e) {
	message.info("Click on menu item.");
	console.log("click", e);
}

const menu = (
	<Menu onClick={handleMenuClick}>
		{currencies.map((c) => (
			<Menu.Item key={c.Code}>{c.Code}</Menu.Item>
		))}
	</Menu>
);

export default function SelectCurrency() {
	return (
		<div className="filter">
			<h1 className="title">Currencies</h1>
			<Space wrap>
				<Dropdown overlay={menu}>
					<Button>
						From <DownOutlined />
					</Button>
				</Dropdown>

				<Dropdown overlay={menu}>
					<Button>
						To <DownOutlined />
					</Button>
				</Dropdown>
			</Space>
		</div>
	);
}
