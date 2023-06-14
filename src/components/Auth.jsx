import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Auth() {

    let navigate = useNavigate();

    const { signup, login, loginWithGoogle,} = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleSubmitRegistrar = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signup(user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div id="container_contactos">
            {error && <p className="text-center error-rojo">{error}</p> }
            <div id="el_coso" className="filita">
            
                <div id="cosoizquierda">
                    <form onSubmit={handleSubmitRegistrar}>
                        <h2>Registrarse</h2>
                        <div id="nombre" className="separate" >
                            <input type="email" placeholder="Email..." onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        </div>
                        <div id="email" className="separate">
                            <input type="password" placeholder="Password..." onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        </div>

                        <div>
                            <button className="enviar" > ENVIAR </button>

                        </div>
                    </form>
                </div>
                <div id="cosoderecha">
                    <form onSubmit={handleSubmitLogin}>
                        <h2>Iniciar Sesión</h2>

                        <div id="nombre" className="separate">
                            <input type="email" placeholder="Email..." onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        </div>
                        <div id="email" className="separate">
                            <input type="password" placeholder="Password..." onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        </div>
                        <div>
                            <button className="enviar" > ENVIAR </button>
                        </div>
                    </form>

                </div>
            </div>

            <h5 id="o-tambien">O también puedes...</h5>

            <div id="div-google">
                <button className="login-with-google-btn" onClick={handleGoogleSignin}> Iniciar sesión con Google </button>
            </div>

        </div>
    );
};
export default Auth;