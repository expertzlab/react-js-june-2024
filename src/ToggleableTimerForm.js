import { Component } from "react"
import { TimerForm } from "./TimerForm";

export class ToggleableTimerForm extends Component {

    state = {
        isOpen: false,
    };

    toggle = () => {
        if(this.state.isOpen === false){
            this.setState({
                isOpen: true,
            } )
        } else {
            this.setState({
                isOpen: false,
            } )
        }
    }

    render() {
        if (this.state.isOpen) { 
            return ( <TimerForm switchTimer={this.toggle} onHandleSubmit={this.props.onHandleSubmit} /> );
        } else { 
            return (
                <div className='ui basic content center aligned segment'>
                  <button onClick={this.toggle} className='ui basic button icon'>
                    <i className='plus icon' />
                  </button>
        </div> );
        } 
    }
        
}