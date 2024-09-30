import { Component } from 'react'
import './title.styles.css'

class Title extends Component {
  render() {
    const { children } = this.props
    return <h2 className="title">{children}</h2>
  }
}

export default Title
