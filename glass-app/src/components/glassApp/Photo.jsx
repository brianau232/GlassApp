import React, { Component } from "react";
export default class Photo extends Component {
  render() {
    return (
      <div>
        <div
          className="card text-left"
          style={{ width: 300, position: "relative" }}
        >
          <img
            className="card-img-top"
            src="./img/glassesImage/model.jpg"
            alt="hinh model"
          />
          <img
            src={this.props.glassStyle}
            alt="kinh"
            style={{
              width: 170,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "16%",
            }}
          />
          <div className="card-body">
            <span className="card-title badge-danger h3 px-2 rounded">
              {this.props.price}
            </span>
            <p className="card-text mt-2">{this.props.name}</p>
          </div>
        </div>
      </div>
    );
  }
}
