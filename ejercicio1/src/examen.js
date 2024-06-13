
function Dylan(props)
{
    return(
        <div className="caja1">
            <div className="caja2">
                <h1>Nombre: {props.nom}</h1>
                <h2>Tipo: {props.tip}</h2> 
            </div>
            <div className="caja3">
                <p>Origen: {props.origen}    Descripcion: {props.desc}</p>
            </div>
            <div className="caja4">
                <img className="dib" src={props.ilus} />
            </div>

        </div>
    );

}
export default Dylan; 