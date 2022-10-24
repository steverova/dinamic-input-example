import { CustomInput } from "./CustomInput.component";

export const CustomForm = (props) => {
  return (
    <>
      <form onSubmit={props.submit}>
        {props.formFields.map((form, index) => {
          return (
            <div key={index} className="field mt-3">
              <div className="control">
                <CustomInput
                  myEvent={props.onChangeEvent}
                  placeholder="custom message"
                  reference="emailAddress"
                  dataForm={form.emailAddress}
                  inputType={props.InputType}
                  indexInput={index}
                ></CustomInput>
              </div>
            </div>
          );
        })}
        <button className="button is-link" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
