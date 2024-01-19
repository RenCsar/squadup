import { Box, Button, Tooltip } from "@mui/material";
import { Container } from "./TalentCard.Styled";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CustomButton from "../Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TTalentProps } from "../../../utils/types";

const TalentCard = ({ talent }: TTalentProps) => {
    return (
        <Container>
            <Box className="card-header">
                <p>{`ID: ${talent.idInscricao}`}</p>
                <Box className="button-container">
                    <Tooltip title="Editar">
                        <Button variant="contained" id="edit" sx={{ background: "var(--bg-btn-primary-hover)", width: '40px', minWidth: "40px", opacity: 0.7, "&:hover": { opacity: 1 } }} onClick={() => { console.log(talent) }}>
                            <EditNoteIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Deletar">
                        <Button variant="contained" id="delete" sx={{ background: "var(--vermelho)", width: '40px', minWidth: "40px", opacity: 0.7, "&:hover": { opacity: 1, background: "red" } }} onClick={() => console.log(talent)}>
                            <DeleteIcon />
                        </Button>
                    </Tooltip>
                </Box>
            </Box>
            <Box className="content">
                <Box className="img-container">
                    {
                        talent.candidato.img ?
                            <img src={talent.candidato.img} alt="imagem do talento" />
                            :
                            <AccountCircleIcon sx={{ fontSize: 100 }} />
                    }
                </Box>
                <Box className="text-container"
                    sx={{
                        "& :nth-child(4) span": {
                            color: talent.disponivel === "T" ? "#3beb27" : "rgba(187, 43, 33, 0.9)"
                        }
                    }}
                >
                    <p>{`Nome: ${talent.candidato.nome}`}</p>
                    <p>{`E-mail: ${talent.candidato.email}`}</p>
                    <p>{`Stack: ${talent.candidato.formulario.trilhas[0].nome}`}</p>
                    <p>Situação:<span>{` ${talent.disponivel === "T" ? "Disponível" : "Indisponível"}`}</span></p>
                </Box>
            </Box>
            <Box className="btn-hire"
                sx={{
                    display: 'none',
                }}
            >
                <CustomButton
                    color={"var(--font-color-secondary)"}
                    backgroundcolor={"var(--bg-section-branco)"}
                    backgroundcolorhover={"var(--bg-section-escuro)"}
                >
                    Contratar
                </CustomButton>
            </Box>
        </Container>
    )
}

export default TalentCard;