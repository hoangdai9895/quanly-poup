import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Basic Form</strong> Elements
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label>Static</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">Username</p>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Text Input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Email Input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                      <FormText className="help-block">Please enter your email</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                      <FormText className="help-block">Please enter a complex password</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date Input <Badge>NEW</Badge></Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="date" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="disabled-input">Disabled Input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="disabled-input" name="disabled-input" placeholder="Disabled" disabled />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Textarea</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Select</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Select Large</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="selectLg" id="selectLg" bsSize="lg">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectSm">Select Small</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="selectSm" id="SelectLm" bsSize="sm">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                        <option value="4">Option #4</option>
                        <option value="5">Option #5</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="disabledSelect">Disabled Select</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="disabledSelect" id="disabledSelect" disabled autoComplete="name">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="multiple-select">Multiple select</Label>
                    </Col>
                    <Col md="9">
                      <Input type="select" name="multiple-select" id="multiple-select" multiple>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                        <option value="4">Option #4</option>
                        <option value="5">Option #5</option>
                        <option value="6">Option #6</option>
                        <option value="7">Option #7</option>
                        <option value="8">Option #8</option>
                        <option value="9">Option #9</option>
                        <option value="10">Option #10</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Radios</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                        <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                      </FormGroup>
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                        <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                      </FormGroup>
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                        <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Inline Radios</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">One</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                        <Label className="form-check-label" check htmlFor="inline-radio2">Two</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="option3" />
                        <Label className="form-check-label" check htmlFor="inline-radio3">Three</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3"><Label>Checkboxes</Label></Col>
                    <Col md="9">
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                        <Label check className="form-check-label" htmlFor="checkbox1">Option 1</Label>
                      </FormGroup>
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                        <Label check className="form-check-label" htmlFor="checkbox2">Option 2</Label>
                      </FormGroup>
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                        <Label check className="form-check-label" htmlFor="checkbox3">Option 3</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Inline Checkboxes</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                        <Label className="form-check-label" check htmlFor="inline-checkbox1">One</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                        <Label className="form-check-label" check htmlFor="inline-checkbox2">Two</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                        <Label className="form-check-label" check htmlFor="inline-checkbox3">Three</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">File input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-multiple-input">Multiple File input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-multiple-input" name="file-multiple-input" multiple />
                    </Col>
                  </FormGroup>
                  <FormGroup row hidden>
                    <Col md="3">
                      <Label className="custom-file" htmlFor="custom-file-input">Custom file input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Label className="custom-file">
                        <Input className="custom-file" type="file" id="custom-file-input" name="file-input" />
                        <span className="custom-file-control"></span>
                      </Label>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <strong>Inline</strong> Form
              </CardHeader>
              <CardBody>
                <Form action="" method="post" inline>
                  <FormGroup className="pr-1">
                    <Label htmlFor="exampleInputName2" className="pr-1">Name</Label>
                    <Input type="text" id="exampleInputName2" placeholder="Jane Doe" required />
                  </FormGroup>
                  <FormGroup className="pr-1">
                    <Label htmlFor="exampleInputEmail2" className="pr-1">Email</Label>
                    <Input type="email" id="exampleInputEmail2" placeholder="jane.doe@example.com" required />
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Horizontal</strong> Form
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="hf-email" name="hf-email" placeholder="Enter Email..." autoComplete="email" />
                      <FormText className="help-block">Please enter your email</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-password">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="hf-password" name="hf-password" placeholder="Enter Password..." autoComplete="current-password"/>
                      <FormText className="help-block">Please enter your password</FormText>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <strong>Normal</strong> Form
              </CardHeader>
              <CardBody>
                <Form action="" method="post">
                  <FormGroup>
                    <Label htmlFor="nf-email">Email</Label>
                    <Input type="email" id="nf-email" name="nf-email" placeholder="Enter Email.." autoComplete="email"/>
                    <FormText className="help-block">Please enter your email</FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="nf-password">Password</Label>
                    <Input type="password" id="nf-password" name="nf-password" placeholder="Enter Password.." autoComplete="current-password"/>
                    <FormText className="help-block">Please enter your password</FormText>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                Input <strong>Grid</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col sm="3">
                      <Input type="text" placeholder=".col-sm-3" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="4">
                      <Input type="text" placeholder=".col-sm-4" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="5">
                      <Input type="text" placeholder=".col-sm-5" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="6">
                      <Input type="text" placeholder=".col-sm-6" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="7">
                      <Input type="text" placeholder=".col-sm-7" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="8">
                      <Input type="text" placeholder=".col-sm-8" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="9">
                      <Input type="text" placeholder=".col-sm-9" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="10">
                      <Input type="text" placeholder=".col-sm-10" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="11">
                      <Input type="text" placeholder=".col-sm-11" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="12">
                      <Input type="text" placeholder=".col-sm-12" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-user"></i> Login</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                Input <strong>Sizes</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Label sm="5" size="sm" htmlFor="input-small">Small Input</Label>
                    <Col sm="6">
                      <Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder=".form-control-sm" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm="5" htmlFor="input-normal">Normal Input</Label>
                    <Col sm="6">
                      <Input type="text" id="input-normal" name="input-normal" placeholder="Normal" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm="5" size="lg" htmlFor="input-large">Large Input</Label>
                    <Col sm="6">
                      <Input bsSize="lg" type="text" id="input-large" name="input-large" className="input-lg" placeholder=".form-control-lg" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
       
      </div>
    );
  }
}

export default Forms;
