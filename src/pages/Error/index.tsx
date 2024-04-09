import { useEffect } from "react";
import { Container } from "./Error.Styled";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-escuro.webp"

const Error = () => {
    const usuario = localStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            usuario ? navigate("/home") : navigate("/");
        }, 1500);
    }, []);

    return (
        <Container>
            <img src={logo} alt="logo-empresa" />
            <div className="text-container">
                <h1>Esta página não foi encontrada!</h1>
                <h2>Redirecionando...</h2>
            </div>
        </Container>
    )
}

export default Error;