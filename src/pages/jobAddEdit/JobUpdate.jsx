import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { Container } from "react-bootstrap";
import JobForm from "./JobForm";
import { api } from "../../api";


const JobUpdate = () => {
  const { jobDetails } = useLocation().state;
  const navigate = useNavigate();

  const [jobDetailState, setJobDetailState] = useState({ ...jobDetails });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setJobDetailState((prev) => ({ ...prev, [name]: value }));

  }

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await api(`/${jobDetailState.id}`, "PATCH", JSON.stringify(jobDetailState));
      console.log(response)
      const { status, message } = response;
      if (status !== 202) {
        window.alert(message)
        return;
      }

      window.alert(message);
      navigate("/")
    } catch (e) {
      window.alert(e.message);
    }
  }

  const handleDescription = (value) => {
    setJobDetailState((prevformdata) => ({ ...prevformdata, description: value }))

  }


  return (
    <>
      <Header />
      <Container className="mt-3 postjob-container">
        <JobForm
          formData={jobDetailState}
          handleChange={handleChange}
          handleSubmit={handleUpdate}
          errors={errors}
          handleDescription={handleDescription}
          buttonText="Update"
        />
      </Container>
    </>
  )
}

export default JobUpdate;