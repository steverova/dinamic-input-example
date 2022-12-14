
import './App.css';
import 'bulma/css/bulma.min.css';
import React, { useEffect, useState } from "react";
import { EmailPerson } from './EmailPerson.model';
import { CustomForm } from './CustomForm.component';

function App() {

  const [formFields, setFormFields] = useState([EmailPerson]);
  const [data, setData] = useState("");

  const ep = [
    {
      emailAddress: "someOne@domain.com",
      emailAddressID: 12
    },
    {
      emailAddress: "somebody@domain.com",
      emailAddressID: 10
    }
  ]

  const inputTypes = ["text", "email", "textarea", "password", "date", "number"];

  useEffect(() => {

    setFormFields(ep);
  }, []);

  const onChangeEvent = (event, index) => {
    // let data = [...formFields];
    const name = event.target.name;
    const value = event.target.value;
    console.log([...formFields][index][name]);
    [...formFields][index][name] = value;
    setFormFields([...formFields]);
  }

  const submit = (event) => {
    event.preventDefault();
    setData(JSON.stringify(formFields));
  }

  const addFields = (event) => {
    event.preventDefault();
    setFormFields([...formFields, EmailPerson()]);
  }

  return (
    <div className="columns is-desktop">
      <div className="column">
        <div className="column is-half">
          <button onClick={addFields} className="button is-link mt-5">Agregar</button>
          <CustomForm
            submit={submit}
            formFields={formFields}
            onChangeEvent={onChangeEvent}
            InputType={inputTypes}
          ></CustomForm>
          <div className='columns m-4'>
            <p>
              {data}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
