import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.alterInputValue = this.alterInputValue.bind(this);
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  alterInputValue  = () => {
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div className='App'>
        {/* When the component is rendered first focus on Input field */}
        <input type="text" ref={this.inputRef}></input> |
				{/* Get value of Input filed */} 
        <button onClick={this.alterInputValue}>Alert</button>
      </div>
    );
  }
}

export default App;
