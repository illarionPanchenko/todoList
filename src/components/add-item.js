import React from 'react';
import './add-item.css'

export default class AddItem extends React.Component{

    state = {
        label:''
    };

    onLabelChange=(e)=>{
        this.setState({
            label: e.target.value.toLowerCase()
        });

    };
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
};

    render(){
        return(
            <form className='add-item-div'
            onSubmit={this.onSubmit}>
                <input type='text' className='form-control'
                       onChange={this.onLabelChange} placeholder='write some shit'
                    value={this.state.label}/>
            <button className='add-item btn btn-outline-secondary'
                    >Add Item</button>
            </form>
        )
    }
}