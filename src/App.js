import React, {Component} from 'react';
import './App.css';
import Colors from './colors'

class ColorApp extends Component {

  constructor(){
    super();
    let state = {
      colors: [
        {color: this.getRandomColor(),
         lock: false
        },
        {color: this.getRandomColor(),
          lock: false
        },
        {color: this.getRandomColor(),
          lock: false
        },
        {color: this.getRandomColor(),
          lock: false
        },
        {color: this.getRandomColor(),
          lock: false
        },
      ]
    }
    this.state = state
  }
  

  


  getRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  lockButtonToggle=(i)=> {
    const colors = this.state.colors.map((color, index)=>{
      
      if (i===index) {
         return {
           ...color,
           lock: !color.lock
         }
      }else{
        return color
      }
    })
    
    this.setState({
      colors: colors
   })
  }
  
  // RandomizeColorHandler= ()=> {

  //   if (color.lock) {
  //     return color
  //   }
  //   else {
  //     return{
  //     ...color,
  //     color: this.getRandomColor
  //     }
  //   }

  // }

  render()  {
    const colors = this.state.colors.map((color, i)=>{
      return <Colors 
        colorObj = {color}
        key={i}
        toggle={()=>this.lockButtonToggle(i)}
        />
    })
    return (
        <div>
            <div classname="text-center bg-dark fixed-top">
              <button className="btn btn-secondary m-1">
                Randomize Button
              </button>
            </div>
            <div className="w-100 d-flex" style={{height: '100vh'}}>
            {colors}
            </div>
        </div>
      );
    
  } 
}

export default ColorApp;
