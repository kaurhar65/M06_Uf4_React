function Button({esClick, onclick, text}){
    let btnClass = esClick == true ? "buttonClick" : "buttonRestart";

    return(
        <>
            <button className={btnClass} onClick={onclick}>
            {text}
            </button>
        </>
    );

}

export default Button;