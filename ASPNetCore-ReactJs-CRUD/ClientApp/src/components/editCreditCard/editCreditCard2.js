import React, { useState, useEffect } from 'react';
import { useNavigate, useHistory, useParams } from 'react-router-dom';

function EditCreditCard2() {
    const [post, setPost] = useState({});
    const [CurrentRecord, SetEdit] = useState({ cardnumber:'', cvv: ''})
    const { id } = useParams();
    useEffect(() => {
       getresp(id);
     });
    const handleChange = ({ target }) => {
        const { name, value } = target;
        SetEdit({ ...CurrentRecord, [name]: value });
        console.log(post);
    };
    const getresp = async (id) => {
        const response = await fetch('https://localhost:7148/api/creditcards/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        SetEdit({ ...CurrentRecord, cardnumber: result.cardNumber });
        
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const editDataById = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        id: id,
                        title: post.title,
                        body: post.body,
                        userId: 1
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(response => response.json())
                    .then(json => console.log(json));
                console.warn(response.data);
            } catch (error) {
                console.warn(error);
            }
        };
        editDataById();
    };
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <form>
                        <div className="form-group">
                            <input class="form-control" placeholder="Card Number"
                                type="number" defaultValue={CurrentRecord.cardnumber}
                                name="cardnumber" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input class="form-control" placeholder="CVV"
                                type="number" maxLength="3" minLength="3"
                                name="CardCvv" defaultValue={CurrentRecord.cvv} onChange={handleChange} />
                        </div>
                        <button class="btn btn-primary" onClick={handleSubmit}>Edit Card Information</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditCreditCard;