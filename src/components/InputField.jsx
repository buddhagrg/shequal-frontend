import { Form } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const InputField = ({ label, type, placeholder, error, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      {type === 'textarea' ?
        <ReactQuill theme="snow" {...rest} /> :
        <Form.Control type={type} placeholder={placeholder} {...rest} />
      }

      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>


  )
}

export default InputField;
