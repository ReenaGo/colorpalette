import React, {Component} from 'react';
import './App.css';
import Colors from './colors'

class ColorApp extends Component {
<<<<<<< HEAD
  constructor () {
        super();
        let state = {
          colors: [
            {color: this.getRandomColor(),
            lock: true
            },
            {color: this.getRandomColor(),
              lock: true
            },
            {color: this.getRandomColor(),
              lock: true
            },
            {color: this.getRandomColor(),
              lock: true
            },
            {color: this.getRandomColor(),
              lock: true
            },
          ]
        }
        this.state=state
      }
    
=======

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
  

  
>>>>>>> deb97316a92dc9fbf8b6cb956a8679c996ee408a


  getRandomColor=()=> {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  };

  lockButtonToggle=(i)=> {
<<<<<<< HEAD
    const newColors = this.state.colors.map((color, index)=>{
=======
    const colors = this.state.colors.map((color, index)=>{
      
>>>>>>> deb97316a92dc9fbf8b6cb956a8679c996ee408a
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
<<<<<<< HEAD
      colors: newColors
    });
 };
=======
      colors: colors
   })
  }
>>>>>>> deb97316a92dc9fbf8b6cb956a8679c996ee408a
  
  RandomizeColorHandler () {
      let newColors = this.state.colors.map((color)=>{
        if (color.lock) {
          return color
        }
        else {
          return{
          ...color,
          color: this.getRandomColor()
          }
        }
      })
          this.setState({
            colors:newColors
      })
    }

<<<<<<< HEAD
  render() {
    const colors = this.state.colors.map((color, i)=>{
      return <Colors 
        colorObj={color}
=======
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
>>>>>>> deb97316a92dc9fbf8b6cb956a8679c996ee408a
        key={i}
        toggle={()=>this.lockButtonToggle(i)}
        />
    })
    return (
        <div>
            <div classname="text-center bg-dark fixed-top">
              <button onClick={()=>this.RandomizeColorHandler()} className="btn btn-secondary m-1">
                Randomize Colors
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
