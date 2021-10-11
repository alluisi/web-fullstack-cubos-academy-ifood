import "./styles.css"

function Card(props) {
    return (
        <div class="card">
            <img src={props.image} width="250" height="180" alt="Flag" />
            <div className="container">
                <h4><b>{props.name}</b></h4>
            </div>
        </div>
    )
}

export default Card;
