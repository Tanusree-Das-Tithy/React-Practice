import React from "react";
import PropTypes from 'prop-types';
const index=0;

export class Clock extends React.Component {
  state= {date:new Date()}; //same as constructor
  /*constructor(props)
  {
    super(props);
    this.state={date: new Date()};
  }*/
  componentDidMount(){
    this.clockTimer= setInterval(()=>{
     this.tick();
    },1000);
  }

   componentWillUnmount(){
        clearInterval(this.clockTimer);
   }
  tick(){
    this.setState({
      date:new Date(),
     });
  }
  render(){
  return (
  <h1 className='heading' tabIndex={index}>
    <span className='text'> {this.state.date.toLocaleTimeString(this.props.locale)}</span>
  </h1>
);
}

}
Clock.propTypes = {
  locale: PropTypes.any,
};



