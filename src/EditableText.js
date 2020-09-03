import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';


class EditableText extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        name: props.name,
        type: props.type||'text',
        value: props.value||'',
        editClassName: props.editClassName,
        edit: false
      }
    }
    edit() {
        let edit;
         this.setState({edit:edit!==false})
    }
    render() {
      return (
        this.state.edit===true&&
        <input 
          name={this.state.name}
          type={this.state.type}
          value={this.state.value}
          className={this.state.editClassName}
          autoFocus
          onFocus={event=>{
            const value = event.target.value
            event.target.value = ''
            event.target.value = value
            this.setState({backup:this.state.value})
          }}
          onChange={event=>{
            this.setState({value:event.target.value})
          }}
          onBlur={event=>{
            this.setState({edit:false})
          }}
          onKeyUp={event=>{
            if(event.key==='Escape') {
              this.setState({edit:false, value:this.state.backup})
            }
            if(event.key==='Enter') {
              this.setState({edit:false})
            }
          }}
        />
        ||
        <span onClick={event=>{
            this.setState({edit:this.state.edit!==true})
          }}>
          {this.state.value}
        </span>
      )
    }
  }
  
  class Root extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        name: 'ReactJS: EditableText',
        instructions: [
          'Click text above to edit it.',
          'Press other places to make it loses its focus to persist its changes.',
          'Or press `Enter` to persist its new value and lose focus',
          'Press `Escape` to reset to value before changed.',
          'Hack! All texts in this page are editable.'
        ]
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
      console.log('handleClick', event.target.name)
      eval(this[event.target.name]).bind(this)(event)
    }
    helloWorld() {
      this.setState({message:'Hello, World!'})
    }
    render(){
      return (
        <div className="container-fluid">
          <h1>
            <EditableText value={this.state.name} editClassName="form-control"/>
          </h1>
          
          <div className="row">
            <div className="col-12">
              
              <EditableText value="Hello word!" editClassName="form-control"/>
              
              <hr/>
              
              <ul className="list-unstyled">
                {
                  this.state.instructions.map(entry=>(
                    <li>
                      <EditableText value={entry} editClassName="form-control"/>
                    </li>
                  ))
                }
              </ul>
              
            </div>
          </div>
          
        </div>
      )
    }
  }
  
export default EditableText