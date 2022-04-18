/**
 * Composotion of components : wrapper components
 * The value of the props.clilden will alwase be the 
 * content between your custom component.
 * 
 * here props.children refers to the content between the 
 * Card when we will use them
 *  
 */
import './Card.css'

function Card(props){
    const classes = 'card ' + props.className; // to apply the class properties 
    return(
        <div className={classes}>{props.children}</div> // pass calss name as argument
    )
}

export default Card;