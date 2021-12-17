import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Select from 'react-select';
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import { Controller, useForm } from 'react-hook-form';
import { genders, sports } from 'constants';

const AddAthleteForm = ({ onSubmit }) => {

  const { register, handleSubmit, control, watch, formState: { errors } } = useForm();

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card className="blue-container">
          <Card.Body>
            <Row className="mb-3">
              {/* <Col>
                <Card.Title className="text-light mb-3">
                  Basic Info
                </Card.Title>
              </Col> */}
              <Col>
                <Row className="mb-3">
                  <Col>
                    <Form.Control 
                      type="text" 
                      placeholder="Name" 
                      {...register("athleteName", { required: true })}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col xs={6}>
                    <Form.Control 
                      type="date" 
                      placeholder="Birthday" 
                      {...register("dob", { required: true })}
                    />
                  </Col>
                  <Col>
                    <Controller
                      control={control}
                      name="gender"
                      render={({ field: { onChange, value, ref }}) => (
                        <Select
                          placeholder="Gender"
                          inputRef={ref}
                          // onChange={(val) => onChange(val.map(c => c.value))}
                          options={genders}
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control 
                      type="num" 
                      placeholder="ZIP" 
                      {...register("zip", { required: true })}
                    />
                  </Col>
                  <Col className="d-grid gap-2">
                    <Uploady destination={{ url: "/upload" }} >
                      <UploadButton text="Upload Image" className="btn btn-dark" />
                  </Uploady>
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row>
              {/* <Col>
                <Card.Title className="text-light mb-3">
                  About
                </Card.Title>
              </Col> */}
              <Col>
                <Row className="mb-3">
                  <Col>
                    <Form.Control 
                      type="text" 
                      placeholder="Team Name(s)" 
                      {...register("teamName", { required: true })}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Controller
                      control={control}
                      name="sports"
                      render={({ field: { onChange, value, ref }}) => (
                        <Select
                          placeholder="Sports"
                          inputRef={ref}
                          // onChange={(val) => onChange(val.map(c => c.value))}
                          options={sports}
                          isMulti
                        />
                      )}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      placeholder="About you" 
                      {...register("about", { required: true })}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Row>
          <Col className="d-grid gap-2">
            <Button size="lg" className="mt-3 blue-btn">Register</Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default AddAthleteForm;
