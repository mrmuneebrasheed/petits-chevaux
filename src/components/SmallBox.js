import React from "react";
class SmallBox extends React.Component {
  render() {
    return (
      <div
        style={{
          gridRow: `${this.props.row}`,
          gridColumn: `${this.props.column}`,
          width: "50px",
          height: "50px",
          backgroundColor: `${this.props.color}`,
          padding: "10px",
          border: "1px solid black",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
export default SmallBox;
