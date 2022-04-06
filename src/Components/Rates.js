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

export default function Rates(currencies) {
	const data = currencies.currencies.map((c) => ({
		key: c.Code,
		currency: c.Code,
		rate: "1.2",
		amount: "10",
	}));

	return (
		<div>
			<h1>Rates</h1>
			<Table columns={columns} dataSource={data} size="middle" />
		</div>
	);
}
