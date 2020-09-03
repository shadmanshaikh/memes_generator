import React, {Component} from 'react';
import './index.css';
import { render } from '@testing-library/react';
import { Stage, Layer, Rect } from 'react-konva';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






class TextContent extends Component{
    constructor(){
        super()
        this.state = {
            topText : "",
            bottomText : "",
            randomImg: "https://i.imgflip.com/26am.jpg",
            allMemeImgs:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({ allMemeImgs : memes})
        })

    }
    handleChange(event){
        const {name ,value} = event.target
        this.setState({ [name]:value})
    }
    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    };
    // canvas(){
    //         const canvas = document.getElementById('gen');
    //        let ctx = canvas.getContext('2d');
    //        let $
    //         canvas.width = $('img').width();
    //         canvas.crossOrigin = "Anonymous";
    //         canvas.height = $('img').height();
    //         ctx.drawImage($('img').get(0), 0, 0);
    //         ctx.font = "36pt Verdana";
    //         $(document).on('input','#inp',function(){
    //             //redraw image
    //             ctx.clearRect(0,0,canvas.width,canvas.height);
    //             ctx.drawImage($('img').get(0), 0, 0);
    //             //refill text
    //             ctx.fillStyle = "red";
    //             ctx.fillText($(this).val(),40,80);
    //         });
    //         $('button').click(function(){
    //             console.log(ctx.getImageData(50, 50, 100, 100));
    //         });
    // };
    //  addLink() {
    //     var link = document.createElement('a');
    //     link.innerHTML = 'Download!';
    //     link.addEventListener('click', function(e) {
    //       link.href = this.state.randomImg;
    //       link.download =this.state.randomImg;
    //     }, true);
    //     link.className = "instruction";
    //     document.querySelectorAll('section')[1].appendChild(link);
    //   }
    // handleDownload(event){
    //     event.preventDefault()
    //     const download = this.target.randMemeImg.url
    //     // addEventListener{ 'onClick', (e)=>

    //     // }
    // }
    // shareFacbook(e) {
    //     const topText = this.state.topText;
    //     const bottomText = this.state.bottomText;

    //     if (topText!=='' && bottomText!=='') {
    //         e = this.state.randomImg;
    //         window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(e), 'sharer', 'toolbar=0,status=0,width=626,height=436');
    //         return false;
    //     }
    //     else {
    //         alert('field is empty');
    //     }
    // downloadButton() {
    //     const dld = document.getElementById("download");
    //     dld.addEventListener('click' , 
    //     this.state.randomImg +  this.state.topText + this.state.bottomText );
    // }
    // myCanvas(){
    //         var canvas = document.getElementById('myCanvas'),
    //         ctx = canvas.getContext('2d'),
    //         font = '14px sans-serif',
    //         hasInput = false;

    //     canvas.onclick = function(e) {
    //         if (hasInput) return;
    //         addInput(e.clientX, e.clientY);
    //     }
    // }



        render(){
           
        return(
            <div className="content">
                <input 
                className="typebartop shadow p-3 mb-5 bg-white rounded"
                 type="text"
                 name="topText"
                 placeholder = "top Text"
                 value={this.state.topText}
                 onChange={this.handleChange}>


                 </input>
            
                <button className="bt1 btn btn-primary " onClick={this.handleSubmit}>New</button>
                <button className="bt3 btn btn-danger">Share</button>
               
                <button className="download" >
                    <a
                    href={this.state.randomImg} 
                    src={this.state.randomImg + this.state.topText} 
                    download>download
                    </a>

                 
                </button>
                                                

                <input 
                className="typebarbottom shadow p-3 mb-5 bg-white rounded"
                 type="text"
                 name="bottomText"
                 placeholder = "Bottom Text"
                 value={this.state.bottomText}
                 onChange={this.handleChange}>

                 </input>
                

                <div className="gen" onclick="canvas()">
                  <img src={this.state.randomImg} alt="" className="shadow p-3 mb-5 bg-white rounded"></img>
                    <h2 className="top ">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                {/* <div class="col"> */}
                    {/* <FontAwesomeIcon icon={['fab', 'facebook-f']} onClick={this.shareFacbook} style={{ cursor: 'pointer' }} /> */}
                {/* </div> */}

            </div>
        )
    }
}
export default TextContent