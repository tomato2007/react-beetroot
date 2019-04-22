import React from 'react';

class TableUsers extends React.Component {
	constructor(props) {
		super(props);

		(async () => {
			const resp = await fetch('/users');
			const data = await resp.json();

			this.state = {
				users: data
			};
		})();
	}

	handleClick = () => {
		this.setState({
			user: this.state.users.reverse()
		})
	}

	render = () => {
		const { users = [] } = this.state;

		return <>
			<button onClick={this.handleClick}>Revers</button>
			{users.map((item, i) => (
				<h1 key={i}>{item.name}</h1>
			))}
		</>
	}
}

export default TableUsers;