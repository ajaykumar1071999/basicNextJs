'use client'
import { Fragment, useState } from "react";

const RegisterPage = () => {
    const [formValues, setFormValues] = useState({ mobiles: [{ personName: "", mobile: "" }] })
    
    const handleChange = (e, index) => {
        const { name, value } = e.target
        const values = [...formValues?.mobiles]
        console.log(values)
        values[index][name] = value
        setFormValues({ mobiles: values })
    }

    const handleNewFields = () => {
        const fields = [...formValues?.mobiles]
        const newFields = {
            personName: "",
            mobile: ""
        }
        fields?.push(newFields)

        setFormValues((pre) => ({
            ...pre,
            mobiles: fields
        }))
    }

    const handleDelete = (index) => {
        const values = [...formValues?.mobiles]
        values?.splice(index, 1)
        setFormValues({ mobiles: values })
    }
    return (
        <div>
            <h1>This is Registration page.</h1>
            {formValues?.mobiles?.map((item, index) => (
                <Fragment key={index}>
                    <div>
                        <label>Person Name{index + 1}</label>
                        <input name="personName" type="text" value={item?.personName} onChange={(e) => { handleChange(e, index) }} />
                    </div>
                    <br />
                    <div>
                        <label>Person Mobile</label>
                        <input name="mobile" type="text" value={item?.mobile} onChange={(e) => { handleChange(e, index) }} />
                        {formValues?.mobiles?.length > 1 && (<button onClick={(e) => { handleDelete(index) }}>Delete Fields</button>)}

                    </div>
                </Fragment>
            ))}
            <button onClick={handleNewFields}>Add new</button>
        </div>
    )
}


export default RegisterPage;