import React, {useState} from "react";
import axios from "axios";

export default function AddStudent(){
    const BASE_URL = "https://smmmms.onrender.com/student";
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    function sendData(e){
        e.preventDefault();
        const newStudent ={
            name,
            age,
            gender
        }
        axios.post(`${BASE_URL}/add`, newStudent).then(()=>{
            alert("Student Added");
        }).catch((err)=>{
            alert(err);
        })
    }

    return(
        <div className="container" style={{textAlign: "left"}}>
            <form onSubmit={sendData}>
                <div className="mb-3">
                    <label for="name" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="John Doe"
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                    />
                </div>

                <div className="mb-3">
                    <label for="age" className="form-label">Student Age</label>
                    <input type="text" className="form-control" id="age" placeholder="25"
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}
                    />
                </div>

                <div className="mb-3">
                    <label for="gender" className="form-label">Student Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Male"
                    onChange={(e)=>{
                        setGender(e.target.value);
                    }}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>


            </form>
        </div>
    )
}