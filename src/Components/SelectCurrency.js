import "../App.css";
import React from "react";
import { Form, InputNumber, Select } from "antd";
const { Option } = Select;

const createMenu = (id, defaultValue, handleExchange, currencies) => {
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
				<Option id={id} value={c} key={c}>
					{c}
				</Option>
			))}
		</Select>
	);
};

export default function SelectCurrency({ handleExchange, currencies }) {
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
				{createMenu("currencyFrom", "EUR", handleExchange, currencies)}
			</Form.Item>
			<Form.Item label="To">
				{createMenu("currencyTo", "USD", handleExchange, currencies)}
			</Form.Item>
		</Form>
	);
}
