import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/*
const index=0;

class Clock extends React.Component {
  render(){
  return (
  <h1 className='heading' tabIndex={index}>
    <span className='text'>Hello {new Date().toLocaleTimeString(this.props.locale)}</span>
  </h1>
);
}

}
Clock.propTypes = {
  locale: PropTypes.any,
};
ReactDOM.render(<Clock locale="bn-BD"/>,document.getElementById('root'));
*/
/*
function Clock({locale}) {

  return (
  <h1 className='heading' tabIndex={index}>
    <span className='text'>Hello {new Date().toLocaleTimeString(locale)}</span>
  </h1>
);
}

Clock.propTypes = {
  locale: PropTypes.any,
};

ReactDOM.render(<Clock locale="bn-BD"/>,document.getElementById('root'));

const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};

Button.propTypes = {
  kind: PropTypes.any,
};

ReactDOM.render(App(),document.getElementById('root'));

// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}


function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

Repeat.propTypes = {
  numTimes: PropTypes.any,
  children: PropTypes.any,
};

ReactDOM.render(ListOfTenThings(),document.getElementById('root'));
*/
