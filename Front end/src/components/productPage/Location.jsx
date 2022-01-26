export default function Location(props){
    return(
        <div className= "location">
            <h3>Retira tu auto por{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}