import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

const mountingPoint = document.getElementById('root')

ReactDOM.render(<App />, mountingPoint)
