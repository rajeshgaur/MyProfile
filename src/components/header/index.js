import React from 'react'
import { withState, compose, withHandlers } from 'recompose'
import './style.scss'

export const Header = () => (
    <div>
        <div>{this.state.name}</div>
    </div>
)

const headerEnhancer = compose(
    withState('name', setName, 'rajesh')
)

export const A = headerEnhancer(Header)