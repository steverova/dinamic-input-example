export const CustomInput = (props) => {

    return (
        <>
            <p>{props.message}</p>
            <input
                className="input"
                type="text"
                placeholder={props.placeholder}
                name={props.reference}
                value={props.dataForm || ""}
                onChange={(event) => props.myEvent(event, props.indexInput)}
            >
            </input>
        </>
    );
}