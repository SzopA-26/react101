import React, { Component } from 'react'
import Btn from './Btn.js'
import '../css/CardPost.css'

export default class CardPostCC extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            
        }
    }

    countFunc = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {
        return (
            <div className="card">
            <h2>{this.props.title} Class Component</h2>
            <ul>
                <li>post detail 1</li>
                <li>post detail 2</li>
                <li>post detail 3</li>
                <li>count {this.state.count}</li>
            </ul>
            <button onClick={this.countFunc}>Count</button>
            <Btn click={this.countFunc} name="Another Count"/>
        </div>
        )
    }
}



