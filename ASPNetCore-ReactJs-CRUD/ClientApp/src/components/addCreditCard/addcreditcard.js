import React, { component, useState, useEffect, Redirect } from 'react';
import { useNavigate,useHistory  } from 'react-router-dom';
import './addcreditcard.css'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace, faBackward, faBook, faCoffee, faEdit, faEnvelopeOpenText, faPlus, faSdCard, faStickyNote, faTv, faVcard, faVials } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';


const mystyle = {
    cardicon: {
        fontSize: "130px"
    },
    carddipslay: {
        fontSize: "22px"
    },
    carddipslayheader: {
        fontSize: "22px"
    }
};

export default function AddCreditCard() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm(
        {
            defaultValues: {
        cardnumber: "",
        cvv: "",
        validfromdatemonth: "",
        validfromdateyear: "",
        validexpirydatemonth: "",
        validexpirydateyear: "",
        cardname: ""
            }
        },);
       
  
    const onSubmit = async (data) => {
        const response = await fetch('https://localhost:7148/api/creditcards', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result);
        alert('Credit information saved successfully!!');
        
        navigate('/home');
    }
   
    
    return (


        
        <form>

            <div class="row">
                <div class="col-sm-5 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">

                            <p>CRUD (Create, Read, Update, Delete) operations refer to the fundamental operations used in database management and data manipulation. In the context of credit cards, CRUD operations can be applied to manage and interact with credit card data.</p>

                            <strong>Create a New Credit Card:</strong> This operation involves adding a new credit card to the system. You would collect necessary information such as cardholder name, card number, expiration date, CVV, and issuer information and then store it in a database.

                        </div>
                    </div>
                    <div class='mt-3 text-end'>
                        <NavLink tag={Link} className="text-dark" to="/home"> <FontAwesomeIcon icon={faBackward} /> Back to Card Details Page</NavLink>
                    </div>

                </div>

                <div class="col-sm-7 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title text-center" style={mystyle.carddipslayheader}>Add the Credit Card Information</h4>
                            <hr />

                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Card Number</th>
                                            <th>CVV</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input class="form-control" placeholder="Card Number"
                                                    type="number"
                                                    name="cardnumber"
                                                    {...register("cardnumber", {
                                                        required: true,
                                                        validate: {
                                                            checkLength: (value) => value.length <= 16 && value.length > 15
                                                        }
                                                    })}
                                                />
                                                {errors.cardnumber && errors.cardnumber.type === "required" && (
                                                    <p className="errorMsg">Card Number is required.</p>
                                                )}
                                                {errors.cardnumber?.type === "checkLength" && (
                                                    <p className="errorMsg">
                                                        Card Number should be 16 characters Length.
                                                    </p>
                                                )}
                                            </td>
                                            <td>
                                                <input class="form-control" placeholder="CVV"
                                                    type="number" maxLength="3" minLength="3"
                                                    name="CardCvv"
                                                    {...register("CardCvv", {
                                                        required: true,
                                                        validate: {
                                                            checkLength: (value) => value.length <= 3 && value.length > 2
                                                        }
                                                    })}
                                                />
                                                {errors.CardCvv && errors.CardCvv.type === "required" && (
                                                    <p className="errorMsg">CVV is required.</p>
                                                )}
                                                {errors.CardCvv?.type === "checkLength" && (
                                                    <p className="errorMsg">
                                                        CVV should be 3 characters Length.
                                                    </p>
                                                )}
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Valid From Date</th>
                                            <th></th>
                                            <th>Valid Expiry Date</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input class="form-control" placeholder="MM"
                                                    type="number"
                                                    name="ValidFromDateMonth"
                                                    {...register("ValidFromDateMonth", {
                                                        required: true,
                                                        maxLength: 3
                                                    })}
                                                />
                                                {errors.ValidFromDateMonth && errors.ValidFromDateMonth.type === "required" && (
                                                    <p className="errorMsg">Month is required.</p>
                                                )}
                                            </td>
                                            <td>
                                                <input class="form-control" placeholder="YY"
                                                    type="number"
                                                    name="ValidFromDateYear"
                                                    {...register("ValidFromDateYear", {
                                                        required: true,
                                                        maxLength: 3
                                                    })}
                                                />
                                                {errors.ValidFromDateYear && errors.ValidFromDateYear.type === "required" && (
                                                    <p className="errorMsg">Year is required.</p>
                                                )}
                                            </td>
                                            <td>
                                                <input class="form-control" placeholder="MM"
                                                    type="number"
                                                    name="ValidExpiryDateMonth"
                                                    {...register("ValidExpiryDateMonth", {
                                                        required: true,

                                                    })}
                                                />
                                                {errors.ValidExpiryDateMonth && errors.ValidExpiryDateMonth.type === "required" && (
                                                    <p className="errorMsg">Month is required.</p>
                                                )}
                                            </td>
                                            <td>
                                                <input class="form-control" placeholder="YY"
                                                    type="number"
                                                    name="ValidExpiryDateYear"
                                                    {...register("ValidExpiryDateYear", {
                                                        required: true,

                                                    })}
                                                />
                                                {errors.ValidExpiryDateYear && errors.ValidExpiryDateYear.type === "required" && (
                                                    <p className="errorMsg">Year is required.</p>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Card Holder Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input class="form-control" placeholder="Card Name"
                                                    type="text"
                                                    name="cardname"
                                                    {...register("cardname", {
                                                        required: true
                                                    })}
                                                />
                                                {errors.cardname && errors.cardname.type === "required" && (
                                                    <p className="errorMsg">Card Name is required.</p>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-primary" onClick={handleSubmit(onSubmit)}>Submit Card Information</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </form>
    )
}



