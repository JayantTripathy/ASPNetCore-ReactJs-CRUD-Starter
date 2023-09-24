import React, { Component } from 'react';
import { useNavigate,useHistory  } from 'react-router-dom';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDeleteLeft, faEdit, faPlus, faSdCard, faTrash, faVcard, faVials } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import Confirm from './utility/Confirm';
const mystyle = {
  cardicon: {
    fontSize: "30px"
  },
  carddipslay: {
    fontSize: "22px"
  },
  actionEdit:{
    fontSize: "15px",
    color: "Blue"
  },
  actionDelete:{
    fontSize: "15px",
    marginLeft:"10px"
  }
};


export class Home extends Component {
  
  static displayName = Home.name;
  constructor(props) {
    super(props);
    this.state = {
      creditcards: []
    }
    this.getresp()
    
  }
  getresp(){
    const getresponse = fetch('https://localhost:7148/api/creditcards')  
    .then(response => response.json())  
    .then(data => {  
      this.setState({ creditcards: data });
    });
  }
  
  render() {
    
    const { creditcards } = this.state;

    const onDelete = async (id) => {
     // const navigate = useNavigate();
      const response = await fetch('https://localhost:7148/api/creditcards/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Credit information deleted successfully!!');
  this.getresp();
      //navigate('/home');
    }

    return (
      <div class="container">
        <div class="alert alert-info" role="alert">
          <div class="row"><div class="col-sm-4" style={mystyle.carddipslay}>Credit Card Details </div>
            <div class="col-sm-8">
              <NavLink tag={Link} className="text-dark" to="/addcreditcard">
                <FontAwesomeIcon icon={faPlus} />  Add New Record</NavLink>
            </div></div>
        </div>
        <div class="wrapper wrapper-content animated fadeInRight">
          <div class="row">

          {creditcards.map(credit =>
            <div class="col-md-4 shadow p-3 mb-5 bg-white rounded mr-3 card-gap">
              <div class="payment-card">
                
                <i class="fa-brands fa-cc-visa"></i>
                <h3>
                {credit.cardNumber}
                </h3>

                <div class="row mt-4">
                  <div class="col-sm-6">
                    <small>
                      <strong>Valid From:</strong> {credit.validFromDateMonth}/{credit.validFromDateYear}
                    </small>
                  </div>
                  <div class="col-sm-6 text-right">
                    <small>
                      <strong>Valid Expiry:</strong> {credit.validExpiryDateMonth}/{credit.validExpiryDateYear}
                    </small>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-sm-8">
                    <small>
                      <strong>{credit.cardName}</strong> 
                    </small>
                  </div>
                  <div class="col-sm-4 text-end">
                    <FontAwesomeIcon icon={faVcard} style={mystyle.cardicon} />
                  </div>
                </div> 
                
              </div>

              <div class="row mt-2">
                <div class="col-sm-3">
                  <small>
                    CVV: {credit.cardCvv}
                  </small>
                </div>
                <div class="col-sm-9 text-end">
                  <div class="row">
                    <div class="col-sm-9 text-end">
                    <NavLink tag={Link} className="text-dark" to={'/editcreditcard/' + credit.id} title='Edit Credit Card'>  <FontAwesomeIcon icon={faEdit} /></NavLink>
{/*                     
                      <NavLink tag={Link} className="text-dark" to={"/editcreditcard/"credit.id} title='Edit Credit Card'>
                        <FontAwesomeIcon icon={faEdit} />
                      </NavLink> */}
                    </div>
                    <div class="col-sm-3 text-start">
                      <Confirm
                        onConfirm={() => {
                          onDelete(credit.id)
                        }}
                        body="Are you sure you want to delete this?"
                        confirmText="Confirm Delete"
                        title="Delete Credit Card">
                        <a title='Delete this record'><FontAwesomeIcon icon={faTrash} style={mystyle.actionDelete} /></a>
                      </Confirm>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
               
          </div>
        </div>
      </div>
    );
  }
}
