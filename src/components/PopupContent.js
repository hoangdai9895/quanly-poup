import React, { Component } from 'react';
import { 
  Badge, 
  CardBody, 
  CardFooter, 
  CardHeader, 
  Col, 
  Collapse,
  Button,
  ButtonDropdown,
  Card,
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
  Row
 } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import {connect} from 'react-redux'
import EditPopup from './EditPopup'

class PopupContent extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      isEdit: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  deletePopup = () => {
    this.props.getDeleteData(this.props.data.id)
  }

  editButton = (e) => {
    // this.setState({isEdit:!this.state.isEdit})
    this.props.changeFlag()
    this.props.getEditData(e)
  }
  
  render() {
    // console.log('props', this.props.data.start_time.slice(8,10) )
    let start_time = this.props.data.start_time
    let end_time = this.props.data.end_time
    return (
      <div className="animated fadeIn">
     
         <Row>
          <Col xs="12" sm="12" md="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader onClick={this.toggle} className='popup-content__header'>
                  {this.props.data.name}
                  <div className="card-header-actions">
                   <Button type="button" size="sm" color="info" className="mr-3" style={{color: 'white'}}
                   onClick={()=>this.editButton(this.props.data)}
                   ><i className="fa fa-wrench " ></i> Sửa</Button>

                   <Button type="button" size="sm" color="danger" className="mr-3"
                  
                    onClick={()=>window.confirm('bạn có muốn xóa')?this.deletePopup():null}
                   ><i className="fa fa-close"></i> Xóa</Button>

                   {/* <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>*/}
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">

                
                {/*  // this.props.data.id!==this.props.editData.id&&
                  // this.props.flag===false?*/}
                   <CardBody>
                    <div className='popup-content row'>
                      <div className='col-sm-8'>
                           <div className="animated fadeIn">
   
                              <ul>
                                <li><strong>Link landing :</strong> {this.props.data.link_landing}</li>
                                <li><strong>Hiển thị nút chi tiết : </strong> 
                                  {
                                    this.props.data.check_box=='hiển thị'? 
                                    <span className="badge badge-success" style={{fontSize: 13}} >{this.props.data.check_box}</span>:
                                    <span className="badge badge-danger" style={{fontSize: 13}} >{this.props.data.check_box}</span>
                                  } 
                                </li>
                                <li><strong>Thời gian hiển thị :</strong> Từ ngày <strong> {start_time.slice(8,10)}-{start_time.slice(5,7)}-{start_time.slice(0,4)}</strong> đến ngày <strong>{end_time.slice(8,10)}-{end_time.slice(5,7)}-{end_time.slice(0,4)}</strong></li>
                                <li><strong>Tần suất hiển thị :</strong> {this.props.data.tan_suat} lần/ngày </li>
                              </ul>

                         </div>
                      </div>
                      <div className='col-sm-4 img-box'>
                             <img src={this.props.data.link_anh} alt="anh" style={{width: '100%'}} />

                      </div>
                    </div>
                  </CardBody>
            
                
                 
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>
   

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flag:state.flag,
    editData: state.editData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     getEditData: (e) => {
        dispatch({
          type: 'GET_EDIT_DATA', e
        })
      },
      editDataStore: (e) => {
        dispatch({
          type: 'EDIT_DATA', e
        })
      },
      getDeleteData: (e) => {
        dispatch({
          type: 'DELETE_DATA', e
        })
      },
      changeFlag: () => {
        dispatch({
          type: 'CHANGE_FLAG'
       })
      }
  }
 
}





export default connect(mapStateToProps,mapDispatchToProps)(PopupContent);
