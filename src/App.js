
import './App.css';
import 'bulma/css/bulma.min.css';
import React, { useEffect, useState } from "react";
import { EmailPerson } from './EmailPerson.model';

function App() {

  const [formFields, setFormFields] = useState([EmailPerson]);

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


  const addFields = (event) => {
    event.preventDefault();
    setFormFields([...formFields, EmailPerson()]);
  }

  return (
    <div className="columns is-desktop">
      <div className="column">
        <div className="column is-half">
          <button onClick={addFields} className="button is-link mt-5">Agregar</button>
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
                  >
                  </input>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
