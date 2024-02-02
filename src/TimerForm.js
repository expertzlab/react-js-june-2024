import { Component } from "react";

export class TimerForm extends Component{

  state = {
    title: this.props.title || '',
    project: this.props.project || '',
  };

  handleSubmit = () => {
    this.props.onHandleSubmit({
      id: this.props.id,
      title:this.state.title,
      project: this.state.project
    })
    this.props.switchTimer();
  }

  handleTitle = (e) => {
    this.setState({title: e.target.value})
  }

  handleProject = (e) => {
    this.setState({project: e.target.value})
  }
  
    render(){
        const submitText = this.props.title ? 'Update' : 'Create';         
        return (
            <div className='ui centered card'>
              <div className='content'>
                <div className='ui form'>
                  <div className='field'> 
                  <label>Title</label> 
                  <input type='text' 
                    value={this.state.title} 
                    defaultValue={this.props.title}
                    onChange={this.handleTitle} /> 
                  </div>
                  <div className='field'>
                    <label>Project</label>
                    <input type='text' 
                      value={this.state.project} 
                      defaultValue={this.props.project} 
                      onChange={this.handleProject} />
                  </div>
                  <div className='ui two bottom attached buttons'> 
                    <button onClick={this.handleSubmit}  className='ui basic blue button'> {submitText} </button>
                    <button className='ui basic red button'> Cancel </button>
                  </div> 
                </div> 
              </div> 
            </div> 
        );
    }
}