import React, {useEffect, useState} from "react";
import "./index.css";
import {BsChevronDown} from "react-icons/bs";

export default function BtComDrop(props) {
  const [info, setInfo] = useState({titulo: props.titulo, logo: props.logo, botoes: props.botoes});
  const [abreDrop, setAbreDrop] = useState(false);

  useEffect(() => {
    console.log("props", props);
  }, []);

  return (
    <>
      <div className="btSemDrop" onClick={()=>{ abreDrop ? setAbreDrop(false): setAbreDrop(true)}}>
        <div className="logoBtSemDrop">{info?.logo}</div>
        <div className="tituloBtSemDrop">{info.titulo}</div>
        <BsChevronDown style={{position: "absolute", right: 20}} />
      </div>
      {abreDrop && <div className="subMenu">{info.botoes}</div>}
    </>
  );
}
