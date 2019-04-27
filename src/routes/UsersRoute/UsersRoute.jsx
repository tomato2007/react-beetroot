import React from 'react';
import Toolbar from 'components/Toolbar';
import Table from 'components/Table';
import TableHead from 'components/TableHead';
import TableHeadCell from 'components/TableHeadCell';
import TableRow from 'components/TableRow';
import TableBodyCell from 'components/TableBodyCell';

class UsersRoute extends React.PureComponent {
	state = {
		data: [{
			id: 1,
			name: 'Name1',
			surname: 'Surname1',
			email: 'email1@mail.com',
			phone: '+30000000000',
			city: 'City1'
		}, {
			id: 2,
			name: 'Name2',
			surname: 'Surname2',
			email: 'email2@mail.com',
			phone: '+30000000000',
			city: 'City2'
		}, {
			id: 3,
			name: 'Name2',
			surname: 'Surname2',
			email: 'email2@mail.com',
			phone: '+30000000000',
			city: 'City2'
		}, {
			id: 4,
			name: 'Name2',
			surname: 'Surname2',
			email: 'email2@mail.com',
			phone: '+30000000000',
			city: 'City2'
		}, {
			id: 5,
			name: 'Name3',
			surname: 'Surname3',
			email: 'email3@mail.com',
			phone: '+30000000000',
			city: 'City3'
		}, {
			id: 6,
			name: 'Name4',
			surname: 'Surname4',
			email: 'email4@mail.com',
			phone: '+30000000000',
			city: 'City4'
		}]
	}

	render = () => {
		const { data } = this.state;
		return <>
			<Toolbar title="Users">
				<button>Создать пользователя</button>
				<button>Выделить всех</button>
				<button>Удалить выделенных</button>
			</Toolbar>

			<Table>
				<TableHead>
				{[
					'ID',
					'Name',
					'Surname',
					'Email',
					'Phone',
					'City'
				].map((item, i) => (
					<TableHeadCell key={i}>
						{item === 'ID' ? 
							<input type="checkbox" /> :
							<b>{item}</b>}
					</TableHeadCell>
				))}
				</TableHead>
				<tbody>
					{data.map((item, i) => (
						<TableRow key={i}>
						{(() => {
							let row = [];
							let key;
							let ii = 0;
							for (key in item) {
								row.push(
									<TableBodyCell key={ii}>
										{item[key]}
									</TableBodyCell>);
								ii++;
							}
							return row;
						})()}
						</TableRow>
					))}
				</tbody>
			</Table>
		</>
	}
}

export default UsersRoute;