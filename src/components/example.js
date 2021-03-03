import axios from 'axios';
import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',

        }
    }

    
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePassowrdChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        // axios.post('http://localhost:8080/post',{
        //     email: this.state.email,
        //     password: this.state.password,
        // }).then((res) => console.log(res)).catch((err) => console.log(err));
    }

    

    render() {
        console.log(this.state.email)
        console.log(this.state.password)
        console.log(this.props)
        return (
            <div>
                <input type="text" id="email" onChange={this.handleEmailChange}/>
                <input type="password" id="password" onChange={this.handlePassowrdChange}/>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default Example;