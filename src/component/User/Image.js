import React, { Component, useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

/*class PatientProfile extends Component {
    constructor(){
        super();
        this.state = {
    
          isLoading: true,    
          patients: [],
          doctors:[]
        }
      }

      componentDidMount(){
        let doc_id;
         axios.post('http://localhost:3001/Patient/profile',{},{
            headers: {
              authorization: sessionStorage.getItem('usertoken')
            }
          })
            .then(res => {console.log(res.data);
              this.setState({patients: res.data});
              doc_id = res.data[0].doctor_id;
            }).then(res => {
              axios.post('http://localhost:3001/doctor/profile',{doctor_id:doc_id},{
            headers: {
              authorization: sessionStorage.getItem('usertoken')
            }
          })
            .then(res => {console.log(res.data);
              this.setState({doctors: res.data});
              this.setState({isLoading: false});
            })
            })
      }

      render(){
        const { patients, isLoading,doctors} = this.state;
        return(<><h1>works1</h1>
            {(!isLoading && patients !== []? patients.map(patient => {
                return (
                  <div key={patient.id} className="list-group-item"  style ={{backgroundColor:"#e0e0e0"}}>
                    <p  className="mb-0" style ={{backgroundColor:"#e0e0e0"}}><i className="fab fa-slack-hash fa-2x mr-4 purple p-3 white-text rounded " aria-hidden="true"></i> {patient.name} </p>
                    </div>
                )
                }) : <h4>Loading</h4>)}

{(!isLoading ? doctors.map(Doctor => {
                return (
                  <div key={Doctor.id} className="list-group-item"  style ={{backgroundColor:"#e0e0e0"}}>
                    <p  className="mb-0" style ={{backgroundColor:"#e0e0e0"}}><i className="fab fa-slack-hash fa-2x mr-4 purple p-3 white-text rounded " aria-hidden="true"></i> {Doctor.name} </p>
                    </div>
                )
                }) : <h4>Loading</h4>)}
                </>
        )
      }
}



export default PatientProfile;*/

const Image = () => {
  /*constructor(){
      super();
      this.state = {
  
        isLoading: true,    
        patients: [],
        doctors:[]
      }
    }

    componentDidMount(){
      let doc_id;
       axios.post('http://localhost:3001/Patient/profile',{},{
          headers: {
            authorization: sessionStorage.getItem('usertoken')
          }
        })
          .then(res => {console.log(res.data);
            this.setState({patients: res.data});
            doc_id = res.data[0].doctor_id;
          }).then(res => {
            axios.post('http://localhost:3001/doctor/profile',{doctor_id:doc_id},{
          headers: {
            authorization: sessionStorage.getItem('usertoken')
          }
        })
          .then(res => {console.log(res.data);
            this.setState({doctors: res.data});
            this.setState({isLoading: false});
          })
          })
    }*/

    
      /*const { patients, isLoading,doctors} = this.state;
      return(<><h1>works1</h1>
          {(!isLoading && patients !== []? patients.map(patient => {
              return (
                <div key={patient.id} className="list-group-item"  style ={{backgroundColor:"#e0e0e0"}}>
                  <p  className="mb-0" style ={{backgroundColor:"#e0e0e0"}}><i className="fab fa-slack-hash fa-2x mr-4 purple p-3 white-text rounded " aria-hidden="true"></i> {patient.name} </p>
                  </div>
              )
              }) : <h4>Loading</h4>)}

{(!isLoading ? doctors.map(Doctor => {
              return (
                <div key={Doctor.id} className="list-group-item"  style ={{backgroundColor:"#e0e0e0"}}>
                  <p  className="mb-0" style ={{backgroundColor:"#e0e0e0"}}><i className="fab fa-slack-hash fa-2x mr-4 purple p-3 white-text rounded " aria-hidden="true"></i> {Doctor.name} </p>
                  </div>
              )
              }) : <h4>Loading</h4>)}
              </>
      )*/

              const [isLoading,setisLoading] = useState(true);
              const [image,setimage] = useState([]);
              const params = useParams();


              useEffect(() => {
                
              
       axios.post('http://localhost:3001/user/image',{id: params.id},{
          headers: {
            authorization: sessionStorage.getItem('usertoken')
          }
        })
          .then(res => {console.log(res.data);
            setimage(res.data);
            setisLoading(false);
          })
          console.log("sending req");
              },[]);



              

      return(<>
      {(!isLoading && image !== []? image.map(patient => {
          return (
            <div key={image.id} className="list-group-item"  style ={{backgroundColor:"#e0e0e0"}}>
              <img src = {patient.image}></img>
              <p  className="mb-0" style ={{backgroundColor:"#e0e0e0"}}><i className="fab fa-slack-hash fa-2x mr-4 purple p-3 white-text rounded " aria-hidden="true"></i> {patient.caption} </p>
              </div>
          )
          }) : <h4>Loading</h4>)}

          </>)
   
};
export default Image