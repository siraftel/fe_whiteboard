import React from "react";
import style from "../../../Styling/Components/Icons.module.css";

export default function Icons({ variant }) {
  // style["icon-red"];
  // console.log(style[`icon-${variant}`]);
  return (
    <svg className={`${style.icon} ${style[`icon-${variant}`]}`} width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 0.520874C5.92545 0.520874 6.33348 0.689884 6.63432 0.990724C6.93516 1.29156 7.10417 1.69959 7.10417 2.12504C7.10417 2.55049 6.93516 2.95852 6.63432 3.25936C6.33348 3.5602 5.92545 3.72921 5.5 3.72921C5.07455 3.72921 4.66652 3.5602 4.36568 3.25936C4.06484 2.95852 3.89583 2.55049 3.89583 2.12504C3.89583 1.69959 4.06484 1.29156 4.36568 0.990724C4.66652 0.689884 5.07455 0.520874 5.5 0.520874ZM2.29167 1.66671C2.54833 1.66671 2.78667 1.73546 2.99292 1.85921C2.92417 2.51462 3.11667 3.16546 3.51083 3.67421C3.28167 4.11421 2.82333 4.41671 2.29167 4.41671C1.92699 4.41671 1.57726 4.27184 1.31939 4.01398C1.06153 3.75612 0.916667 3.40638 0.916667 3.04171C0.916667 2.67703 1.06153 2.3273 1.31939 2.06944C1.57726 1.81157 1.92699 1.66671 2.29167 1.66671ZM8.70833 1.66671C9.07301 1.66671 9.42274 1.81157 9.68061 2.06944C9.93847 2.3273 10.0833 2.67703 10.0833 3.04171C10.0833 3.40638 9.93847 3.75612 9.68061 4.01398C9.42274 4.27184 9.07301 4.41671 8.70833 4.41671C8.17667 4.41671 7.71833 4.11421 7.48917 3.67421C7.88878 3.15832 8.07426 2.5083 8.00708 1.85921C8.21333 1.73546 8.45167 1.66671 8.70833 1.66671ZM2.52083 6.36462C2.52083 5.41587 3.85458 4.64587 5.5 4.64587C7.14542 4.64587 8.47917 5.41587 8.47917 6.36462V7.16671H2.52083V6.36462ZM0 7.16671V6.47921C0 5.84212 0.86625 5.30587 2.03958 5.15004C1.76917 5.46171 1.60417 5.89254 1.60417 6.36462V7.16671H0ZM11 7.16671H9.39583V6.36462C9.39583 5.89254 9.23083 5.46171 8.96042 5.15004C10.1337 5.30587 11 5.84212 11 6.47921V7.16671Z"
        fill="white"
      />
    </svg>
  );
}
