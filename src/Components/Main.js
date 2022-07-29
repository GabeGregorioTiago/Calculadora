import React from "react";
import "../styles.css";
import styled from "styled-components";

 const Container = styled.div`
    background-color:#2f4f4f;
 `;
/*const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .box--one {
    width: 60%;
    height: 100vh;

    background-image: url("https://c.tenor.com/YAOhbZ5GZy4AAAAd/nazar%C3%A9.gif");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .box--two {
    width: 40%;
    height: 94vh;
  }
  button {
    background-color: #2f4f4f;
    width: 4vw;
    height: 6vh;
    border-radius: 10px;
    cursor: pointer;
  }
  input {
    width: 12vw;
    height: 4vh;
    border-radius: 10px;
    margin-left: 7vw;
    margin-top: 6vh;
    padding-left: 1vw;
  }
  h1 {
    margin-left: 10vw;
    margin-top: 4vh;
  }
  .bottons {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;

    width: 30vw;
    height: 60vh;
    margin-top: 4vh;
    margin-left: 6vw;
  }
  .apagar {
    height: 28vh;
    width: 3vw;
    margin-left: 6vw;
  }
  .others {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 10vw;
    height: 30vh;
  }
  h2 {
    font-size: 4vh;
    margin-top: 3vh;
    margin-left: 8vw;
  }
  p {
    margin-left: 8vw;
    border: solid;
    opacity: 0.3;
    border-radius: 10px;
    margin-top: 2vw;
    width: 7vw;
    height: 5vh;
    padding-left: 2vw;
  }
`;*/

export default class Main extends React.Component {
  state = {
    numberOne: "",
    numberTwo: "",
    result: ""
  };
  receberNumero = (event) => {
    this.setState({
      numberOne: event.target.value
    });
  };

  receberNumero2 = (event) => {
    this.setState({
      numberTwo: event.target.value
    });
  };
  divisao = () => {
    const { numberOne, numberTwo } = this.state;
    this.setState({
      result: Number(numberOne) / Number(numberTwo)
    });
  };
  multiplicacao = () => {
    const { numberOne, numberTwo } = this.state;
    this.setState({
      result: Number(numberOne) * Number(numberTwo)
    });
  };
  subtracao = () => {
    const { numberOne, numberTwo } = this.state;
    this.setState({
      result: Number(numberOne) - Number(numberTwo)
    });
  };
  resto = () => {
    const { numberOne, numberTwo } = this.state;
    this.setState({
      result: Number(numberOne) % Number(numberTwo)
    });
  };
  adisao = () => {
    const { numberOne, numberTwo } = this.state;
    this.setState({
      result: Number(numberOne) + Number(numberTwo)
    });
  };
  exponencial = () => {
    const { numberOne, numberTwo } = this.state;
    this.setState({
      result: Number(numberOne) ** Number(numberTwo)
    });
  };
  deletar = () => {
    //const { numberOne, numberTwo } = this.state;
    this.setState({
      numberOne: "",
      numberTwo: "",
      result: ""
    });
  };
  render() {
    return (
      <Container>
        <section className="box--one"></section>

        <section className="box--two">
          <div>
            <h1>Calculadora - React App</h1>
            <input
              value={this.state.numberOne}
              onChange={this.receberNumero}
              type="number"
              placeholder="Primeiro Número"
            />
            <input
              value={this.state.numberTwo}
              onChange={this.receberNumero2}
              type="number"
              placeholder="Segundo Número"
            />
            <h2>Resultado</h2>
            <p>{this.state.result}</p>
          </div>
          <div className="bottons">
            <div>
              <button onClick={this.deletar} className="apagar">
                C
              </button>
            </div>
            <div className="others">
              <button onClick={this.multiplicacao}>x</button>
              <button onClick={this.adisao}>+</button>
              <button onClick={this.subtracao}>-</button>
              <button onClick={this.exponencial}>Exp</button>
              <button onClick={this.divisao}>/</button>
              <button onClick={this.resto}>%</button>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

//Main;
