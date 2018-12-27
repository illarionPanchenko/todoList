import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './app-header';
import SearchPanel from './search-pannel';
import TodoList from './todo-list';
import AddItem from './add-item';
import './index.css';
import ItemStatusFilter from "./item-status-filter";


export default class App extends React.Component {
    maxId=100;
    state={
        todoData: [
            this.createTodoItem('drink coffee'),
            this.createTodoItem('eat breakfast'),
            this.createTodoItem('go in to the sunset'),
        ],
        term:'',
        filter:'all'
    };

    onSearchChange = (term) => {
        this.setState({term})
};

    createTodoItem(label){
        return {
            label,
            important:false,
            done:false,
            id: this.maxId++
        };
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    };

    onToggleImportant=(id)=>{
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id===id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, important:!oldItem.important};
            const before = todoData.slice(0,idx);
            const after = todoData.slice(idx+1);
            const newArray=[...before, newItem, ...after];
            return{
                todoData: newArray
            }
        })
    };
    onToggleDone=(id)=>{
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id===id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done:!oldItem.done};
            const before = todoData.slice(0,idx);
            const after = todoData.slice(idx+1);
            const newArray = [...before, newItem, ...after];
            return {
                todoData: newArray
            };
        });
    };

    onItemAdded=(text)=>{
        const newItem = this.createTodoItem(text);
        this.setState(({todoData})=>{
           const newArray=[
               ...todoData, newItem
           ];
           return{
               todoData : newArray
           }
        });
    };


    deleteItem=(id)=>{
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id===id);
            const before = todoData.slice(0,idx);
            const after = todoData.slice(idx+1);
            const newData = [...before, ...after];
            return{
                todoData: newData
        }
        });

    };
    search(items,term){
        if (term.length===0){
            return items;
        }
       return items.filter((item)=>{
        return item.label.indexOf(term)> -1;
    })
};
    filter(items, filter){
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item)=>!item.done);
            case 'done':
                return items.filter((item)=>item.done);
            default: return items;
        }
    };

    render(){
        const doneCounter=this.state.todoData.filter((el)=>el.done).length;
        const todoCounter=this.state.todoData.length-doneCounter;
        const visibleItems=this.filter(this.search(this.state.todoData,this.state.term,), this.state.filter);
    return(
        <div className='boss'>
            <div className='index-div'>
                <AppHeader done={doneCounter} undone={todoCounter}/>
                <div className='flex-div'>
                <SearchPanel onSearch={this.onSearchChange}/>
                    <ItemStatusFilter filter={this.state.filter}
                    onFilterChange={this.onFilterChange}/></div>
                <TodoList
                    todos={visibleItems} onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItem onItemAdded={this.onItemAdded}/>
            </div>
        </div>
    )
};}
ReactDOM.render(<App />, document.getElementById('root'));



