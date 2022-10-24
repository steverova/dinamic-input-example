export const CustomInput = (props) => {
  return (
    <>
      <input
        className="input"
        type={props.inputType[1]}
        placeholder={props.placeholder}
        name={props.reference}
        value={props.dataForm || ""}
        onChange={(event) => props.myEvent(event, props.indexInput)}
      ></input>
    </>
  );
};
