import { Component } from 'react'
import './text-box.styles.css'

class TextBox extends Component {
  render() {
    const { placeholder, onChange = null } = this.props
    return <input type="text" className="textbox" placeholder={placeholder} onChange={onChange} />
  }
}

export default TextBox
