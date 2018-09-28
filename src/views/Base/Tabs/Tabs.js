import React, { Component } from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane, FormGroup, Input, Label } from 'reactstrap';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {popupData} from '../../../firebaseConnect'
import PopupContent from '../../../components/PopupContent'
import AddPopup from '../../../components/AddPopup'
import EditPopup from '../../../components/EditPopup'
class Tabs extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      //new
      isEdit: false,
      data:null,
 

      
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
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
    this.props.addData(item)
    
  }



  componentDidMount() {
    // if(this.props.data){
       this.props.data.on('value', (event) => {
      var arrData = [];
      event.forEach(el => {
        const key = el.key;
        const name = el.val().name
        const check_box = el.val().check_box;
        const end_time = el.val().end_time;
        const link_anh = el.val().link_anh;
        const link_landing = el.val().link_landing;
        const start_time = el.val().start_time;
        const tan_suat = el.val().tan_suat;
        const utm_campaign = el.val().utm_campaign;
        const utm_content = el.val().utm_content;
        const utm_medium = el.val().utm_medium
        arrData.push({
          id:key,
          name:name,
          link_anh: link_anh,
          link_landing: link_landing,
          utm_campaign: utm_campaign,
          utm_content: utm_content,
          utm_medium: utm_medium,
          check_box: check_box,
          start_time: start_time,
          end_time: end_time,
          tan_suat: tan_suat,
        })
      });
      this.setState({
        data:arrData
      })
    })    
  }


  render() {
 console.log(this.props.data)
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Danh sách
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Thêm mới
                </NavLink>
              </NavItem>
           
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
          {/*danh sach câc popup*/}
              <TabPane tabId="1">
                {

                  this.props.flag===false?
                  this.state.data!==null?
                  this.state.data.map((item,key) => {
                    return  <PopupContent
                              data={item}
                              key={key}
                            />
                  }):null:
                  <div>
                  <h3>Sửa nội dung {this.props.editData.name}</h3>
                  <EditPopup/>
                  </div>
                }
               
              </TabPane>

            {/*them moi*/}
              <TabPane tabId="2">

                 <h3>Thêm popup mới</h3>
                  <AddPopup/>
              </TabPane> 
            </TabContent>
          </Col>
       
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    editData: state.editData,
    flag: state.flag
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

export default connect(mapStateToProps,mapDispatchToProps)(Tabs)
// export default Tabs;
