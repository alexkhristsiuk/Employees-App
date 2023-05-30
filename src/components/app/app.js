import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'John C.', salary: 800, increase: false, rise: false, id: 1},
				{name: 'Alex K.', salary: 2500, increase: false, rise: false, id: 2},
				{name: 'Felix S.', salary: 4000, increase: false, rise: false, id: 3}
			],
			term: '',
			filter: ''
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem]
			return {
				data: newArr
			}
		});
	}

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))
	}
	
	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => {
			return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
		})
	}

	onUpdateSearch = (term) => {
		this.setState({term: term})
	}

	filterEmp = (data, filter) => {	
		switch (filter) {
			case 'rise':
				return data.filter(item => item.rise); 
			case 'moreThen1000':
				return data.filter(item => item.salary > 1000)
			default:	
			return data;
		} 
	}

	onFilter = (filter) => {
		this.setState({filter})
	}

	render() {
		const {data, term, filter} = this.state;
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

		return (
			<div className="app">
				<AppInfo employees={employees} 
				increased={increased}/>
		
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter onFilter={this.onFilter}/>
				</div>
		
				<EmployeesList 
				data={visibleData}
				onDelete={this.deleteItem}
				onToggleProp={this.onToggleProp}/>
				<EmployeesAddForm onPersonAdd={this.addItem}/>
			</div>
		);
	}
}

export default App;