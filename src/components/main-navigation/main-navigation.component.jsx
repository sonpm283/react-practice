import { Component } from 'react'
import './main-navigation.styles.css'

class MainNavigation extends Component {
  render() {
    const { page, onMenuClick } = this.props

    return (
      <section className="main-nav">
        <header>
          <img src="/images/logo.png" />
          <h2>Quản Trị Nhân Sự</h2>
        </header>
        <ul className="menu-list">
          <li>
            <a
              className={page === 'employee' ? 'menu-list__highlighted' : ''}
              href="#"
              onClick={() => onMenuClick('employee')}
            >
              Nhân Viên
            </a>
          </li>
          <li>
            <a
              className={page === 'department' ? 'menu-list__highlighted' : ''}
              href="#"
              onClick={() => onMenuClick('department')}
            >
              Phòng Ban
            </a>
          </li>
        </ul>
      </section>
    )
  }
}

export default MainNavigation
