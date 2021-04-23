import React, { Component } from "react";
import ButtonGlass from "./ButtonGlass";
import Photo from "./Photo";
export default class GlassApp extends Component {
  state = {
    glassStyle: "./img/glassesImage/v2.png",
    price: "$50",
    name: "GUCCI G8759H",
    btnGlassList: [
      {
        style: "v1",
        imgSrc: "./img/glassesImage/v1.png",
        price: "$30",
        name: "GUCCI G8850U",
      },
      {
        style: "v2",
        imgSrc: "./img/glassesImage/v2.png",
        price: "$50",
        name: "GUCCI G8759H",
      },
      {
        style: "v3",
        imgSrc: "./img/glassesImage/v3.png",
        price: "$30",
        name: "DIOR D6700HQ",
      },
      {
        style: "v4",
        imgSrc: "./img/glassesImage/v4.png",
        price: "$30",
        name: "DIOR D6005U",
      },
      {
        style: "v5",
        imgSrc: "./img/glassesImage/v5.png",
        price: "$30",
        name: "PRADA P8750U",
      },
      {
        style: "v6",
        imgSrc: "./img/glassesImage/v6.png",
        price: "$30",
        name: "PRADA P9700",
      },
      {
        style: "v7",
        imgSrc: "./img/glassesImage/v7.png",
        price: "$30",
        name: "FENDI F8750",
      },
      {
        style: "v8",
        imgSrc: "./img/glassesImage/v8.png",
        price: "$30",
        name: "FENDI F8500U",
      },
      {
        style: "v9",
        imgSrc: "./img/glassesImage/v9.png",
        price: "$30",
        name: "FENDI F4300",
      },
    ],
  };

  renderBtnGlassList = () => {
    return this.state.btnGlassList.map((btnGlass) => {
      return (
        <ButtonGlass
          btnGlass={btnGlass}
          handelChoiceGlass={this.handelChoiceGlass}
        />
      );
    });
  };
  handelChoiceGlass = (style) => {
    switch (style) {
      case "v1": {
        this.setState({
          glassStyle: "./img/glassesImage/v1.png",
          price: "$30",
          name: "GUCCI G8850U",
        });
        break;
      }
      case "v2": {
        this.setState({
          glassStyle: "./img/glassesImage/v2.png",
          price: "$50",
          name: "GUCCI G8759H",
        });
        break;
      }
      case "v3": {
        this.setState({
          glassStyle: "./img/glassesImage/v3.png",
          price: "$30",
          name: "DIOR D6700HQ",
        });
        break;
      }
      case "v4": {
        this.setState({
          glassStyle: "./img/glassesImage/v4.png",
          price: "$30",
          name: "DIOR D6005U",
        });
        break;
      }
      case "v5": {
        this.setState({
          glassStyle: "./img/glassesImage/v5.png",
          price: "$30",
          name: "PRADA P8750U",
        });
        break;
      }
      case "v6": {
        this.setState({
          glassStyle: "./img/glassesImage/v6.png",
          price: "$30",
          name: "PRADA P9700",
        });
        break;
      }
      case "v7": {
        this.setState({
          glassStyle: "./img/glassesImage/v7.png",
          price: "$30",
          name: "FENDI F8750",
        });
        break;
      }
      case "v8": {
        this.setState({
          glassStyle: "./img/glassesImage/v8.png",
          price: "$30",
          name: "FENDI F8500U",
        });
        break;
      }
      case "v9": {
        this.setState({
          glassStyle: "./img/glassesImage/v9.png",
          price: "$30",
          name: "FENDI F4300",
        });
        break;
      }
    }
  };

  render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center">
            <div className="container row">
              <div className="col-5">
                <Photo
                  glassStyle={this.state.glassStyle}
                  price={this.state.price}
                  name={this.state.name}
                />
              </div>
              <div className="col-7">
                <div className="container">
                  <div className="chose__glass display-inline-block row overflow-hidden">
                    {this.renderBtnGlassList()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
