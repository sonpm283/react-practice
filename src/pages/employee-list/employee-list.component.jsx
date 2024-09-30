import { Component } from 'react'
import Container from '../../components/container/container.component'
import Title from '../../components/title/title.component'
import TextBox from '../../components/text-box/text-box.component'
import Button from '../../components/button/button.component'
import DataTable from '../../components/data-table/data-table-component'
import Loading from '../../components/loading/loading.components'

class EmployeeList extends Component {
  constructor() {
    super()

    this.state = {
      list: [],
      loading: true,
      searchValue: '',
    }
  }

  loadData = async (name = '') => {
    const response = await fetch(`http://localhost:3500/employees?name=${name}`)
    const data = await response.json()

    this.setState({
      list: data,
      loading: false,
    })
  }

  handleChange = (event) => {
    const { value } = event.target

    this.setState({
      searchValue: value,
    })
  }

  handleButtonClick = () => {
    this.setState({
      loading: true,
    })
    this.loadData(this.state.searchValue)
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
    return (
      <Container>
        <Title>Danh Sách</Title>

        <div className="search-box">
          <TextBox placeholder="Nhập tên nhân viên" onChange={this.handleChange} />
          <Button onClick={this.handleButtonClick}>Tìm</Button>

          {this.state.loading && <Loading />}
        </div>

        <DataTable>
          <thead>
            <tr>
              <th>Id</th>
              <th width="20%">Tên</th>
              <th width="40%">Địa Chỉ</th>
              <th>Phòng Ban</th>
            </tr>
          </thead>

          <tbody>
            {this.state.list &&
              this.state.list.map((employee) => (
                <tr key={employee?._id}>
                  <td>{employee?._id}</td>
                  <td>{employee?.name}</td>
                  <td>{employee?.address}</td>
                  <td>{employee?.department?.name}</td>
                </tr>
              ))}
          </tbody>
        </DataTable>
      </Container>
    )
  }
}

export default EmployeeList
