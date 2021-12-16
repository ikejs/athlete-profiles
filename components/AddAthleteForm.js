import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap';
import sports from 'constants/sports';

const AddAthleteForm = ({ handleSubmit }) => {
  return (
    <Card className="blue-container">
      <Card.Body>
        <Card.Title className="text-light mb-3">
          Basic Info
        </Card.Title>
        <Form>
          <Row className="mb-4">
            <Col>
              <FloatingLabel
                label="First Name"
              >
                <Form.Control 
                  type="text" 
                  placeholder="First Name" 
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                label="Last Name"
              >
                <Form.Control 
                  type="text" 
                  placeholder="Last Name" 
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select aria-label="Gender">
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Non-Binary</option>
              </Form.Select>
            </Col>
            <Col>
              <DropdownMultiselect
                options={sports}
                placeholder="Sports"
                name="sports"
              />
                
              {/* <Form.Control as="select" multiple value={sports}>
                {sports.map(({ name }, i) => (
                  <option key={i} value={name}>
                    {name}
                  </option>
                ))}
            </Form.Control> */}
            </Col>
          </Row>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      </Card.Body>
    </Card>
  )
}

export default AddAthleteForm;
