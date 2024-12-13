import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import './App.css';

function App() {

    const [users, setUsers] = useState([])
    const [inputNome, setInputNome] = useState('');
    const [inputLastNome, setInputLastNome] = useState('');
    const [inputIdade, setInputIdade] = useState('');

    const [listUser, setListUser] = useState(false);

    const api = axios.create({
        baseURL: 'http://localhost:8000'
    })

    // Funções para editar input
    const handleInputChangeNome = (e) => {
        setInputNome(e.target.value)
    }

    const handleInputChangeLastNome = (e) => {
        setInputLastNome(e.target.value)
    }

    const handleInputChangeIdade = (e) => {
        setInputIdade(e.target.value)
    }
    // Fim Funções para editar input

    const cadastrarUser = () => {
        api.post('/api/createUser', {
            firstName: inputNome,
            lastName: inputLastNome,
            age: inputIdade
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        window.location.reload()
    }

    const voltarPage = () => {
        setListUser(false)
    }

    const listUserPage = () => {
        setListUser(true)
    }

    useEffect(() => {
        api.get('/api/listUsers')
            .then(response => {
                setUsers(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            {!listUser ? (
                <div className="divForm">
                    <h1>Cadastro Usuário</h1>

                    <div className="inputs">
                        <p>Primeiro Nome</p>
                        <input value={inputNome} onChange={handleInputChangeNome} type="text" className="fistName" />

                        <p>Ultimo Nome</p>
                        <input value={inputLastNome} onChange={handleInputChangeLastNome} type="text" className="lastName" />

                        <p>Idade</p>
                        <input value={inputIdade} onChange={handleInputChangeIdade} type="text" className="age" />
                    </div>

                    <button onClick={cadastrarUser}>Cadastrar</button>

                    <button onClick={listUserPage} className="buttonUsrCad">Usuários Cadastrados</button>
                </div>
            ) : (
                <div className="containerWithUsers">
                    {users.map(user => (
                        <div className="elementosContainer" key={user.id}>
                            <i>{user.id}</i>
                            <i>{user.firstName}</i>
                            <i>{user.age}</i>
                        </div>
                    ))}

                    <button onClick={voltarPage} >← Voltar</button>
                </div>
            )}
        </>
    )
}

export default App