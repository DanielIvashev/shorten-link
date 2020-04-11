import React, {useContext, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useHistory} from 'react-router-dom'


export const CreatePage = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const {request} = useHttp();
    const [link, setLink] = useState('');

    const pressHandler = async e => {
      if (e.key === 'Enter') {
          try {
             const data = await request('/api/link/generate', 'POST', {from: link}, {
                 Authorization: `Bearer ${auth.token}`
                 });
             history.push(`/detail/${data.link._id}`)
          } catch (e) {}
      }
    };


    return (
        <div className='container  justify-content-center align-items-center d-flex flex-column'>
            <div className='pb-5 pt-5 text-center'>
                <h1 className='pb-3'>short your link</h1>
                <svg className="bi bi-arrow-down" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z"
                          fillRule="evenodd"/>
                    <path fillRule="evenodd" d="M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z"
                          fillRule="evenodd"/>
                </svg>
            </div>

            <div className="form-group w-100">
                <input type="text"
                       className="form-control"
                       id="link"
                       placeholder="drop your link here"
                       value={link}
                       onChange={event => setLink(event.target.value)}
                       onKeyPress={pressHandler}

                />
            </div>
        </div>
    )
};