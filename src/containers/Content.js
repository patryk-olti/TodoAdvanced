import React from "react";
import CourseBox from "../components/CourseBox";

export default class Content extends React.Component{

    state = {
        courses: []
    }

    componentDidMount(){
        fetch('coursesList.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                courses: data.courses
            })
        })
    }

    render(){
        const coursesList = this.state.courses.map(course => (
            <CourseBox
                name={course.name}
                date={course.date}
                author={course.author}
                completed={course.completed}
            />
        ))       
        
        
        return(
            <div className="Content">
                <div className="ContentBox">
                    {coursesList.length > 0 ? coursesList : null}
                </div>"
            </div>
        )
    }
}