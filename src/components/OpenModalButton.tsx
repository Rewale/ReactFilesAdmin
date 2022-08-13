interface OpenModalButtonProps{
    open: () => void
}

export function OpenModalButton({open}: OpenModalButtonProps){
    return (
        <button className="bg-red-500 px-4 py-2 text-white rounded-full fixed bottom-5 right-5 "
                onClick={open}>+</button>
    )
}