import React, { useState } from "react";
import "./index.css";
import {GrClose} from "react-icons/gr";
import {BiUser} from "react-icons/bi";
import {MdAppRegistration} from "react-icons/md";
import {AiOutlineBook} from "react-icons/ai";
import {CgPerformance} from "react-icons/cg";
import {TbFileInvoice} from "react-icons/tb";
import {BsGraphUp} from "react-icons/bs";
import {AiOutlineAudit} from "react-icons/ai";
import {AiOutlineSetting} from "react-icons/ai";
import {ImExit} from "react-icons/im";

import BtSemDrop from "./botoesMenu/btSemDrop";
import BtComDrop from "./botoesMenu/btComDrop";

export default function Home() {
    const [menuAbrir, setMenuAbrir] = useState(true)

  return (

    <>
    <button onClick={()=>{!menuAbrir ? setMenuAbrir(true) : setMenuAbrir(false)}}>X</button>
      <div className={ "navBar " + (menuAbrir ? "navBarMove" : "")}>
        <BtComDrop
          logo={<BiUser />}
          titulo={"Gestão de Usuario"}
          botoes={[
            <BtSemDrop titulo={"Participantes"} />,
            <BtSemDrop titulo={"Administradores"} />,
          ]}
        />

        <BtComDrop
          logo={<MdAppRegistration />}
          titulo={"Cadastro"}
          botoes={[
            <BtSemDrop titulo={"Banner"} />,
            <BtSemDrop titulo={"Campanha"} />,
            <BtSemDrop titulo={"Produto"} />,
          ]}
        />
        <BtSemDrop logo={<AiOutlineBook />} titulo={"FAQ"} />
        <BtSemDrop logo={<CgPerformance />} titulo={"Desempenho"} />

        <BtSemDrop logo={<TbFileInvoice />} titulo={"Notas Fiscais"} />
        <BtSemDrop logo={<BsGraphUp />} titulo={"Dashboard"} />

        <BtComDrop
          logo={<AiOutlineAudit />}
          titulo={"Gestão de Usuario"}
          botoes={[
            <BtSemDrop titulo={"Recebimento"} />,
            <BtSemDrop titulo={"Reprovada"} />,
            <BtSemDrop titulo={"Liberada"} />,
          ]}
        />
        <BtSemDrop logo={<AiOutlineSetting />} titulo={"Configurar"} />
        <BtSemDrop logo={<ImExit />} titulo={"Sair"} />
      </div>
    </>
  );
}
