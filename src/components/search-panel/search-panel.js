import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term: term});
        this.props.onUpdateSearch(term)//пробрасываем на вверх
    }

    render() {
        return (
            <input 
                type="text" 
                className="form-control search-input" //class from bootstrap
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        );
    }
}

export default SearchPanel;