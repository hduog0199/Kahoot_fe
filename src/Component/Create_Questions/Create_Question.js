import React from 'react'
import './Create_Question.css'
export default function Create_Question(props) {
    const onInputChange = (e) => {
        props.handleChange(props.categoryIndex, e.target.name, e.target.value);
    }
    return (
        <div className="question-field">
            <div className='wrap-field'>
                <label className='width_label'>Question {props.categoryIndex + 1}: </label>
                <input 
                className="nameInput" 
                type="text" 
                name={'question'}
                value={props.question}
                onChange={onInputChange}
            />
            </div>
            <div className='wrap-field'>
                <label className='width_label' >Answer 1: </label>
                <input 
                className="nameInput" 
                type="text" 
                name={'answer_1'}
                value={props.answer_1}
                onChange={onInputChange}
            />
            </div>
            <div className='wrap-field'>
                <label className='width_label'>Answer 2: </label>
                <input 
                className="nameInput" 
                type="text" 
                name={'answer_2'}
                value={props.answer_2}
                onChange={onInputChange}
            />
            </div>
            <div className='wrap-field'>
                <label className='width_label'>Answer 3: </label>
                <input 
                className="nameInput" 
                type="text" 
                name={'answer_3'}
                value={props.answer_3}
                onChange={onInputChange}
            />
            </div>
            <div className='wrap-field'>
                <label className='width_label'>Answer 4: </label>
                <input 
                className="nameInput" 
                type="text" 
                name={'answer_4'}
                value={props.answer_4}
                onChange={onInputChange}
            />
            </div>
            <div className='wrap-field'>
                <label className='width_label'>Correct Answer (1-4) :</label>
                <input 
                className="nameInput" 
                type="number" 
                name={'correct'}
                value={props.correct}
                onChange={onInputChange}
            />
            </div>
        </div>
    )
}
