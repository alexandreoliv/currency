import "../App.css";
import { Input, Select, message } from "antd";
const { Option } = Select;
const currencies = require("../currencies.json");

function handleMenuClick(e) {
	message.info("Selected currency: " + e.target.innerHTML);
	console.log("click", e.target.innerHTML);
}

const createMenu = (value) => {
	return (
		<Select
			onClick={handleMenuClick}
			showSearch
			style={{ width: 200 }}
			defaultValue={value}
			optionFilterProp="children"
			filterOption={(input, option) =>
				option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
			}
			filterSort={(optionA, optionB) =>
				optionA.children
					.toLowerCase()
					.localeCompare(optionB.children.toLowerCase())
			}
		>
			{currencies.map((c) => (
				<Option value={c.Code} key={c.Code}>
					{c.Code}
				</Option>
			))}
		</Select>
	);
};

export default function SelectCurrency() {
	return (
		<div className="site-input-group-wrapper">
			<Input.Group compact>
				<Input.Search
					allowClear
					style={{ width: "40%" }}
					defaultValue="1"
				/>
				{createMenu("EUR")}
				{createMenu("USD")}
			</Input.Group>
		</div>
	);
}
