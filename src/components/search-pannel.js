import React from "react";
import ItemStatusFilter from "./item-status-filter";
import './search-panel.css'
import App from "./app";

export default class SearchPanel extends React.Component  {

    state={
      term:''
    };


   onSearch=(e)=> {
       const term = e.target.value.toLowerCase();
       this.setState({term});
       this.props.onSearch(term);
        };

render() {
    return (
        <div className='d-flex div-1'>
            <input className='search' placeholder='type to search'
                   value={this.state.term}
            onChange={this.onSearch}/>

        </div>)
}};

