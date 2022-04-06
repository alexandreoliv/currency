import "../App.css";
import { Statistic } from "antd";

export default function Rate(props) {
	if (props.currencies) {
		const { rates, amount, currencyTo, historic } = props;

		return (
			<div>
				{historic ? null : (
					<Statistic
						title={"Total amount in " + currencyTo}
						value={(amount * rates[currencyTo]).toFixed(2)}
					/>
				)}
				<Statistic
					title="Currency Exchange Rate"
					value={rates[currencyTo]}
				/>
			</div>
		);
	} else return <div></div>;
}
