import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TextContent from './TextContent';
import fly from './assets/fly.png'
import jackie from './assets/jackie.png'
import insta from './assets/insta.png'
import EditableText from './EditableText'


class Main extends React.Component {
  render() {
    return (
        <div className="main">
          <h1 className="shadow p-3 mb-5 bg-white rounded">
           
          Meme Generator
                         <h3>
                           <small> 
                           <cite title="Source Title">by shadman shaikh</cite>
                           </small>
                         </h3>
          </h1>
          <img src={fly} className="flies"></img>
          <img src={jackie} className="jackie"></img>
              <a 
               href="https://www.instagram.com/shady._xo/"
               type="text"
               placeholder="insta">       
                <img src={insta} className="insta"></img>
               </a>
          

             <TextContent/>
             <EditableText/>  

        </div>


    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));