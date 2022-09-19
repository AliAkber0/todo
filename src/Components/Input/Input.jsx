import React from "react";

class Input extends React.PureComponent {
  render() {
    return (
      <input
        className={this.props.className}
        placeholder={this.props.placeholder}
        type={this.props.type}
        value={this.props.value}
        onChange={this.props.onChange}
        onKeyDown={this.props.onKeyDown}
      />
    );
  }
}

export default Input;
