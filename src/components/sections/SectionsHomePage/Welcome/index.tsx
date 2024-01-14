import { Box } from "@mui/material";
import { Container } from "./Welcome.Styled";
import CustomButton from "../../../ui/Button";
import { Link } from "react-router-dom";
import Homem from "../../../../assets/person-ti3.webp";
import ExecutiveBanner from "../../../ui/ExecutiveBanner";

const Welcome = () => {
    return (
        <Container>
            <Box className="container-geral">
                <Box className="col-1">
                    <Box className="text-container">
                        <h2>Bem-vindo(a) ao Painel do Administrador de Talentos!</h2>
                        <p className="txt-1">
                            Como <span>Administrador de Talentos</span>, você tem o poder de visualizar, criar, deletar e atualizar cadastros de profissionais.
                            Além disso, você pode atualizar suas informações cadastrais, como nome, e-mail, telefone e imagem de perfil.
                        </p>
                        <p>
                            Pronto para começar a encontrar talentos?
                        </p>
                    </Box>
                    <Box className="btn-container">
                        <Link
                            to="/talentos"
                        >
                            <CustomButton
                                backgroundcolor="var(--bg-btn-primary)"
                                color="var(--font-color-secondary)"

                            >
                                Encontrar Talento
                            </CustomButton>
                        </Link>
                    </Box>
                </Box>
                <Box className="col-2">
                    <ExecutiveBanner img={Homem} />
                </Box>
            </Box>
        </Container>
    )
}

export default Welcome;