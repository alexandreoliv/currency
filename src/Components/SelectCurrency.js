import "../App.css";
import { Form, InputNumber, Select } from "antd";
const { Option } = Select;

const createMenu = (id, defaultValue, handleExchange, currencies) => {
	return (
		<Select
			showSearch
			style={{ width: 200, padding: "0 0 0 5px" }}
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

export default function SelectCurrency(props) {
	const { handleExchange, currencies, currencyFrom, currencyTo, historic } =
		props;
	if (currencies) {
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
				<div id="selectCurrency">
					{historic ? null : (
						<Form.Item>
							<InputNumber
								id="amount"
								min={0}
								defaultValue="1"
								style={{width: "150px", margin: "0 10px 0 0"}}
								required
								onChange={(value, event) =>
									handleExchange(value, event)
								}
							/>
						</Form.Item>
					)}
					<Form.Item label="From">
						{createMenu(
							"currencyFrom",
							currencyFrom,
							handleExchange,
							currencies
						)}
					</Form.Item>
					<Form.Item label="To">
						{createMenu(
							"currencyTo",
							currencyTo,
							handleExchange,
							currencies
						)}
					</Form.Item>
				</div>
			</Form>
		);
	} else return <div></div>;
}
