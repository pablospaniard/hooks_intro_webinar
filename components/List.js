import React from 'react'
import { Steps } from 'mdx-deck'

const List = ({ array }) => (
    <div style={{ fontSize: 40, textAlign: 'left' }}>
        <ul>
            <Steps>
                {array.map(item => (
                    <li>{item}</li>
                ))}
            </Steps>
        </ul>
    </div>
)

export default List
