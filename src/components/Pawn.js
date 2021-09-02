import React from "react";
class Pawn extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        id={this.props.id}
        style={{
          zIndex: `${this.props.zIndex}`,
          width: "25px",
          height: "25px",
          position: "absolute",
          left: `${this.props.dx}px`,
          bottom: `${this.props.dy}px`,
          border: "2px solid black",
          borderRadius: "50%",
          backgroundColor: `${this.props.color}`,
        }}
      ></div>
    );
  }
}
export default Pawn;
