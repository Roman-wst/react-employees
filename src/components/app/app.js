import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: '800', increase: false, like: true, id: 1},
        {name: 'Alex A.', salary: '2000', increase: true, like: false, id: 2},
        {name: 'Sam S.', salary: '4000', increase: false, like: false, id: 3},
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];
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
        like: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
  }

  onToggleIncrease = (id) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id);

    //   const old = data[index];
    //   const newItem = {...old, increase: !old.increase};
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //   return {
    //     data: newArr
    //   }
    // })
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        } 
        return item;
      })
    }))
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

  render() {
    const countEmpoyees = this.state.data.length;
    const countEmpoyeesIncreased = this.state.data.filter(item => item.increase).length;
    const countEmpoyeesLiked = this.state.data.filter(item => item.like).length;

    return (
      <div className="app">
        <AppInfo 
          countEmpoyees={countEmpoyees}
          countEmpoyeesIncreased={countEmpoyeesIncreased}
          countEmpoyeesLiked={countEmpoyeesLiked}
        />

        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
   )
  }
}

export default App;
