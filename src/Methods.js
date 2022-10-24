
import 'bulma/css/bulma.min.css';
import { EmailPerson } from './EmailPerson.model';
import React, { useEffect, useState } from "react";

export const Methods = () => { 

    const [formFields, setFormFields] = useState([EmailPerson]);
    const [data, setData] = useState("");
    
    const onChangeEvent = (props) => {
        let data = [...formFields];
         const name = props.event.target.name;
         const value = props.event.target.value;
         data[props.index][name] = value;
        setFormFields(data);

        return formFields;
    }

     const submit = (props) => {
        props.event.preventDefault();
        return setData(JSON.stringify(formFields));
    }


     const addFields = (props) => {
        props.event.preventDefault();
        setFormFields([...formFields, EmailPerson()]);
    }

}

