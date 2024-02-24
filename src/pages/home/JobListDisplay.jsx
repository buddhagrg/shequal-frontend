import { Badge, Card } from "react-bootstrap";
import { BsClock } from "react-icons/bs";
import DisplayCard from "../../components/DisplayCard";

const jobList = [
    {
        id: 1,
        title: "ReactJs developer",
        companyName: "IT Deurali Inc. Pvt. Ltd.",
        expiresAt: "2024-03-24T00:00:00",
        category: "PROGRAMMING"
    },
    {
        id: 2,
        title: "Java Senior developer",
        companyName: "IT Deurali Inc. Pvt. Ltd.",
        expiresAt: "2024-04-24T00:00:00",
        category: "PROGRAMMING"
    },
];

const JobListDisplay = () => {
    return jobList.map(job => {
        return (
            <DisplayCard key={job.id}>
                <div className="d-flex">
                    <div className="me-auto">
                        <Card.Title>{job.title}</Card.Title>
                    </div>
                    <div>
                        <Card.Text>
                            <Badge>{job.category}</Badge>
                        </Card.Text>
                    </div>
                </div>
                <Card.Subtitle>{job.companyName}</Card.Subtitle>
                <BsClock />
            </DisplayCard>
        )
    })
}

export default JobListDisplay;