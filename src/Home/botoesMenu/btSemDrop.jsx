import React, {useEffect, useState} from "react";
import "./index.css";

export default function BtSemDrop(props) {
  const [info, setInfo] = useState({titulo: props.titulo, logo: props?.logo});

  useEffect(() => {
    console.log("props", props);
  }, []);
  return (
    <>
      <div className="btSemDrop">
        <div className="logoBtSemDrop">{info?.logo}</div>
        <div className="tituloBtSemDrop">{info.titulo}</div>
      </div>
    </>
  );
}
