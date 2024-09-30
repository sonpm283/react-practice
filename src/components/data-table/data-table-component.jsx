import { Component } from 'react'
import './data-table.styles.css'

class DataTable extends Component {
  render() {
    const { children } = this.props
    return <table className="data-table">{children}</table>
  }
}

export default DataTable
