import React from 'react';
import './item-status-filter.css'
export default class ItemStatusFilter extends React.Component {

    buttons = [
        {name:'all', label:'all'},
        {name:'active', label:'active'},
        {name:'done', label:'done'}
        ];

    render() {

        const filter = this.props.filter;

        const buttons = this.buttons.map(({name,label})=>{
            const isActive = filter===name;
            const clazz = isActive ? 'btn btn-info':'btn btn-outline-secondary';
            return(

                    <button type='button'
                            className={clazz}
                    key={name} onClick={()=> this.props.onFilterChange(label)}>{label}

                    </button>
            )


        });

        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}


