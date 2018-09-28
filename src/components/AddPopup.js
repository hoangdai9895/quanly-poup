import React, { Component } from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane, FormGroup, Input, Label, Card, Form, FormText, CardFooter, Button, CardBody} from 'reactstrap';
import classnames from 'classnames';
import {connect} from 'react-redux';


class AddPopup extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  isChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value)
    this.setState({
   
        [name]: value
    
    })
  
  }

  addPopup = (name,link_anh,link_landing,utm_campaign,utm_content,utm_medium,check_box,start_time,end_time,tan_suat) => {
    var item = {}
    item.name = name
    item.link_anh = link_anh
    item.link_landing = link_landing
    item.utm_campaign = utm_campaign
    item.utm_content = utm_content
    item.utm_medium = utm_medium
    item.check_box = check_box
    item.start_time = start_time
    item.end_time = end_time
    item.tan_suat = tan_suat
    // console.log('item', item)
    this.props.addData(item)
    alert('Thêm mới thành công')
  }

  render() {
 	// console.log('du lieu', this.state)
    return (
      <div className="animated fadeIn">
         <Row>
          <Col xs="12" md="12">
            <Card>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="name">Tên Popup</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="Tên Popup" 
                       onChange={(e)=>this.isChange(e)}
                      />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>

               	  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="link_anh">Link ảnh</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="link_anh" name="link_anh" placeholder="Link ảnh" 
                       onChange={(e)=>this.isChange(e)}
                      />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="link_landing">Link landing</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="link_landing" name="link_landing" placeholder="Link landing" 
                       onChange={(e)=>this.isChange(e)}
                      />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                 
                 <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="utm_campaign">UTM campaign</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="utm_campaign" name="utm_campaign" placeholder="UTM campaign" 
                       onChange={(e)=>this.isChange(e)}
                      />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="utm_content">UTM content</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="utm_content" name="utm_content" placeholder="UTM content" 
                       onChange={(e)=>this.isChange(e)}
                      />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="utm_medium">UTM medium</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="utm_medium" name="utm_medium" placeholder="UTM medium" 
                       onChange={(e)=>this.isChange(e)}
                      />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>

                   <FormGroup row>
                    <Col md="3">
                      <Label>Hiển thị nút check box</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="check_box" name="check_box" value="hiển thị" 
                        onChange={(e)=>this.isChange(e)}/>
                        <Label className="form-check-label" check htmlFor="inline-radio1">hiển thị </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="check_box" name="check_box" value="không hiển thị" 
                        onChange={(e)=>this.isChange(e)}/>
                        <Label className="form-check-label" check htmlFor="inline-radio2">không hiển thị</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="start_time">Start time</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="start_time" name="start_time" placeholder="start time" 
                      onChange={(e)=>this.isChange(e)}/>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="end_time">End time</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="end_time" name="end_time" placeholder="end time" 
                      onChange={(e)=>this.isChange(e)}/>
                    </Col>
                  </FormGroup>
              
                 <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="tan_suat">Tần suất xuất hiện</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="tan_suat" id="tan_suat"
                      	onChange={(e)=>this.isChange(e)}
                      >
                        <option value="0">Please select</option>
                        <option value="1">1 </option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                      </Input>
                    </Col>
                  </FormGroup>
          
              
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"
                className="mr-3"
                	 onClick={()=>this.addPopup(
                                          this.state.name,
                                          this.state.link_anh,
                                          this.state.link_landing,
                                          this.state.utm_campaign,
                                          this.state.utm_content,
                                          this.state.utm_medium,
                                          this.state.check_box,
                                          this.state.start_time,
                                          this.state.end_time,
                                          this.state.tan_suat,
                                          )}

                ><i className="fa fa-dot-circle-o"></i> Lưu</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Hủy</Button>
              </CardFooter>
            </Card>
         
          </Col>
         
        </Row>
      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    editData: state.editData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addData: (e) => {
      dispatch({
        type: 'ADD_DATA', e
      })
    }
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPopup)
// export default Tabs;
