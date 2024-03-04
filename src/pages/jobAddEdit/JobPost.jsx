import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import JobForm from "./JobForm";
import { api } from "../../api";
import { useNavigate } from "react-router";


const JobPost = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    expiresAt: "",
    companyName: "",
    applyLink: "testlink"
  })


  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const errorMessage = !value ? "This is required field" : "";

    setFormData((prevdata) => ({ ...prevdata, [name]: value }))
    setErrors((preverrors) => ({ ...preverrors, [name]: errorMessage }))

  }

  const validateForm = (formData) => {
    const errors = {}
    const { title, description, category, expiresAt, companyName } = formData;
    if (!title) {
      errors.title = "Title is required";
    }
    if (!description) {
      errors.description = "Description is required";
    }
    if (!category) {
      errors.category = "Category is required";
    }
    if (!expiresAt) {
      errors.expiresAt = "Expiry date is required";
    }
    if (!companyName) {
      errors.companyName = "Company name is required";
    }

    return errors;

  }

  const handlePost = async (event) => {
    event.preventDefault();
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await api("", "POST", JSON.stringify(formData))
        console.log(response);
        const { status, message } = response;
        if (status !== 201) {
          window.alert(message);
          return;
        }
        window.alert(message);
        navigate("/")
      } catch (e) {
        console.log("Error in post job", e.message)
        window.alert(e.message);
      }
    }
    else {
      setErrors((preverrors) => ({ ...preverrors, errors }))
    }

  }

  const handleDescription = (value) => {
    setFormData((prevformdata) => ({ ...prevformdata, description: value }))

  }


  return (
    <>
      <Header />
      <Container className="mt-3 postjob-container">
        <JobForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handlePost}
          errors={errors}
          handleDescription={handleDescription}
          buttonText="Post"
        />
      </Container>
    </>
  )
}

export default JobPost;