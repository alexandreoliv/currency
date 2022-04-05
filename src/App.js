import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import SelectCurrency from "./Components/SelectCurrency";
import Rates from "./Components/Rates";
import { Component } from "react";
const { Header, Content, Footer } = Layout;
const axios = require("axios");

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { rates: "" };
	}

	// componentDidMount() {
	// 	axios
	// 		.get(
	// 			`http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_SECRET_KEY}`
	// 		)
	// 		.then((response) => {
	// 			console.log(response.data.rates);
	// 			this.setState({ rates: response.data.rates });
	// 		})
	// 		.catch((err) => console.log(err));
	// }

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
						<Menu.Item key="1">nav 1</Menu.Item>
						<Menu.Item key="2">nav 2</Menu.Item>
					</Menu>
				</Header>
				<Content
					className="site-layout"
					style={{ padding: "0 50px", marginTop: 64 }}
				>
					<Breadcrumb style={{ margin: "16px 0" }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<div
						className="site-layout-background"
						style={{ padding: 24, minHeight: 380 }}
					>
						<SelectCurrency />
						<Rates />
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		);
	}
}

export default App;
