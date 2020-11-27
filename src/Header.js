import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

export default function Header() {
    return (
        <>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-warning active">
                    <Link to='/' ><span className="yoyo">LifeCycle</span></Link>
                </label>
                <label className="btn btn-success active">
                    <Link to='/Mounting' ><span className="yoyo">Mounting</span></Link>
                </label>
                <label className="btn btn-dark active">
                    <Link to='/UpdateMounting' ><span className="yoyo">Updating</span></Link>
                </label>
                <label className="btn btn-danger active">
                    <Link to='/UnMounting' ><span className="yoyo">UnMounting</span></Link>
                </label>
            </div>
        </>
    )
}
