import React,{Component} from 'react'
import './App.css'

export default class App extends Component{
    render(){
        return <div>
            我是根组件你好
            <div className="box"></div>
            <div className="animal"></div>
        </div>
    }
}