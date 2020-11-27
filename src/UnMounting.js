import React from 'react'

export default function UnMounting() {
    return (
        <div>
            UNMOUNTING
            <p id="unmount"> This is the final phase of the lifeycle of the <br />
             component that is the phase of unmounting the<br />
             component from the DOM.<br />
            The following function is the sole member of this phase.
            </p>
            <h5>1. componentWillUnmount()</h5>
        </div>
    )
}
