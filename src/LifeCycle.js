import React from 'react'
import { Link } from 'react-router-dom'


export default function LifeCycle() {
    return (
        <div>
            LifeCycle Method
            <Link to='/Mounting' ><span><br/>Mounting</span></Link>
            <Link to='/UpdateMounting' ><span><br/>Updating</span></Link>
            <Link to='/UnMounting' ><span><br/>UnMounting</span></Link>

            
            
        </div>
    )
}
