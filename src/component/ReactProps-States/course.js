import React from "react";
import DisplayNote from "./displayNote";
const Course = ()=>{
    let courses = [
        {
            name:"Fundamental of React",
            exercises:10,
            id:1
        },
        {
            name:"Using Props to pass data",
            exercises: 7,
            id:2
        },
        {
            name: "State of a component",
            exercises: 14,
            id:3
        }
    ]

    return (
        <div>
            <ul>
                {courses.map(course=>
                    <DisplayNote key={course.id} name={course.name}></DisplayNote>
                )}
            </ul>
        </div>
    )
}
export default Course;