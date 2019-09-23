import React from 'react';
import './App.css';
import './static/Mystyles.css'
import Footer from './Footer';
import MyNavbar from './MyNavbar';
import Mainpage from './Mainpage';
class App extends React.Component {
  state = {
    link:""
  }
  getLink = (link) => {
    this.setState({link:link})
    }
  render(){
  return (
    <div className="App">
    <MyNavbar clickedLink={this.getLink}/>
    <Mainpage clickedLink={this.state.link}/>
    <Footer/>
    </div>
  );
}
}
export default App;
