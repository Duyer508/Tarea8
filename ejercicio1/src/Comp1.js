function  Lista(props){
    return(
        <div className="cajon">
            <h1>lista: {props.noml}</h1>
            <p>{props.tip}</p> 
            <p>{props.tip2}</p>
            <p>{props.tip3}</p>
        </div>
        
    );
}
export default Lista; 