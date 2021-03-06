import SelectCurrency from "../Components/SelectCurrency";
import Rate from "../Components/Rate";
import Rates from "../Components/Rates";

export default function Converter(props) {
	const {
		handleExchange,
		currencies,
		rates,
		amount,
		currencyFrom,
		currencyTo,
	} = props;
	const historic = false;

	return (
		<div>
			<SelectCurrency
				handleExchange={handleExchange}
				currencies={currencies}
				currencyFrom={currencyFrom}
				currencyTo={currencyTo}
				historic={historic}
			/>
			<Rate
				currencies={currencies}
				rates={rates}
				amount={amount}
				currencyFrom={currencyFrom}
				currencyTo={currencyTo}
				historic={historic}
			/>
			<Rates
				currencies={currencies}
				rates={rates}
				amount={amount}
				currencyFrom={currencyFrom}
				currencyTo={currencyTo}
			/>
		</div>
	);
}
