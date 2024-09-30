import { Component } from "react";

import "./container.styles.css";

class Container extends Component {
  render() {
    const { children } = this.props;
    return <div className="container">{children}</div>;
  }
}

export default Container;
