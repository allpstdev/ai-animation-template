
const ContentButton = ({
    text
}) => {
    return (
        <div className='mt-20 bg-white w-1/2 h-full p-14 text-4xl text-center mx-auto border border-black rounded-[50px]' role="button" tabIndex={0}>
            {text}
        </div>
    )
}

export default ContentButton