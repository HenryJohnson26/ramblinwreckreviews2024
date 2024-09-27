import * as React from 'react';
import { CheckboxField, TextField, TextAreaField, Radio, RadioGroupField } from '@aws-amplify/ui-react';
import Tooltip from "./Tooltip.jsx";

export default function AddQuestion({formData, onChange}) {
    /*  formData format:
        title: string
        type: bool/string ("mcq", "frq")
        content: string
        isMandatory: bool
    */

    return (
        <React.Fragment>
            <TextField
                label="Question Title"
                value={formData["title"] ?? ''}
                onChange={(e) => {onChange(e, "title")}}
            />
            <CheckboxField
                margin="10px"
                label={<div style={{display: "flex", flexDirection: "row"}}>Mandatory<Tooltip tooltip="Mandatory questions are required to be on ALL department surveys"/></div>}
                name="isMandatory"
                value={formData["isMandatory"] ?? false}
                onChange={(e) => {onChange(e, "isMandatory")}}
            />
            <TextAreaField
                label="Question"
                value={formData["content"] ?? ''}
                onChange={(e) => {onChange(e, "content")}}
            />
            <RadioGroupField 
                legend="Question Type"
                name="Question Type"
                value={formData["type"] ?? ''}
                onChange={(e) => {onChange(e, "type")}}
            >
                <Radio value="mcq">Multiple Choice</Radio>
                <Radio value="frq">Short Answer</Radio>
            </RadioGroupField>
        </React.Fragment>
    )
}