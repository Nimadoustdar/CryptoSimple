import React from 'react'

import spinner from '../gif/Spinner.gif'
const Loader = () => {
    return (
        <>
            <img src={spinner} alt='loading' />
            <h1>Loading...</h1>
        </>
    )
}

export default Loader