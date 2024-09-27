import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import { Button } from '@aws-amplify/ui-react';
import { IoMdAdd } from "react-icons/io";
import AddFaculty from './AddFacultyForm';
import AddQuestion from './AddQuestionForm';
import '../../css/PopupForm.css';

export default function PopupForm({formType, onSubmit, formData, onChange, validate}) {
    // validate is an optional prop, for if we want to add custom validation rules before submitting

    // for displaying dialog
    const ref = React.useRef();

    const onOpen = () => {
        // current?. ensures that ref.current is not null before running showModal()
        ref.current?.showModal();
    };

    const onClose = () => {
        ref.current?.close();
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        // make sure all fields have been filled
        for (const field in formData) {
            if (formData.hasOwnProperty(field)) {
                // empty field
                if (formData[field] === "" || 
                    formData[field] === undefined || 
                    formData[field] === null) {
                    return; // exit, should display errors
                }
            }
        }

        // do other validation (passed in) here
        if (typeof(validate) === "function") {
            validate(formData);
        }

        // we want to close the dialog menu before running user form submission process
        onClose();
        onSubmit();
    };

    const changeHandler = (e, field) => {
        let value = e.currentTarget.value; // pull the value here cuz race conditions!!
        // amplify doesn't always use the same interface for all data types
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }

        onChange((pfd) => {
            const newPfd = {...pfd};
            newPfd[field] = value;
            return newPfd;
        })
    };

    return (
        <React.Fragment>
            <Button onClick={onOpen}><IoMdAdd /></Button>
            <dialog ref={ref}>
                <div className="dialog-internal">
                    <div className="form-container">
                        {formType === "question" && 
                            <AddQuestion
                                formData={formData}
                                onChange={changeHandler}
                            />
                        || formType === "faculty" &&
                            <AddFaculty
                                formData={formData}
                                onChange={changeHandler}
                            />
                        }
                    </div>
                    <div className='button-row'>
                        <Button className='contrast-button' onClick={onFormSubmit}>Submit</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </div>
                </div>
            </dialog>
        </React.Fragment>
    )
}