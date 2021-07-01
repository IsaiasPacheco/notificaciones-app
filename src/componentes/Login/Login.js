import React, {useState} from 'react'
import './styles.css'

import { auth } from '../../firebase';

const Login = () => {

    const [usuario, setUsuario] = useState(null)
    const [email, setEmail ] = useState('');
    const [pass, setPass] = useState('');

    const crearUsuario = async (e,p) =>{
        try {
            const new_user = await auth.createUserWithEmailAndPassword(e,p);
            setUsuario(new_user)   
        } catch (error) {
            alert(error.message)
        }
        
    }

    const iniciarSesion = async (e,p) => {
        
        try {
            const usuario = await auth.signInWithEmailAndPassword(e,p)
            setUsuario(usuario)
            console.log(usuario)    
        } catch (error) {
            alert(error.message)
        }
        

    }

    const cerrarSesion = async () =>{
        try {
            await auth.signOut();    
            alert("Sesión cerrada correctamente")
            setUsuario(null)
        } catch (error) {
            console.log(error.message)
        }
    }

    return( 
        
            <div className="layout">
                <div className="formulario">
                    {
                        usuario && <p> {usuario.user.email} </p>
                    }
                    <p> Email </p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <p> Password </p>
                    <input type="password" value={pass} onChange={(e) => setPass(e.target.value)}></input>
                    <br/>
                    <button onClick={() => iniciarSesion(email,pass)}> Iniciar sesión </button>
                    <button onClick={() => cerrarSesion()} > Salir </button>
                    <button onClick={() => crearUsuario(email, pass)}> Registrar </button>
                </div>
                <div className="msj">
                    <p> Ingrese el mensaje </p>
                    <input type="text"></input>
                    <p> Ingrese el email </p>
                    <input type="text"></input>
                    <button> Enviar msj </button>
                </div>
            </div>



    )
}

export default Login;