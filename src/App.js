
import './App.css';
import 'bulma/css/bulma.min.css';
import React, { useEffect, useState } from "react";
import { EmailPerson } from './EmailPerson.model';

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

  useEffect(() => {

    setFormFields(ep);
  }, []);

  const onChangeEvent = (event, index) => {
    let data = [...formFields];
    const name = event.target.name;
    const value = event.target.value;
    data[index][name] = value;
    setFormFields(data);
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
          <form onSubmit={submit} >
            {formFields.map((form, index) => {
              return (
                <div key={index} className="field mt-3">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                      name="emailAddress"
                      value={form.emailAddress || ""}
                      onChange={ (event) => onChangeEvent(event, index)}
                    >
                    </input>
                  </div>
                </div>
              );
            })}
            <button className="button is-link" type='submit'>
              Submit
            </button>
          </form>
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
