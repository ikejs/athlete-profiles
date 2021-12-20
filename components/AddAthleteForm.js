import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { genders, sports } from 'constants';
import FileInput from './FileInput';

const AddAthleteForm = ({ onSubmit }) => {
  const {
    register,
    unregister,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Card className="blue-container">
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Row className="mb-3">
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    {...register('athleteName', { required: true })}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={6}>
                  <Form.Control
                    type="date"
                    placeholder="Birthday"
                    {...register('dob', { required: true })}
                  />
                </Col>
                <Col>
                  <Controller
                    control={control}
                    name="gender"
                    render={({ field: { onChange, ref } }) => (
                      <Select
                        placeholder="Gender"
                        inputRef={ref}
                        onChange={({ value }) => onChange(value)}
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
                    {...register('zip', { required: true })}
                  />
                </Col>
                <Col className="d-grid gap-2">
                  <FileInput
                    accept="image/png, image/jpg, image/jpeg, image/pdf"
                    name="photo"
                    register={register}
                    unregister={unregister}
                    setValue={setValue}
                    watch={watch}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Row className="mb-3">
                <Col>
                  <Controller
                    control={control}
                    name="teams"
                    render={({ field: { onChange, ref } }) => (
                      <Form.Control
                        type="text"
                        placeholder="Team Names (ex: Cardinals, Badgers)"
                        inputRef={ref}
                        onChange={({ target: { value } }) =>
                          onChange(value.split(', '))
                        }
                      />
                    )}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Controller
                    control={control}
                    name="sports"
                    render={({ field: { onChange, ref } }) => (
                      <Select
                        placeholder="Sports"
                        inputRef={ref}
                        onChange={(sports) =>
                          onChange(sports.map((sport) => sport.value))
                        }
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
                    {...register('about', { required: true })}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row>
        <Col className="d-grid gap-2">
          <Button size="lg" className="mt-3 blue-btn" type="submit">
            Register
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddAthleteForm;
