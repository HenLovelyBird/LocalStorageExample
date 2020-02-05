import React from "react"
import { connect } from "react-redux"

const mapStateToProps = state => state

function StudentsNumber(props) {
    return(<div>Hello, you have {props.students.length} students in your db</div>)
}

export default connect(mapStateToProps)(StudentsNumber);