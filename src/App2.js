import React from "react";
import BigBox from "./components/BigBox";
import SmallBox from "./components/SmallBox";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  render() {
    return (
      <div className="card col-5 bg-light mx-auto my-4">
        <div className="h1 text-center">Play Petits Cheveux</div>
        <div className="d-flex flex-wrap p-5">
          <div className="row">
            <div className="col m-0 p-0">
              <BigBox color="yellow">
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
              </BigBox>
            </div>
            <div className="col m-0 p-0">
              <SmallBox></SmallBox>
              <SmallBox></SmallBox>
              <SmallBox></SmallBox>
              <SmallBox></SmallBox>
              <SmallBox></SmallBox>
            </div>
            <div className="col m-0 p-0">
              <SmallBox></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox color="green"></SmallBox>
            </div>
            <div className="col m-0 p-0">
              <SmallBox></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox></SmallBox>
              <SmallBox></SmallBox>
              <SmallBox></SmallBox>
            </div>
            <div className="col m-0 p-0">
              <BigBox color="green">
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
              </BigBox>
            </div>
          </div>
          <div className="row">
            <BigBox color="blue">
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
            </BigBox>
            <BigBox color="red">
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
            </BigBox>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
