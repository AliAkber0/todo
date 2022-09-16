

import { Component } from 'react';
import Todos from './components/todos'
import './my-sass.scss'

class App extends Component {
  render(){
    return (
      <div >
            <div>
            <Todos/>

            </div>
      </div>
    );
  }

}

export default App;
