import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: ''
        }
    }

    filterEmp = (e) => {
        const filter = e.currentTarget.getAttribute('data-rise');
        this.setState = ({filter});
        this.props.onFilter(filter);
    }
    render() {
        return (
            <div className="btn-group">
                <button 
                    className="btn btn-light"
                    type="button"
                    data-rise="all"
                    value={this.state.filter}
                    onClick={this.filterEmp}>
                        Все сотрудники
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    data-rise="rise"
                    value={this.state.filter}
                    onClick={this.filterEmp}>
                        На повышение
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    data-rise="moreThen1000"
                    value={this.state.filter}
                    onClick={this.filterEmp}>
                        З/П больше 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;