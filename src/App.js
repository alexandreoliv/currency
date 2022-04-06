import "./App.css";
import { Layout, Menu } from "antd";
import SelectCurrency from "./Components/SelectCurrency";
import Rate from "./Components/Rate";
import Rates from "./Components/Rates";
import { Component } from "react";
const { Header, Content, Footer } = Layout;
const axios = require("axios");
// // const currencies = require("./currencies.json");
// const rates = require("./EUR_rates.json");
// const currencies = Object.keys(rates);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// rates: rates,
			// currencies: currencies,
			rates: "",
			currencies: "",
			amount: 1,
			currencyFrom: "EUR",
			currencyTo: "USD",
		};
	}

	handleExchange = (val, e) => {
		if (typeof e === "undefined") {
			// it's a number
			console.log("inside App.js/handleExchange: amount: " + val);
			if (typeof val === "number") {
				this.setState({
					amount: val,
				});
			}
		} else {
			// it's a currency
			const { id, value } = e;
			console.log(
				"inside App.js/handleExchange: id and value: " +
					id +
					", " +
					value
			);

			if (id === "currencyFrom") {
				this.setState({
					currencyFrom: value,
				});
			} else if (id === "currencyTo") {
				this.setState({
					currencyTo: value,
				});
			}
		}
	};

	componentDidMount() {
		// axios
		// 	.get(
		// 		`http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_SECRET_KEY}`
		// 	)
		// 	.then((response) => {
		// 		console.log("inside componentDidMount: ", response.data.rates);
		// 		this.setState({ rates: response.data.rates });
		// 		const currencies = Object.keys(this.state.rates);
		// 		this.setState({ currencies: currencies });
		// 	})
		// 	.catch((err) => console.log(err));

		// Local method
		const rates = require("./EUR_rates.json");
		this.setState({ rates: rates });
		const currencies = Object.keys(rates);
		this.setState({ currencies: currencies });
	}

	render() {
		return (
			<Layout>
				<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
					<div className="logo" />
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={["1"]}
					>
						<Menu.Item key="1">Currency Converter</Menu.Item>
						<Menu.Item key="2">Historic Rates</Menu.Item>
					</Menu>
				</Header>
				<Content
					className="site-layout"
					style={{ padding: "0 50px", marginTop: 64 }}
				>
					<div
						className="site-layout-background"
						style={{ padding: 24, minHeight: 380 }}
					>
						<SelectCurrency
							handleExchange={this.handleExchange}
							currencies={this.state.currencies}
						/>
						<Rate
							currencies={this.state.currencies}
							rates={this.state.rates}
							amount={this.state.amount}
							currencyFrom={this.state.currencyFrom}
							currencyTo={this.state.currencyTo}
						/>
						<Rates
							currencies={this.state.currencies}
							rates={this.state.rates}
							amount={this.state.amount}
							currencyFrom={this.state.currencyFrom}
							currencyTo={this.state.currencyTo}
						/>
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}></Footer>
			</Layout>
		);
	}
}

export default App;
