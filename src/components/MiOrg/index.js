// import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {

   // const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () => {
        //Estado - hooks
        //useState
        //useState()
        //actualizarMostrar(!mostrar)
   // }

    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostra} />
    </section>
};

export default MiOrg;