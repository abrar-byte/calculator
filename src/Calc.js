import React, { Component } from 'react'

export default class Calc extends Component {
  state = {
    tampil: "",
    hasil: ""
  }

  op = (s) => {
    this.setState({ tampil: s })
  }
  hitung = (hasil) => {
    this.setState({ hasil: hasil })
  }


  render() {
    return (
      <div>
        <button onClick={() => this.op('+')}>+</button>
        <button onClick={() => this.op('-')}>-</button>
        <button onClick={() => this.op('x')}>x</button>
        <button onClick={() => this.op(':')}>:</button>
        <br />
        <br />
        {this.state.hasil}
        {this.state.op === '+' && <Tambah />}
        {this.state.op === '-' && <Kurang />}
        {this.state.op === 'x' && <Kali />}
        {this.state.tampil === ':' && <Bagi />}
      </div>
    )
  }
}

class Tambah extends Component {
  state = {
    angka: []
  }

  munculin = (v) => {

    // angka.push(v)
    this.setState({ angka })
  }
  render() {
    return (
      <div>
        <h3>Tambahin</h3>
        <Angka />


      </div>
    )
  }
}

class Kurang extends Component {
  render() {
    return (
      <div>
        <h3>Kurangin</h3>
        <Angka />
      </div>
    )
  }
}
class Kali extends Component {
  render() {
    return (
      <div>
        <h3>Kaliin</h3>
        <Angka />
      </div>
    )
  }
}
class Bagi extends Component {
  render() {
    return (
      <div>
        <h3>Bagiin</h3>
        <Angka />

      </div>
    )
  }
}


class Angka extends Component {
  render() {
    return (
      <div>

        <button>1</button>
        <button>2</button>
        <button>3</button><br />
        <button>4</button>
        <button>5</button>
        <button>6</button><br />
        <button>7</button>
        <button>8</button>
        <button>9</button><br />
        <button>=</button>


      </div>
    )
  }
}