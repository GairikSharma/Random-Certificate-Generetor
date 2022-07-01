import React, { useState } from "react";
import { ReactDOM } from "react";
import jsPDF from 'jspdf';
import './style.css'
function GeneratePdf() {
    const generate = (e) => {
        e.preventDefault()
        var doc = new jsPDF('l');
        doc.setFillColor('cyan')
        doc.setFontSize(40)
        doc.setFont('Courier-Bold')
        doc.text('Certification Of Completion', '40', '80');
        doc.setFontSize(20)
        doc.setFont('Courier-Bold')
        doc.text('A course on' + `${course}`, '40', '90')
        doc.setFontSize(30)
        doc.setFont('Courier-Bold')
        doc.text(`${name}`, '40', '120');
        doc.save('certificate.pdf');
    }
    const [name, setName] = useState('')
    const n = (e) => {
        setName(e.target.value);
    }
    const [course, setCourse] = useState('')
    const c = (e) => {
        setCourse(e.target.value)
    }
    return (
        <>
            <div className="certificate">
                <h1>Generate Certificate</h1>
                <input type='text' onChange={n} placeholder='Enter your name here...'></input><br></br>
                <input type='text' onChange={c} placeholder='Enter your course here...'></input>
                <h1>{name}</h1>
                <h1>{course}</h1>
                <center><button onClick={generate}>Generate</button></center>
            </div>
        </>
    )
}

export default GeneratePdf;