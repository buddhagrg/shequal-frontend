import { Card } from "react-bootstrap";
import { BsClock } from "react-icons/bs";
import DisplayCard from "../../components/DisplayCard";
import JobCategory from "../../components/JobCategory";
import { getDaysLeft } from "../../util";
import { Link } from "react-router-dom";

const JobListDisplay = (props) => {
    const jobList = props.jobList;
    return jobList.map(job => {
        return (
            <DisplayCard key={job.id}>
                <div className="d-flex">
                    <div className="me-auto">
                        <Card.Title>
                            <Link to={`/viewjobdetail/${job.id}`} className="job-list-title-link">{job.title}</Link>
                        </Card.Title>
                    </div>
                    <div>
                        <Card.Text>
                            <JobCategory category={job.category} />
                        </Card.Text>
                    </div>
                </div>
                <Card.Subtitle className="mb-2 text-muted">{job.companyName}</Card.Subtitle>
                <BsClock />
                <small className="text-muted ms-2">{getDaysLeft(job.expiresAt)}</small>
            </DisplayCard>
        )
    })
}

export default JobListDisplay;