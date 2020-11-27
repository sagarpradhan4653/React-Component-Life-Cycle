import React from 'react'

export default function Mounting() {
    return (
        <div>
            MOUNTING
            <p id="mount"> Mounting is the phase of the component lifecyle<br />
                when the initialization of the component is <br />
                completed and the component is mounted on the DOM <br />
                and rendered for the first time in the webpage.<br/>
                Mounting phase consists of two such predefined functions
                </p>
                <h5>1. constructor</h5>
                <h5>2. getDerivedStateFromProps</h5>
                <h5>3. render</h5>
                <h5>4. componentDidMount()</h5>

               
        </div>
    )
}
