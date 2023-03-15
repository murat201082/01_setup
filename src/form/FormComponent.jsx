import { useState } from "react"

export const FormComponent = () => {

    const initialCompany = 'Godoro';

    const companyChanced = (e) => {
        e.preventDefault();
        // alert("Değişti" + e.target.value)
        setCompany(e.target.value);
    }

    const [company, setCompany] = useState(initialCompany);

    return (
        <>
        
        <form className="form">
            <h2>Biçim Örneği</h2>
            <div className="form-conrol">
            Kurum : <input type="text" name="Company" value = {company} onChange={companyChanced} /> <br />
            değer :  <p className="text-danger">{company}</p> <br />
            <input className="btn btn-info" type="submit" value="Sakla" />
            </div>
        </form>
        </>
    )
}