import { Card } from "react-bootstrap"

const DisplayCard = (props) => {
    return (
        <Card>
            <Card.Body>{props.children}</Card.Body>
        </Card>
    )
}

export default DisplayCard;