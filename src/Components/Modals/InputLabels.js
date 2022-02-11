// import { MultiSelect, Select } from "@mantine/core";
import React from "react";
import { MultiSelect } from '@mantine/core';

const data = [
    { value: 'marketing', label: 'Marketing' },
    { value: 'finance', label: 'Finance' },
    { value: 'copywriting', label: 'Copy Writing' },
    { value: 'ui/ux', label: 'UI/UX' },
    { value: 'frontend', label: 'Front End' },
    { value: 'backend', label: 'Back End' },
    { value: 'qa', label: 'QA' },
];

function InputLabels() {
    return (
        <MultiSelect
        zIndex={9999}
        maxSelectedValues={1}
        data={data}
        placeholder="Pick label"
        />
    );
}


// function InputLabels() {

//     var Labelsname=[
//         {
//             value:1,
//             image: (profile),
//             label: "Marketing"
//         },
//         {
//             value:2,
//             image: (profile),
//             label: "Finance"
//         },
//         {
//             value:3,
//             image: (profile),
//             label: "Copy Writing"
//         },
//         {
//             value:4,
//             image: (profile),
//             label: "Frontend"
//         },
//         {
//             value:5,
//             image: (profile),
//             label: "Backend"
//         },
//         {
//             value:6,
//             image: (profile),
//             label: "QA"
//         },
//     ];

//     return(
//         <div>
//             <Select placeholder="Select Label" className="label" isMulti options={Labelsname}></Select>
//         </div>
//     );
// }

export default InputLabels;