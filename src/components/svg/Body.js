import React from "react";

function Body(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 27.02 21"
      xmlSpace="preserve"
      {...props}
    >
      <g transform="matrix(1 0 0 1.107 6.996 -1.095)">
        <path
          strokeWidth="1.189"
          d="M13.011 9.78l-1.799-.257-1.751.205c-1.863.218-6.368 4.48-6.368 7.542v2.262h16.333V17.27c0-3.061-4.168-7.288-6.415-7.49z"
        ></path>
        <path
          strokeWidth="0.933"
          d="M15.26 5.638v-.87c0-1.92-1.791-3.478-4-3.478-2.21 0-4 1.557-4 3.478v.87c0 1.92 1.79 3.478 4 3.478 2.209 0 4-1.557 4-3.478z"
        ></path>
      </g>
      <text
        xmlSpace="preserve"
        style={{ lineHeight: "1.25" }}
        x="0.428"
        y="17.084"
        fill={props.fill && props.fill}
        fillOpacity="1"
        stroke="none"
        fontFamily="Arial"
        fontSize="18.667"
        fontStretch="normal"
        fontStyle="normal"
        fontVariant="normal"
        fontWeight="bold"
      >
        <tspan x="0.428" y="17.084" fontSize="18.667">
          &gt;
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{ lineHeight: "1.25" }}
        x="14.895"
        y="19.987"
        fill="currentColor"
        fontFamily="Arial"
        fontSize="12"
        fontStretch="normal"
        fontStyle="normal"
        fontVariant="normal"
        fontWeight="bold"
      >
        <tspan x="14.895" y="19.987">
          { (!!props.amount && ( props.amount > 9) || (props.amount < 1) ) ? '' :  props.amount }
        </tspan>
      </text>
    </svg>
  );
}

export default Body;

/* const [luggage, setLuggage] = useState(false)
    const [specialLuggage, setSpecialLuggage] = useState(false)
    const [animal, setAnimal] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [delivery, setDeliviry] = useState(false)
    const [airport, setAirport] = useState(false)
 */