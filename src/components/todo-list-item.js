import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    render(){
        const { label, onDeleted, done, important} = this.props;
        let classNames = 'todo-list-item';
        if(done){
            classNames += ' done';
        }
        if(important){
            classNames+=' important'
        }

        return(
            <div className='flex-div'>
                <div className='div-children1'>
                    <span className={classNames} onClick={this.props.onToggleDone}>{ label }</span></div>
                <div className='div-children2'>
                    <button type='button'
                            className='btn btn1 btn-outline-success'
                    onClick={this.props.onToggleImportant}>
                        <i className='fa fa-exclamation'/></button>
                    <button type='button'
                            className='btn btn1 btn-outline-danger'
                    onClick={onDeleted}>
                        <i className='fa fa-trash-o'/>
                    </button>
                </div>
            </div>
        )

    }
}

