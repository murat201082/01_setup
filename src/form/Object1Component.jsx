import { useState } from "react"

export const Object1Component = () =>{
 const initialObject1 = {

    id:0,
    name:"Murat",
    salary: 8506

}   
 const initialObject2 = {

    id:0,
    name:"Murat",
    salary: 8506

}   
const [employe,setEmploye] = useState(initialObject1);
const [employe1,setEmploye1] = useState(initialObject2);

const handleSalary = (e) => {
    e.preventDefault();
    setEmploye({
        ...employe,
        salary:e.target.value
    })
}
const handleNaid = (e) => {
    e.preventDefault();
    setEmploye1({
        ...employe1,
        name:e.target.value,
        id:e.target.valeu
    })
}
    return (
        <div>
            
            <h1>İşçi maaşı {employe.salary} </h1>

            <h1>Id {employe1.id} </h1>
            <h1>İşçi Adı {employe1.name} </h1>
            
            
            <form>
                <label htmlFor="proname">Id : </label>
                <input type="number" id="proname" onChange={handleNaid}/><br />
                <label htmlFor="proname">İşçi Adı : </label>
                <input type="text" id="proname" onChange={handleNaid}/><br />
                <label htmlFor="proname" >İşçi Maaşı : </label>
                <input type="number" id="proname" onChange = {handleSalary}/>
            </form>
            
        </div>
    )
}