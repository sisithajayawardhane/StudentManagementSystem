import React, {useState, useEffect} from "react";
import axios from "axios";
import {Button, Form} from "semantic-ui-react";

export default function UpdateStudent(){
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const [_id, setId] = useState(null);

    useEffect(()=>{
        setId(localStorage.getItem('ID'));
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'));
        setGender(localStorage.getItem('Gender'));
    }, []);

    const updatedStudentData = ()=>{
        axios.put(`http://localhost:8070/student/update/${_id}`,{
            name,
            age,
            gender
        }).then(()=>{
            alert("Student data updated");
        }).catch((err)=>{
            alert(err);
        })
    }

    return(
        <div >
            <Form className="create-form container" >
                <Form.Field>
                    <label>Student Name</label>
                    <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Gender</label>
                    <input placeholder='Gender' value={gender} onChange={(e) => setGender(e.target.value)}/>
                </Form.Field>
                
                <Button type='submit' onClick={updatedStudentData}>Update</Button>
            </Form>
        </div>
    )
}