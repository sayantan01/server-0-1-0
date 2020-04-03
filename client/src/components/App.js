/**
This file is not ins use. please ignore it
*/





import React,{Component} from 'react';

class App extends Component{
  render(){
    return (

          <div className="container">
            <h2>try out</h2>
            <form action='/search' method='get'>
            <input name='search' value='test value' placeholder='search tags here'/>
            <input type='submit' value='Search'/>
            </form>
          </div>

    );
  }
}

export default App;
