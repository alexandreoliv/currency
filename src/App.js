import "./App.css";
import { Layout, Menu } from "antd";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Converter from "./Containers/Converter";
import Historic from "./Containers/Historic";
const { Header, Content, Footer } = Layout;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
			if (typeof val === "number") {
				this.setState({
					amount: val,
				});
			}
		} else {
			// it's a currency
			const { id, value } = e;
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
		// API method:
		const API_KEY = process.env.REACT_APP_SECRET_KEY;
		const axios = require("axios");
		axios
			.get(
				`http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`
			)
			.then((response) => {
				console.log("inside componentDidMount: ", response.data.rates);
				this.setState({ rates: response.data.rates });
				const currencies = Object.keys(this.state.rates);
				this.setState({ currencies: currencies });
			})
			.catch((err) => console.log(err));

		// Local method: (if the API's free requests are over)
		// const rates = require("./data/EUR_rates.json");
		// this.setState({ rates: rates });
		// const currencies = Object.keys(rates);
		// this.setState({ currencies: currencies });
	}

	render() {
		return (
			<Router>
				<Layout>
					<Header
						style={{ position: "fixed", zIndex: 1, width: "100%" }}
					>
						<div className="logo" />
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={["1"]}
						>
							<Menu.Item key="1">
								<Link to="/" />
								Currency Converter
							</Menu.Item>

							<Menu.Item key="2">
								<Link to="historic" />
								Historic Rates
							</Menu.Item>
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
							<Routes>
								<Route
									path="/"
									element={
										<Converter
											handleExchange={this.handleExchange}
											currencies={this.state.currencies}
											rates={this.state.rates}
											amount={this.state.amount}
											currencyFrom={
												this.state.currencyFrom
											}
											currencyTo={this.state.currencyTo}
										/>
									}
								/>
								<Route
									path="historic"
									element={
										<Historic
											handleExchange={this.handleExchange}
											currencies={this.state.currencies}
											rates={this.state.rates}
											amount={this.state.amount}
											currencyFrom={
												this.state.currencyFrom
											}
											currencyTo={this.state.currencyTo}
										/>
									}
								/>
							</Routes>
						</div>
					</Content>
					<Footer style={{ textAlign: "center" }}></Footer>
				</Layout>
			</Router>
		);
	}
}

export default App;
