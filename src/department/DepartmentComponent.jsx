import { useState } from "react";

export const DepartmentComponent = () =>{


    const initialDepartment = 'Department';

    const departmentChanced = (e) => {
        e.preventDefault();
        // alert("Değişti" + e.target.value)
        setDepartment(e.target.value);
    }

    const save = (e) => {
        e.preventDefault();
        alert('Saklanıyor' + department)
    }

    const [department, setDepartment] = useState(initialDepartment);
    return (
        <>
    
        <form className="form" onSubmit = {save}>
            <h2>Department Örneği</h2>
            <div className="form-conrol">
            Kurum : <input type="text" name="Company" value = {department} onChange={departmentChanced} /> <br />
            değer :  <p className="text-danger">{department}</p> <br />
            <input className="btn btn-info" type="submit" value="Sakla" />
            </div>
        </form>
        
        
        </>
    )
}