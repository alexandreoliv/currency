import "../App.css";

export default function Rate(props) {
	const { currencies, rates, amount, currencyFrom, currencyTo } = props;
	return (
		<div>
			<div>
				<h4>Total amount in {currencyTo}</h4>
				<h3>{(amount * rates[0][currencyTo]).toFixed(2)}</h3>
			</div>
			<div>
				<h4>Currency Exchange Rate</h4>
				<h3>{rates[0][currencyTo]}</h3>
			</div>
		</div>
	);
}