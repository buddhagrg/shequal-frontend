import { Badge } from "react-bootstrap";

const JobCategory = (props) => {
    return (
        <Badge className="badge-bg">{props.category}</Badge>
    )
}

export default JobCategory;