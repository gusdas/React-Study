import React,{ Component} from 'react';
import './validationSample.css'

class ValidationSample extends Component {
    state={
        password:'',
        clicked:false,
        validated: false,
    }
    handleChange  = (e) =>{
        this.setState({password: e.target.value})
    }
    handleClick = (e) =>{
        this.setState({clicked: true, validated: this.state.password === '0000'})
        this.input.focus()
    }
    render() {
        return(
            <div>
                <input type='password'
                value={this.state.password}
                onChange={this.handleChange}
                className = {this.state.clicked ? (this.state.validated ? 'success' : 'failure'):''}
                ref={(ref)=> this.input=ref}
                >

                </input>
                <button onClick={this.handleClick} >검증하기</button>
            </div>
        )
    }
}

export default ValidationSample;