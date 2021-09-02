import React from "react";
import BigBox from "./components/BigBox";
import SmallBox from "./components/SmallBox";
import Pawn from "./components/Pawn";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dice: 0,
      player1: [
        {
          id: "y1",
          dx: "",
          dy: "",
          color: "yellow",
          row: 0,
          col: 0,
          inHouse: true,
        },
        {
          id: "y2",
          dx: "",
          dy: "",
          color: "yellow",
          row: 0,
          col: 0,
          inHouse: true,
        },
        {
          id: "y3",
          dx: "",
          dy: "",
          color: "yellow",
          row: 0,
          col: 0,
          inHouse: true,
        },
        {
          id: "y4",
          dx: "",
          dy: "",
          color: "yellow",
          row: 0,
          col: 0,
          inHouse: true,
        },
      ],
      player2: [
        {
          id: "g1",
          dx: "",
          dy: "",
          color: "green",
          row: 0,
          col: 0,
          inHouse: true,
        },
        {
          id: "g2",
          dx: "",
          dy: "",
          color: "green",
          row: 0,
          col: 0,
          inHouse: true,
        },
        {
          id: "g3",
          dx: "",
          dy: "",
          color: "green",
          row: 0,
          col: 0,
          inHouse: true,
        },
        {
          id: "g4",
          dx: "",
          dy: "",
          color: "green",
          row: 0,
          col: 0,
          inHouse: true,
        },
      ],
      player3: [
        {
          id: "b1",
          dx: "",
          dy: "",
          color: "blue",
          row: 1,
          col: 1,
          inHouse: true,
        },
        {
          id: "b2",
          dx: "",
          dy: "",
          color: "blue",
          row: 1,
          col: 1,
          inHouse: true,
        },
        {
          id: "b3",
          dx: "",
          dy: "",
          color: "blue",
          row: 1,
          col: 1,
          inHouse: true,
        },
        {
          id: "b4",
          dx: "",
          dy: "",
          color: "blue",
          row: 1,
          col: 1,
          inHouse: true,
        },
      ],
      player4: [
        {
          id: "r1",
          dx: "",
          dy: "",
          color: "red",
          row: 1,
          col: 1,
          inHouse: true,
        },
        {
          id: "r2",
          dx: "",
          dy: "",
          color: "red",
          row: 1,
          col: 1,
          inHouse: true,
        },
        {
          id: "r3",
          dx: "",
          dy: "",
          color: "red",
          row: 1,
          col: 1,
          inHouse: true,
        },
        {
          id: "r4",
          dx: "",
          dy: "",
          color: "red",
          row: 1,
          col: 1,
          inHouse: true,
        },
      ],
    };
  }
  identifyPawn(e) {
    const players = [
      this.state.player1,
      this.state.player2,
      this.state.player3,
      this.state.player4,
    ];

    players.map((player) =>
      player.map((pawn) => {
        if (
          this.state.dice === 6 &&
          pawn.color === "yellow" &&
          pawn.id === e.target.id &&
          pawn.inHouse === true
        ) {
          pawn.inHouse = false;
          pawn.dx = 447;
          pawn.dy = 225;
          this.setState({ dice: 0 });
        }
        for (let i = 1; i <= this.state.dice; i++) {
          if (
            pawn.color === "yellow" &&
            pawn.inHouse === false &&
            pawn.id === e.target.id &&
            pawn.dx > 647
          ) {
            pawn.dy = pawn.dy + 50;
          }
          if (
            pawn.color === "yellow" &&
            pawn.inHouse === false &&
            pawn.id === e.target.id &&
            pawn.dx === 647
          ) {
            pawn.dx = pawn.dx + 50;
            pawn.dy = pawn.dy + 50;
          }
          if (
            pawn.color === "yellow" &&
            pawn.inHouse === false &&
            pawn.id === e.target.id &&
            pawn.dx <= 597
          )
            pawn.dx = pawn.dx + 50;

          if (
            pawn.color === "green" &&
            pawn.inHouse === false &&
            pawn.id === e.target.id &&
            pawn.dy > 447
          )
            pawn.dy = pawn.dy - 50;
          if (
            pawn.color === "green" &&
            pawn.id === e.target.id &&
            pawn.inHouse === true
          ) {
            pawn.inHouse = false;
            pawn.dx = 797;
            pawn.dy = 477;
          }
        }
      })
    );
    this.setState({
      player1: players[0],
      player2: players[1],
      player3: players[2],
      player4: players[3],
    });
  }
  movePawn(color, id, inHouse, dx, dy) {}
  rollDice() {
    const number = parseInt(Math.random() * 6 + 1);
    this.setState({ dice: number });
  }
  render() {
    const player1 = this.state.player1;
    const player2 = this.state.player2;
    const player3 = this.state.player3;
    const player4 = this.state.player4;
    return (
      <>
        <div
          style={{ width: "750px", height: "40vh" }}
          className="bg-light mx-auto my-5"
        >
          <div
            style={{ gridRow: "1" }}
            className="h1 bg-danger text-center p-4 text-white"
          >
            Play Petits Chevaux
          </div>
          <div
            style={{
              height: "40vh",
              display: "grid",
              gridTemplateRows: "3",
              gridTemplateColumns: "3",
              backgroundColor: "whitesmoke",
              margin: "20px auto",
            }}
          >
            {/* Yellow Box */}
            <BigBox row={1} column={1} color={this.state.player1[0].color}>
              <SmallBox row={1} column={1} color="white">
                {player1[0].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player1[0].id}
                    color={player1[0].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox row={1} column={2} color="white">
                {" "}
                {player1[1].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player1[1].id}
                    color={player1[1].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox row={2} column={1} color="white">
                {player1[2].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player1[2].id}
                    color={player1[2].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox row={2} column={2} color="white">
                {player1[3].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player1[3].id}
                    color={player1[3].color}
                  ></Pawn>
                )}
              </SmallBox>
            </BigBox>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "150px",
                height: "150px",
                gridRow: "2",
                gridColumn: "2",
              }}
              color="grey"
            >
              <SmallBox color="black"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox color="black"></SmallBox>
              <SmallBox color="yellow"></SmallBox>
              <SmallBox color="black"></SmallBox>
              <SmallBox color="red"></SmallBox>
              <SmallBox color="black"></SmallBox>
              <SmallBox color="blue"></SmallBox>
              <SmallBox color="black"></SmallBox>
            </div>
            <div
              style={{
                margin: "0",
                gridRow: "1",
                gridColumn: "2",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {/* Green Area */}
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox color="green">
                {!player2[0].inHouse && (
                  <Pawn
                    dx={player2[0].dx}
                    dy={player2[0].dy}
                    onClick={this.identifyPawn.bind(this)}
                    id={player2[0].id}
                    color={player2[0].color}
                  ></Pawn>
                )}
                {!player2[1].inHouse && (
                  <Pawn
                    dx={player2[1].dx}
                    dy={player2[1].dy}
                    onClick={this.identifyPawn.bind(this)}
                    id={player2[1].id}
                    color={player2[1].color}
                  ></Pawn>
                )}
                {!player2[2].inHouse && (
                  <Pawn
                    dx={player2[2].dx}
                    dy={player2[2].dy}
                    onClick={this.identifyPawn.bind(this)}
                    id={player2[2].id}
                    color={player2[2].color}
                  ></Pawn>
                )}
                {!player2[3].inHouse && (
                  <Pawn
                    dx={player2[3].dx}
                    dy={player2[3].dy}
                    onClick={this.identifyPawn.bind(this)}
                    id={player2[3].id}
                    color={player2[3].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox color="white"></SmallBox>
            </div>
            {/* Green Box */}
            <BigBox row={1} column={3} color={this.state.player2[0].color}>
              <SmallBox row={1} column={1} color="white">
                {player2[0].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player2[0].id}
                    color={player2[0].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox row={1} column={2} color="white">
                {player2[1].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player2[1].id}
                    color={player2[1].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox row={2} column={1} color="white">
                {player2[2].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player2[2].id}
                    color={player2[2].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox row={2} column={2} color="white">
                {player2[3].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player2[3].id}
                    color={player2[3].color}
                  ></Pawn>
                )}
              </SmallBox>
            </BigBox>
            <div
              style={{
                gridRow: "2",
                gridColumn: "1",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {/* Yellow Area */}
              <SmallBox color="white"></SmallBox>
              <SmallBox color="yellow">
                {" "}
                {!player1[0].inHouse && (
                  <Pawn
                    dx={player1[0].dx}
                    dy={player1[0].dy}
                    onClick={this.identifyPawn.bind(this)}
                    id={player1[0].id}
                    color={player1[0].color}
                  ></Pawn>
                )}
                {!player1[1].inHouse && (
                  <Pawn
                    dx={player1[1].dx}
                    dy={player1[1].dy}
                    onClick={this.identifyPawn.bind(this)}
                    id={player1[1].id}
                    color={player1[1].color}
                  ></Pawn>
                )}
                {!player1[2].inHouse && (
                  <Pawn
                    dx={player1[2].dx}
                    dy={player1[2].dy}
                    onClick={this.identifyPawn.bind(this)}
                    id={player1[2].id}
                    color={player1[2].color}
                  ></Pawn>
                )}
                {!player1[3].inHouse && (
                  <Pawn
                    dx={player1[3].dx}
                    dy={player1[3].dy}
                    onClick={this.identifyPawn.bind(this)}
                    id={player1[3].id}
                    color={player1[3].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="yellow"></SmallBox>
              <SmallBox color="yellow"></SmallBox>
              <SmallBox color="yellow"></SmallBox>
              <SmallBox color="yellow"></SmallBox>
              <SmallBox color="yellow"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="yellow"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
            </div>
            <div
              style={{
                gridRow: "2",
                gridColumn: "3",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {/* Red Area */}
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="red"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="red"></SmallBox>
              <SmallBox color="red"></SmallBox>
              <SmallBox color="red"></SmallBox>
              <SmallBox color="red"></SmallBox>
              <SmallBox color="red"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="red">
                {!player4[0].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player4[0].id}
                    color={player4[0].color}
                  ></Pawn>
                )}
                {!player4[1].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player4[1].id}
                    color={player4[1].color}
                  ></Pawn>
                )}
                {!player4[2].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player4[2].id}
                    color={player4[2].color}
                  ></Pawn>
                )}
                {!player4[3].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player4[3].id}
                    color={player4[3].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox color="white"></SmallBox>
            </div>
            {/* Blue Box */}
            <BigBox row={3} column={1} color={this.state.player3[0].color}>
              <SmallBox row={1} column={1} color="white">
                {player3[0].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player3[0].id}
                    color={player3[0].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox row={1} column={2} color="white">
                {player3[1].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player3[1].id}
                    color={player3[1].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox row={2} column={1} color="white">
                {player3[2].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player3[2].id}
                    color={player3[2].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox row={2} column={2} color="white">
                {player3[3].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player3[3].id}
                    color={player3[3].color}
                  ></Pawn>
                )}
              </SmallBox>
            </BigBox>
            <div
              style={{
                gridRow: "3",
                gridColumn: "2",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {/* Blue Area */}
              <SmallBox color="white"></SmallBox>
              <SmallBox color="blue"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="blue"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="blue"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="blue"></SmallBox>
              <SmallBox color="blue"></SmallBox>
              <SmallBox color="blue">
                {!player3[0].inHouse && (
                  <Pawn id={player3[0].id} color={player3[0].color}></Pawn>
                )}
                {!player3[1].inHouse && (
                  <Pawn id={player3[1].id} color={player3[1].color}></Pawn>
                )}
                {!player3[2].inHouse && (
                  <Pawn id={player3[2].id} color={player3[2].color}></Pawn>
                )}
                {!player3[3].inHouse && (
                  <Pawn id={player3[3].id} color={player3[3].color}></Pawn>
                )}
              </SmallBox>
              <SmallBox color="blue"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
              <SmallBox color="white"></SmallBox>
            </div>
            {/* Red Box */}
            <BigBox row={3} column={3} color={this.state.player4[0].color}>
              <SmallBox row={1} column={1} color="white">
                {player4[0].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player4[0].id}
                    color={player4[0].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox row={1} column={2} color="white">
                {player4[1].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player4[1].id}
                    color={player4[1].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox row={2} column={1} color="white">
                {player4[2].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player4[2].id}
                    color={player4[2].color}
                  ></Pawn>
                )}
              </SmallBox>
              <SmallBox row={2} column={2} color="white">
                {player4[3].inHouse && (
                  <Pawn
                    onClick={this.identifyPawn.bind(this)}
                    id={player4[3].id}
                    color={player4[3].color}
                  ></Pawn>
                )}
              </SmallBox>
            </BigBox>
          </div>
        </div>
        <div>
          <button onClick={this.rollDice.bind(this)}>Play</button>
          <div className="h1">{this.state.dice}</div>
        </div>
      </>
    );
  }
}
export default App;
