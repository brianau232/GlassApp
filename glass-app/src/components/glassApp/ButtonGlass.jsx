import React, { Component } from "react";

export default class ButtonGlass extends Component {
  render() {
    return (
      <div className="col">
        <button
          className="btn btn-outline-secondary mb-5 mt-5"
          onClick={() =>
            this.props.handelChoiceGlass(this.props.btnGlass.style)
          }
        >
          <img
            src={this.props.btnGlass.imgSrc}
            alt="hinh"
            style={{ width: 100, borderRadius: 20, display: "block" }}
          />
        </button>
      </div>
    );
  }
}
