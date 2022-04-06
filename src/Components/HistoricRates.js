import "../App.css";
import { Table } from "antd";

const columns = [
	{
		title: "Date",
		dataIndex: "date",
	},
	{
		title: "Rate",
		dataIndex: "rate",
	},
];

const datesCreator = () => {
	const today = new Date();
	let pastDates = [];
	for (let i = 1; i <= 5; i++) {
		today.setDate(today.getDate() - 1);
		pastDates.push(today.toISOString().substr(0, 10));
	}
	return pastDates;
};

const getRatesOffline = (arr) => {
	return arr.map((d) => {
		return require(`../data/EUR_rates_${d}.json`);
	});
};

export default function Historic(props) {
	if (props.currencies) {
		const { currencyTo } = props;
		const pastDatesArray = datesCreator();
		const pastRatesArray = getRatesOffline(pastDatesArray);

		const data = pastRatesArray.map((r) => ({
			key: r.date,
			date: r.date,
			rate: r.rates[currencyTo],
		}));

		return (
			<div>
				<h1>Past</h1>
				<Table columns={columns} dataSource={data} size="middle" />
			</div>
		);
	} else return <div></div>;
}
