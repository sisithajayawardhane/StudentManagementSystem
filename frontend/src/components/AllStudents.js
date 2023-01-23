import React, {useState, useEffect} from "react";
import axios from "axios";
import '../App.css';

export default function AllStudents(){

    const [students, setStudents] = useState([]);
    useEffect(()=>{
        function getStudents(){
            axios.get("http://localhost:8070/student/").then((res)=>{
                setStudents(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStudents();
    }, [])

    return(
        <div className="container">
            <hr/>
            <table  width="30%" cellPadding={10}>
                <tbody>
                <tr>
                    <th>Student Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                {
                    students.map((student) => 
                    <tr key={student._id}>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.gender}</td>
                    </tr>
                    
                )
                }
                </tbody>
            </table>
            
            
            
        </div>
    )
}