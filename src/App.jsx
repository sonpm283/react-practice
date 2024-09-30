import { Component } from 'react'
import './App.css'
import MainNavigation from './components/main-navigation/main-navigation.component'
import DepartmentList from './pages/department-list/department-list.component'
import EmployeeList from './pages/employee-list/employee-list.component'

class App extends Component {
  constructor() {
    super()

    this.state = {
      page: 'employee',
    }
  }

  handleMenuClick = (page) => {
    this.setState({
      page: page,
    })
  }

  render() {
    return (
      <div>
        <MainNavigation page={this.state.page} onMenuClick={this.handleMenuClick} />
        <section className="content">
          {this.state.page === 'employee' && <EmployeeList />}
          {this.state.page === 'department' && <DepartmentList />}
        </section>
      </div>
    )
  }
}

export default App
