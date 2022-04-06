import "../App.css";
import { Table } from "antd";

const columns = [
	{
		title: "Currency",
		dataIndex: "currency",
	},
	{
		title: "Rate",
		dataIndex: "rate",
	},
	{
		title: "Amount",
		dataIndex: "amount",
	},
];

export default function Rates(props) {
	if (props.currencies) {
		const { currencies, rates, amount } = props;
		console.log("rates: ", rates);
		const data = currencies.map((c) => ({
			key: c,
			currency: c,
			rate: rates[c],
			amount: (amount * rates[c]).toFixed(2),
		}));

		return (
			<div>
				<h1>Other Currencies</h1>
				<Table columns={columns} dataSource={data} size="middle" />
			</div>
		);
	} else return <div></div>;
}
