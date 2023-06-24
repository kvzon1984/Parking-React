
export default function Button({ children, handleClick, className }) {
    return (
        <div className="pt-3">
            <button
                onClick= {handleClick}
                className={className}
            >{children}</button>
        </div>
    )
}