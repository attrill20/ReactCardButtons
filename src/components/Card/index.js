import "../Button/index"
import Button from "../Button";

function Card (props){
    return (
        <div className="card">
        <h1>Card</h1>
        <p>Check it out!</p>
        <Button someText={props.someText}/>
        <img alt="soc" width={"100%"} src={"https://i.ytimg.com/vi/hHwblpw3grg/maxresdefault.jpg"} />

        

        
        </div>

    );
};

export default Card;
