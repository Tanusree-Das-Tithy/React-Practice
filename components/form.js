import React, { useRef } from "react";
import { useState } from "react";
//import styles from '../Asset/css/Logo.module.css'
//import { ReactDOM } from "react";
//import PropTypes from 'prop-types'; 



const FirstComponent = () => {
    const inputRef= useRef(null);
  const [message, setMessage] = useState('');

  
  const handleSubmit = () => {
    
       setMessage(inputRef.current.value);
  };
  return (
    <div>
     
    <input className="box"
      ref={inputRef}
      type="text"
      id="message"
      name="message"
      placeholder="Template"
     
      
      
    />
    <br></br>
    <button className="submit" onClick={handleSubmit}>Save</button>
    <h2>Your Input: {message}</h2>
  </div> 
  )
}

const SecondComponent = () => {
  
  return (
    <div>
      <p>Template</p>
      <br></br>
     
    <h2>Your Input:</h2>
    
    </div>
  )
}

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      display: 'second'
    };
    
  }
  
  changeDisplay = () => {
  
    let { display } = this.state;
    this.setState({ display: display === 'second' ? 'first' : 'second' });
  }
  
  renderInner() {
    let { display } = this.state;
    
    if (display === 'first') {
      return <FirstComponent />
    } else if (display === 'second') {
      return <SecondComponent />
    }
  }
  
  render() {
    
    return (
      <div  className='main-class'>
        <button  className='select' onClick={this.changeDisplay}><img src="/Pencil.jpg" style={{height:"15px",width:"15px"}}></img></button>
        {this.renderInner()}
      </div>
    )
  }
}
 

 