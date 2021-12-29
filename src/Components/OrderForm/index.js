import { useState } from 'react';
import './OrderForm.css'
function OrderForm(){

    let [nume,setNume] = useState("")
    var inNume = function(e){
        setNume(e.target.value)
    }

    let [prenume,setPrenume] = useState("")
    var inPrenume = function(e){
        setPrenume(e.target.value)
    }

    let [telefon,setTelefon] = useState("")
    var inTelefon = function(e){
        setTelefon(e.target.value)
    }

    let [email,setEmail] = useState("")
    var inEmail = function(e){
        setEmail(e.target.value)
    }

    let [adresa,setAdresa] = useState("")
    var inAdresa = function(e){
        setAdresa(e.target.value)
    }
    return(
        <form>
            <label>Nume</label>
            <input type="text" onChange={inNume}/>
            <label>Prenume</label>
            <input type="text" onChange={inPrenume}/>
            <label>Telefon</label>
            <input type="text" onChange={inTelefon}/>
            <label>Email</label>
            <input type="email" onChange={inEmail}/>
            <label>Adresa</label>
            <input type="text" onChange={inAdresa}/>
            <p>Metoda de plata</p>
            <div>
            <input type="radio" value="card" name="payment"/>
            <label>card</label>
            </div>
            <div>
            <input type="radio" value="card" name="payment"/>
            <label>cash</label>
            </div>
            <input type="submit"/>

            <div>{telefon}</div>
            
            
        </form>
    );
}


export default OrderForm