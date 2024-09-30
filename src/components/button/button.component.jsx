import { Component } from "react";

import "./button.styles.css";

class Button extends Component {
  render() {
    const { children, onClick = null } = this.props;
    return (
      <button type="button" className="btn" onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
