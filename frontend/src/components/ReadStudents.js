import React, {useState, useEffect} from "react";
import axios from "axios";
import {Table, Button} from 'semantic-ui-react';
import {Link} from "react-router-dom";

export default function ReadStudents(){

    const [students, setStudents] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8070/student/").then((response)=>{
            setStudents(response.data);
        }).catch((err)=>{
            alert(err.message);
        })
    }, [])

    const getLatestData= ()=>{
        axios.get("http://localhost:8070/student/").then((response)=>{
            setStudents(response.data);
        }).catch((err)=>{
            alert(err.message);
        })
    }

    const onDelete = (id)=>{
        axios.delete(`http://localhost:8070/student/delete/${id}`).then(()=>{
            getLatestData();
            alert("entry deleted");
        })
    }

    return(
        <div>
            <Table singleLine >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Student Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        students.map((data)=>{
                            const setData = (data) => {
                                let {_id, name, age, gender} = data;
                                localStorage.setItem('ID', _id);
                                localStorage.setItem('Name', name);
                                localStorage.setItem('Age', age);
                                localStorage.setItem('Gender', gender);

                            }

                            return(
                                <Table.Row key={data._id}>
                                    <Table.Cell >{data.name}</Table.Cell>
                                    <Table.Cell >{data.age}</Table.Cell>
                                    <Table.Cell >{data.gender}</Table.Cell>
                                    <Link to="/update">
                                        <Table.Cell>
                                            <Button inverted color='blue' onClick={() => setData(data)}>Update</Button>
                                        </Table.Cell>
                                    </Link>
                                    <Table.Cell>
                                            <Button inverted color='red' onClick={() => onDelete(data._id)}>Delete</Button>
                                        </Table.Cell>
                                    
                                </Table.Row>
                                
                            )
                        })
                    }
                </Table.Body>
            </Table>
        </div>
    )
}