import React from 'react'

const ParentComponent = ({ Component }) => {
    const role = 'user'

    if (role === 'admin') {
        return (
            <div>
                Parent Component
                <Component />
            </div>
        )
    }



    return <div>
        <h2>Not an admin</h2>
    </div>

}

export default ParentComponent
