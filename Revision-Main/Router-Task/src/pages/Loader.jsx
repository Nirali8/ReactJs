import React from 'react'

const Loader = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}

export default Loader
