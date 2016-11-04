import React from "react";

// Components
import Ads from "./Ads";
import Nav from "./Nav";
import Account from "./Account";
import Profiles from "./Profiles";
import Security from "./Security";
import Services from "./Services";
import AccessTokens from "./Tokens";

export default class UserDashboard extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		let view;

		switch(this.props.hash[3]) {
			case "security":
				view = <Security />; break;
			case "profiles":
				view = <Profiles />; break;
			case "services":
				view = <Services />; break;
			case "tokens":
				view = <AccessTokens />; break;
			case "ads":
				view = <Ads />; break;
			default:
				view = <Account />;
		}
		
		return (
			<div className="dashboard-user">
				<Nav active={this.props.hash[3] || "account"} />
				
				{view}
			</div>
		);
	}
	
}