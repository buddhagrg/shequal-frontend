import { Form, Row, Col, Button } from "react-bootstrap";
import InputField from "../../components/InputField";
import { JOB_CATEGORIES } from "../../constant";

const JobForm = ({ formData, handleChange, handleSubmit, errors, handleDescription }) => {
  const { title, description, category, expiresAt, companyName } = formData;
  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        label="Title"
        type="text"
        name="title"
        placeholder="Job title"
        value={title}
        onChange={handleChange}
        error={errors.title}
        isInvalid={!!errors.title}
      />

      <InputField
        label="Description"
        type="textarea"
        name="description"
        placeholder="Job description"
        value={description}
        onChange={handleDescription}
        error={errors.description}
        isInvalid={!!errors.description}
      />

      <Row>
        <Col>
          <InputField
            label="Category"
            type="select"
            name="category"
            placeholder="Job category"
            value={category}
            onChange={handleChange}
            error={errors.category}
            isInvalid={!!errors.category}
            as="select">

            <option value="">Select Category</option>

            {JOB_CATEGORIES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}


          </InputField>
        </Col>
        <Col>
          <InputField
            label="Job Expiry Date"
            type="date"
            name="expiresAt"
            placeholder="Job expiry date"
            value={expiresAt}
            onChange={handleChange}
            error={errors.expiresAt}
            isInvalid={!!errors.expiresAt}

          />
        </Col>
      </Row>
      <InputField
        label="Company Name"
        type="text"
        name="companyName"
        placeholder="Company name"
        value={companyName}
        onChange={handleChange}
        error={errors.companyName}
        isInvalid={!!errors.companyName}
      />

      <Button type="submit" size="lg">
        Post
      </Button>

    </Form>
  )
}
export default JobForm;