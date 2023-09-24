
import React, { Component, useState, useEffect, Redirect, useRef } from 'react';
import { useNavigate, useHistory, useParams } from 'react-router-dom';
import './editcreditcard.css'
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
    },
    cardcenter: {
        display: 'flex',
        justifyContent: 'center'
    }
};
export default function EditCreditCard() {
    const navigate = useNavigate();
    const [cardnumber, setCardNumber] = useState(null);
    const [cvv, setCVV] = useState('');
    const [validfromdatemonth, setValidFromdateMonth] = useState('');
    const [validfromdateyear, setValidFromdateYear] = useState('');
    const [validexpirydatemonth, setValidExpirydateMonth] = useState('');
    const [validexpirydateyear, setValidExpirydateYear] = useState('');
    const [cardname, setCardame] = useState('');
    var resultData = Object;
    const getresp = async (id) => {
        const response = await fetch('https://localhost:7148/api/creditcards/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        if (result) {
            resultData =  result;
            setCardNumber(result.cardNumber);
            setCVV(result.cardCvv);
            setValidFromdateMonth(result.validFromDateMonth)
            setValidFromdateYear(result.validFromDateYear)
            setValidExpirydateMonth(result.validExpiryDateMonth)
            setValidExpirydateYear(result.validExpiryDateYear)
            setCardame(result.cardName)
        }
        console.log(result);
    }
    useEffect(() => {
        getresp(id);
    });
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm(
        {
            defaultValues: {}
        },);
    const { id } = useParams();

    const onSubmit = async (data) => {
        data.Id= id;
        data.cardnumber = data.cardnumber ? data.cardnumber : resultData.cardNumber;
        data.CardCvv = data.CardCvv ? data.CardCvv : resultData.cardCvv;
        data.cardname = data.cardname ? data.cardname : resultData.cardName;
        data.ValidFromDateMonth = data.ValidFromDateMonth ? data.ValidFromDateMonth : resultData.validFromDateMonth;
        data.ValidFromDateYear = data.ValidFromDateYear ? data.ValidFromDateYear : resultData.validFromDateYear;
        data.ValidExpiryDateMonth = data.ValidExpiryDateMonth ? data.ValidExpiryDateMonth : resultData.validExpiryDateMonth;
        data.ValidExpiryDateYear = data.ValidExpiryDateYear ? data.ValidExpiryDateYear : resultData.validExpiryDateYear;
        const response = await fetch('https://localhost:7148/api/creditcards/' + id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        alert('Credit Information Edited Successfully!!');
        navigate('/home');
    }
    return (
        <form>
            <div class="row" style={mystyle.cardcenter}>

                <div class="col-sm-9 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title text-center" style={mystyle.carddipslayheader}>Edit the Credit Card Information</h4>
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
                                                    type="number" defaultValue={cardnumber}
                                                    name="cardnumber"  {...register("cardnumber")} />
                                            </td>
                                            <td>
                                                <input class="form-control" placeholder="CVV"
                                                    type="number" maxLength="3" minLength="3"
                                                    name="CardCvv" defaultValue={cvv} {...register("CardCvv")} />
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
                                                    type="number" defaultValue={validfromdatemonth}
                                                    name="ValidFromDateMonth" {...register("ValidFromDateMonth")} />
                                            </td>
                                            <td>
                                                <input class="form-control" placeholder="YY"
                                                    type="number" defaultValue={validfromdateyear}
                                                    name="ValidFromDateYear" {...register("ValidFromDateYear")} />
                                            </td>
                                            <td>
                                                <input class="form-control" placeholder="MM"
                                                    type="number" defaultValue={validexpirydatemonth}
                                                    name="ValidExpiryDateMonth" {...register("ValidExpiryDateMonth")} />
                                            </td>
                                            <td>
                                                <input class="form-control" placeholder="YY"
                                                    type="number" defaultValue={validexpirydateyear}
                                                    name="ValidExpiryDateYear" {...register("ValidExpiryDateYear")} />
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
                                                    type="text" defaultValue={cardname}
                                                    name="cardname"  {...register("cardname")} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-primary" onClick={handleSubmit(onSubmit)}>Edit Card Information</button>
                                <NavLink tag={Link} className="text-dark mt-3" to="/home"> <FontAwesomeIcon icon={faBackward} /> Back to Card Details Page</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
