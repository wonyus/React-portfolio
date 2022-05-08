import { ADD_PROJECT, EDIT_PROJECT, DELETE_PROJECT, GET_PROJECT, SIGN_IN, SIGN_OUT, GET_PROFILE, EDIT_PROFILE, NAVIGATIONDRAWER, SET_BACKDROP } from './types';
import axios from 'axios';
import cookie from 'js-cookie';
import { Redirect, Route } from 'react-router-dom';
import { auth } from './api';

// const auth = axios.create({
//     baseURL: 'http://127.0.0.1:8000/api',
//     withCredentials: true,
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
//     }
// });

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    }
});

//     api.interceptors.response.use( response => response, error => {
//         if(error.response.status === 401){

//             return Promise.reject()
//         }
//         return Promise.reject(error)
//     })

//     return api
// }

export const signIn = (content) => async (dispatch) => {
    // var url = "http://127.0.0.1:8000/api/login";
    // const config = {
    //     headers: {
    //         'Accept': 'application/json',


    //     }
    // };
    // axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
    //     // Login...
    // });
    // await axios.post(url, content, config)
    //     .then(response => {
    //         console.log(response)

    //         cookie.set('token', response.data.token);
    //         cookie.set('user', response.data.user.name);

    //         dispatch({ type: SIGN_IN, payload: response })
    //     })
    //     .catch(error => (console.log(error.message)))


    await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
        .then((response) => {
            console.log(response.headers['Set-Cookie']);

            console.log(response);

            auth.post('/login', content)
                .then(response => {
                    console.log(response)

                    cookie.set('token', response.data.token);
                    cookie.set('user', response.data.user.name);
                    auth.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`
                    dispatch({ type: SIGN_IN, payload: { user: response.data, token: response.data.token } })
                    window.location.href = '/admin/dashboard'
                })

        }).catch(error => (console.log(error)))



}
export const signOut = (token) => async (dispatch) => {
    await auth.post('/logout')
        .then(response => {
            console.log(response)
            cookie.remove('token');
            cookie.remove('user');
            dispatch({ type: SIGN_OUT, payload: response })
            window.location.href = '/'
        })
        .catch(error => (console.log(error)))
}

// export const signOut = (token) => async (dispatch) => {
//     var url = "http://127.0.0.1:8000/api/logout";
//     var bearer_token = "Bearer " + token
//     const config = {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': bearer_token,
//         }
//     };
//     await axios.post(url, config)
//         .then(response => {
//             console.log(response)
//             cookie.remove('token');
//             cookie.remove('user');
//             dispatch({ type: SIGN_OUT, payload: response })
//             window.location.href = '/'
//         })
//         .catch(error => (console.log(error)))
// }

export const getProjects = () => async (dispatch) => {
    var url = "http://127.0.0.1:8000/api/projects";
    await fetch(url, {
        method: 'GET',
    }).then(responseJson => responseJson.json())
        .then(result => {
            dispatch({ type: GET_PROJECT, payload: result })
        })
        .catch(error =>
            console.log(error)
        )
}

export const addProject = (token, content) => async (dispatch) => {
    var url = "http://127.0.0.1:8000/api/projects/";
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    await axios.post(url, content, config)
        .then(response => {
            console.log(response);
            // dispatch({ type: EDIT_PROJECT, payload: response.data })
        })
        .catch(error => (console.log(error)))
}


export const editProject = (token, content, id) => async (dispatch) => {
    console.log(content);
    var url = "http://127.0.0.1:8000/api/projects/" + id;
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    await axios.put(url, content, config)
        .then(response => {
            console.log(response);
            // dispatch({ type: EDIT_PROJECT, payload: response.data })
        })
        .catch(error => (console.log(error)))

}

export const deleteProject = (token, id) => async (dispatch) => {

    var url = "http://127.0.0.1:8000/api/projects/" + id;
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    await axios.delete(url, config)
        .then(response => {
            console.log(response);
            // dispatch({ type: EDIT_PROJECT, payload: response.data })
        })
        .catch(error => (console.log(error)))

}


export const getProfile = () => async (dispatch) => {
    var url = "http://127.0.0.1:8000/api/userinfo";
    await fetch(url, {
        method: 'GET',
    }).then(responseJson => responseJson.json())
        .then(result => {

            dispatch({ type: GET_PROFILE, payload: result })
        })
        .catch(error =>
            console.log(error)

        )
}

export const editProfile = (token, content) => async (dispatch) => {

    var url = "http://127.0.0.1:8000/api/projects/" + content.id;
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    await axios.put(url, content, config)
        .then(response => {
            dispatch({ type: EDIT_PROJECT, payload: response.data })
        })
        .catch(error => (console.log(error)))

}

export const setNevigateDrawer = (val) => (dispatch) => {
    console.log(val);
    dispatch({ type: NAVIGATIONDRAWER, payload: val })
}

export const setBackdrop = () => (dispatch) => {
    dispatch({ type: SET_BACKDROP })
}
