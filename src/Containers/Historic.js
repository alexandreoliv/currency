import SelectCurrency from "../Components/SelectCurrency";
import Rate from "../Components/Rate";
import Rates from "../Components/Rates";

export default function Historic(props) {
	const {
		handleExchange,
		currencies,
		rates,
		amount,
		currencyFrom,
		currencyTo,
	} = props;
    const historic = true;

	return (
		<div>
			<SelectCurrency
				handleExchange={handleExchange}
				currencies={currencies}
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
		</div>
	);
}
