import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
class TabItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false

    };
  }

  isEdit = (e) => {
    this.setState({
      isActive: !this.state.isActive
    })
    console.log(this.props.data)
    this.props.getEditData(e)
     if(this.props.editData){
    console.log('aaaaaaaaaa')
    this.setState({
      id:this.props.editData.id,
      name:this.props.editData.name,
      link_anh:this.props.editData.link_anh,
      link_landing:this.props.editData.link_landing,
      utm_campaign:this.props.editData.utm_campaign,
      utm_content:this.props.editData.utm_content,
      utm_medium:this.props.editData.utm_medium,
      start_time:this.props.editData.start_time,
      end_time:this.props.editData.end_time,
      tan_suat:this.props.editData.tan_suat,
      check_box:this.props.editData.check_box
    })
   }
  }

  editDataToFirebase = () => {
    this.setState({
      isActive:!this.state.isActive
    })
    if(this.state.id){
      var obj = {}
      obj.id = this.state.id,
      obj.name = this.state.name,
      obj.link_anh = this.state.link_anh,
      obj.link_landing = this.state.link_landing,
      obj.utm_campaign = this.state.utm_campaign,
      obj.utm_content = this.state.utm_content,
      obj.utm_medium = this.state.utm_medium,
      obj.start_time = this.state.start_time,
      obj.end_time = this.state.end_time,
      obj.tan_suat = this.state.tan_suat,
      obj.check_box = this.state.check_box
      this.props.editDataStore(obj)
    }
    
  }

   isChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]: value
    })
  }

  deletaData = () => {
    this.props.getDeleteData(this.props.data.id)
  }
 
 componentWillReceiveProps(nextProps) {
   
 
   if(nextProps.editData!==this.props.editdata){
    console.log('aaaaaaaaaa')
    this.setState({
      id:nextProps.editData.id,
      name:nextProps.editData.name,
      link_anh:nextProps.editData.link_anh,
      link_landing:nextProps.editData.link_landing,
      utm_campaign:nextProps.editData.utm_campaign,
      utm_content:nextProps.editData.utm_content,
      utm_medium:nextProps.editData.utm_medium,
      start_time:nextProps.editData.start_time,
      end_time:nextProps.editData.end_time,
      tan_suat:nextProps.editData.tan_suat,
      check_box:nextProps.editData.check_box
    })
   }
 }

  render() {
    console.log(this.props.editdata)
    console.log(this.state)
    return (
      <div className='row'>
        <table className="table col" >
            <thead className="thead-dark">
              <tr>
                <th scope="col" colSpan={2}>{this.props.data.name}

                   <div className=" fl-r" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-warning mr-1"
                      onClick={()=>this.isEdit(this.props.data)}  
                      >Sửa</button>
                    <button type="button" className="btn btn-danger"
                      onClick={()=>this.deletaData()}
                    >Xóa</button>
                   
                  </div>

                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Link ảnh</th>
                <td>{this.props.data.link_anh}</td>
              </tr>
              <tr>
                <th scope="row">Link landing</th>
                <td>{this.props.data.link_landing}</td>
              </tr>
              <tr>
                <th scope="row">utm campaign</th>
                <td>{this.props.data.utm_campaign}</td>
              </tr>
              <tr>
                <th scope="row">utm content</th>
                <td>{this.props.data.utm_content}</td>
              </tr>
              <tr>
                <th scope="row">utm medium</th>
                <td>{this.props.data.utm_medium}</td>
              </tr>
              <tr>
                <th scope="row">check box</th>
                <td>{this.props.data.check_box==true?'true':'false'}</td>
              </tr>
              <tr>
                <th scope="row">start time</th>
                <td>{this.props.data.start_time}</td>
              </tr>
              <tr>
                <th scope="row">end time</th>
                <td>{this.props.data.end_time}</td>
              </tr>
              <tr>
                <th scope="row">tần suất</th>
                <td>{this.props.data.tan_suat}</td>
              </tr>
      </tbody>
    </table>
    {
      this.state.isActive==true?
       <div className="col-sm-4">
              <h3>Sửa</h3>
              <form>
              <div className="form-group">

                 <label htmlFor="Name">Name</label>
                <input 
                onChange={(e)=>this.isChange(e)}
                type="text" name id="Name" name="name" className="form-control" placeholder="Tên của popup" aria-describedby="helpId"
                defaultValue={this.props.editData.name}
                />

                <label htmlFor="link_anh">Link ảnh</label>
                <input 
                onChange={(e)=>this.isChange(e)}
                type="text" name id="link_anh" name="link_anh" className="form-control" placeholder="Link ảnh" aria-describedby="helpId" 
                 defaultValue={this.props.editData.link_anh}
                />

                <label htmlFor="link_landing">Link landing</label>
                <input 
                onChange={(e)=>this.isChange(e)}
                type="text" name id="link_landing" name="link_landing" className="form-control" placeholder="Link landing" aria-describedby="helpId" 
                defaultValue={this.props.editData.link_landing}
                />
          
                <label htmlFor="utm_campaign">UTM campaign</label>
                <input 
                onChange={(e)=>this.isChange(e)}
                type="text" name id="utm_campaign" name="utm_campaign" className="form-control" placeholder="UTM campaign" aria-describedby="helpId" 
                defaultValue={this.props.editData.utm_campaign}
                />

                <label htmlFor="utm_content">UTM content</label>
                <input 
                onChange={(e)=>this.isChange(e)}
                type="text" name id="utm_content" name="utm_content" className="form-control" placeholder="UTM content" aria-describedby="helpId" 
                defaultValue={this.props.editData.utm_content}
                />

                <label htmlFor="utm_medium">UTM medium</label>
                <input 
                onChange={(e)=>this.isChange(e)}
                type="text" name id="utm_medium" name="utm_medium" className="form-control" placeholder="UTM medium" aria-describedby="helpId" 
                defaultValue={this.props.editData.utm_medium}
                />

                <label htmlFor="check_box">Check box</label>
                <input 
                onChange={(e)=>this.isChange(e)}
                type="text" name id="check_box" name="check_box" className="form-control" placeholder="Check box" aria-describedby="helpId" 
                defaultValue={this.props.editData.check_box}
                />

                 <label htmlFor="start_time">Start time</label>
                <input 
                onChange={(e)=>this.isChange(e)}
                type="text" name id="start_time" name="start_time" className="form-control" placeholder="Start time" aria-describedby="helpId" 
                defaultValue={this.props.editData.start_time}
                />


                <label htmlFor="end_time">End Time</label>
                <input 
                onChange={(e)=>this.isChange(e)}
                type="text" name id="end_time" name="end_time" className="form-control" placeholder="End time" aria-describedby="helpId" 
                defaultValue={this.props.editData.end_time}
                />

                 <label htmlFor="tan_suat">Tần suất</label>
                <input 
                onChange={(e)=>this.isChange(e)}
                type="text" name id="tan_suat" name="tan_suat" className="form-control" placeholder="Tần suất" aria-describedby="helpId" 
                defaultValue={this.props.editData.tan_suat}
                />





              </div> 
                <button
                onClick={()=>this.editDataToFirebase()}
                type="button" className="btn btn-block btn-primary">Lưu</button>


              </form>
        </div>:
        null
    }
   
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

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
      }
  }
 
}

export default connect(mapStateToProps, mapDispatchToProps)(TabItem)
// export default Tabs;
