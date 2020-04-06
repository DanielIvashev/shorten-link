import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/messages.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const [alert, setAlert] = useState(null);
    const {loading, error, request} = useHttp();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        setAlert(message(error));
    }, [error, message]);

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    };

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            setAlert(message(data.message))
        } catch (e) {}
    };

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            auth.login(data.token, data.userId)
        } catch (e) {}
    };

    return (
        <div style={{height: '100vh'}} className='container d-flex justify-content-center align-items-center'>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">email</label>
                            <input type="email"
                                   className="form-control"
                                   id="email"
                                   aria-describedby="emailHelp"
                                   placeholder="enter email"
                                   name="email"
                                   onChange={changeHandler}
                                   value={form.email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">password</label>
                            <input type="password"
                                   className="form-control"
                                   id="password"
                                   placeholder="enter password"
                                   name="password"
                                   onChange={changeHandler}
                                   value={form.password}
                            />
                        </div>
                        {
                            alert
                        }
                        <button className="btn btn-primary mb-2"
                                style={{width: '100%'}}
                                disabled={loading}
                                onClick={loginHandler}
                        >
                            sign in
                        </button>
                        <button
                            className="btn btn-info"
                            style={{width: '100%'}}
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};