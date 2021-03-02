import React, { Component } from 'react'

export default class Calculator extends Component {
  state = {

    hasil: ""
  }



  klik = (tombol) => {
    if (tombol === "=") {
      this.kodehitung()
    }
    else {
      this.setState({
        hasil: this.state.hasil + tombol
      })
    }
  };

  kodehitung = () => {
    var cekhasil = ""
    if (this.state.hasil) {
      cekhasil = this.state.hasil.replace("", "+")
    }

    else {
      cekhasil = this.state.hasil
    }

    try {
      this.setState({
        // eslint-disable-next-line             
        hasil: (eval(cekhasil) || "") + ""
      })
    }
    catch (k) {
      alert("ngantuk ta!!!!!!")
      this.setState({ cekhasil })
    }
  };

  render() {
    return (
      <div>
        <h1>Choose Operation</h1>
        <button onClick={() => this.setState({ op: "+" })}>+</button>
        <button onClick={() => this.setState({ op: "-" })}>-</button>
        <button onClick={() => this.setState({ op: "x" })}>x</button>
        <button onClick={() => this.setState({ op: ":" })}>:</button>

        <Hasil hasil={this.state.hasil} />

        {this.state.op === "+" && <Tambah klik={this.klik} />}
        {this.state.op === "-" && <Kurang klik={this.klik} />}
        {this.state.op === "x" && <Kali klik={this.klik} />}
        {this.state.op === ":" && <Bagi klik={this.klik} />}

      </div>
    )
  }
}

class Tambah extends Component {
  render() {
    return (
      <div>
        <h3>Tambahin</h3>
        <button onClick={() => this.props.klik("+")}>+</button><br />
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
        <Angka klik={this.props.klik} />


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
        <button onClick={() => this.props.klik("x")}>x</button><br />
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
        <button onClick={() => this.props.klik(":")}>:</button><br />
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
        <button onClick={() => this.props.klik("=")}>=</button>



      </div>
    )
  }
}

class Hasil extends Component {
  render() {
    return (
      <div>
        <h3>Hasilnya :</h3>

        <h5>{this.props.hasil}</h5>

      </div>
    )
  }
}
