import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    this.state = {
      board = Array(12).fill(null)
    }  }
}

  render() {

    const Box = this.state.board.map(box => <div className="box">{Box}</div>)

    return (
      <div className="container">
      
      <h1>Clicky</h1>

          <div className="board">
            
            {/* <div className="box"></div> 

                <div className="box"></div> 

                <div className="box"></div> 

                <div className="box"></div> 

                <div className="box"></div> 

                <div className="box"></div> 

                <div className="box"></div>

                <div className="box"></div>

                <div className="box"></div> 

                <div className="box"></div> 

                <div className="box"></div>

                <div className="box"></div>   */}
          
          </div>


      </div>
    )
  };


export default App;
