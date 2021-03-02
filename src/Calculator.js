import React, { Component } from 'react'

export default class Calculator extends Component {
  state = {
    operator: "",
    output: ""
  }



  klik = (tombol) => {
    if (tombol === "=") {
      this.kodehitung()
    }
    else {
      this.setState({
        output: this.state.output + tombol
      })
    }
  };

  kodehitung = () => {

    this.setState({
      // eslint-disable-next-line             
      output: (eval(this.state.output))
    })
  }

  select = (v) => {
    this.setState({ operator: v })
  }


  render() {

    return (

      <div >
        <h1>Choose Operation</h1>
        <button onClick={() => this.select("+")}>+</button>
        <button onClick={() => this.select("-")}>-</button>
        <button onClick={() => this.select(":")}>:</button>
        <button onClick={() => this.select("x")}>x</button>

        <Output output={this.state.output} />

        {this.state.operator === "+" && <Tambah klik={this.klik}></Tambah>}
        {this.state.operator === "-" && <Kurang klik={this.klik} />}
        {this.state.operator === "x" && <Kali klik={this.klik} />}
        {this.state.operator === ":" && <Bagi klik={this.klik} />}

      </div>
    )
  }
}

class Tambah extends Component {
  render() {
    return (
      <div>
        <h3>Tambahin</h3>
        <button onClick={() => this.props.klik("+")}>+</button>





        <br />
        {/* <button onClick={() => this.props.klik("1")}> 1</button>
        <button onClick={() => this.props.klik("2")}> 2</button>
        <button onClick={() => this.props.klik("3")}> 3</button><br />
        <button onClick={() => this.props.klik("4")}> 4</button>
        <button onClick={() => this.props.klik("5")}> 5</button>
        <button onClick={() => this.props.klik("6")}> 6</button><br />
        <button onClick={() => this.props.klik("7")}> 7</button>
        <button onClick={() => this.props.klik("8")}> 8</button>
        <button onClick={() => this.props.klik("9")}> 9</button><br />
        <button onClick={() => this.props.klik("=")}>=</button> */}
        <Angka {...this.props} />


      </div>
    )
  }
}

class Kurang extends Component {
  render() {
    return (
      <div>
        <h3>Kurangin</h3>
        <button onClick={() => this.props.klik("-")}>-</button><br />
        {/* <button onClick={() => this.props.klik("1")}>1</button>
        <button onClick={() => this.props.klik("2")}>2</button>
        <button onClick={() => this.props.klik("3")}>3</button><br />
        <button onClick={() => this.props.klik("4")}>4</button>
        <button onClick={() => this.props.klik("5")}>5</button>
        <button onClick={() => this.props.klik("6")}>6</button><br />
        <button onClick={() => this.props.klik("7")}>7</button>
        <button onClick={() => this.props.klik("8")}>8</button>
        <button onClick={() => this.props.klik("9")}>9</button><br />
        <button onClick={() => this.props.klik("=")}>=</button> */}
        <Angka klik={this.props.klik} />


      </div>
    )
  }
}

class Kali extends Component {
  render() {
    return (
      <div>
        <h3>Kaliin</h3>
        <button onClick={() => this.props.klik("*")}>x</button><br />
        {/* <button onClick={() => this.props.klik("1")}>1</button>
            <button onClick={() => this.props.klik("2")}>2</button>
            <button onClick={() => this.props.klik("3")}>3</button><br />
            <button onClick={() => this.props.klik("4")}>4</button>
            <button onClick={() => this.props.klik("5")}>5</button>
            <button onClick={() => this.props.klik("6")}>6</button><br />
            <button onClick={() => this.props.klik("7")}>7</button>
            <button onClick={() => this.props.klik("8")}>8</button>
            <button onClick={() => this.props.klik("9")}>9</button><br />
            <button onClick={() => this.props.klik("=")}>=</button> */}
        <Angka klik={this.props.klik} />


      </div>
    )
  }
}
class Bagi extends Component {
  render() {
    return (
      <div>
        <h3>Bagiin</h3>
        <button onClick={() => this.props.klik("/")}>:</button><br />
        {/* <button onClick={() => this.props.klik("1")}>1</button>
        <button onClick={() => this.props.klik("2")}>2</button>
        <button onClick={() => this.props.klik("3")}>3</button><br />
        <button onClick={() => this.props.klik("4")}>4</button>
        <button onClick={() => this.props.klik("5")}>5</button>
        <button onClick={() => this.props.klik("6")}>6</button><br />
        <button onClick={() => this.props.klik("7")}>7</button>
        <button onClick={() => this.props.klik("8")}>8</button>
        <button onClick={() => this.props.klik("9")}>9</button><br />
        <button onClick={() => this.props.klik("=")}>=</button> */}
        <Angka klik={this.props.klik} />


      </div>
    )
  }
}

class Angka extends Component {
  render() {
    return (
      <div>

        <button onClick={() => this.props.klik("1")}> 1</button>
        <button onClick={() => this.props.klik("2")}> 2</button>
        <button onClick={() => this.props.klik("3")}> 3</button><br />
        <button onClick={() => this.props.klik("4")}> 4</button>
        <button onClick={() => this.props.klik("5")}> 5</button>
        <button onClick={() => this.props.klik("6")}> 6</button><br />
        <button onClick={() => this.props.klik("7")}> 7</button>
        <button onClick={() => this.props.klik("8")}> 8</button>
        <button onClick={() => this.props.klik("9")}> 9</button><br />
        <button onClick={() => this.props.klik("0")}>0</button>
        <button onClick={() => this.props.klik("=")}>=</button>



      </div>
    )
  }
}

class Output extends Component {
  render() {
    return (
      <div>
        <h3>outputnya :</h3>

        <h5>{this.props.output}</h5>

      </div>
    )
  }
}
