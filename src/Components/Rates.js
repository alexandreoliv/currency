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
	const { currencies, rates, amount } = props;
	console.log("rates: ", rates);
	const data = currencies.map((c) => ({
		key: c.Code,
		currency: c.Code,
		rate: rates[0][c.Code],
		amount: (amount * rates[0][c.Code]).toFixed(2),
	}));

	return (
		<div>
			<h1>Rates</h1>
			<Table columns={columns} dataSource={data} size="middle" />
		</div>
	);
}
