import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddForm from "../../components/features/AddForm";
import { Container } from "./EditarTalentos.Styled";

const EditarTalentos = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        if (!state) {
            console.log("redirecionando...")
            navigate("/talentos");
        }
    }, [state]);

    return (
        <Container>
            <AddForm state={state} />
        </Container>
    )
}

export default EditarTalentos;