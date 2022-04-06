import "../App.css";
import React from "react";
import { Form, InputNumber, Select } from "antd";
const { Option } = Select;
const currencies = require("../currencies.json");

const createMenu = (id, defaultValue, handleExchange) => {
	return (
		<Select
			showSearch
			style={{ width: 200 }}
			required
			id={id}
			defaultValue={defaultValue}
			onSelect={(value, event) => handleExchange(value, event)}
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
				<Option id={id} value={c.Code} key={c.Code}>
					{c.Code}
				</Option>
			))}
		</Select>
	);
};

export default function SelectCurrency({ handleExchange }) {
	return (
		<Form
			labelCol={{
				span: 4,
			}}
			wrapperCol={{
				span: 14,
			}}
			layout="horizontal"
		>
			<Form.Item label="Amount">
				<InputNumber
					id="amount"
					min={0}
					defaultValue="1"
					required
					onChange={(value, event) => handleExchange(value, event)}
				/>
			</Form.Item>
			<Form.Item label="From">
				{createMenu("currencyFrom", "EUR", handleExchange)}
			</Form.Item>
			<Form.Item label="To">
				{createMenu("currencyTo", "USD", handleExchange)}
			</Form.Item>
		</Form>
	);
}
