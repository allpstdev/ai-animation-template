import React from 'react'

const PageDescription = ({ text }) => {
    return (
        <h4 className="mb-2 px-44 text-center text-xl font-light tracking-[-0.0001em] sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
            {text}
        </h4>
    )
}

export default PageDescription