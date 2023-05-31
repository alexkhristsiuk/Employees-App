import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            salary: this.props.salary + '$'
        }
    }

    onValueChange = (e) => {
        this.setState({
            salary: e.target.value
        })
        this.props.onChangeSalary(e.target.value, this.props.name)
    }

    render() {
        const {name, onDelete, onToggleProp, increase, rise} = this.props;
        let classNames = "list-group-item d-flex justify-content-between"
        if (increase) {
            classNames += ' increase';
        }
        if (rise) {
            classNames += ' like';
        }
    
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
                <input type="text" className="list-group-item-input" 
                    onChange={this.onValueChange}
                    value={this.state.salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp} 
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;