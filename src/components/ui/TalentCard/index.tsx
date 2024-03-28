import { Box, Button, Tooltip } from "@mui/material";
import { Container } from "./TalentCard.Styled";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CustomButton from "../Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TOptionsConfirmDialog, TTalentProps } from "../../../utils/types";
import { useNavigate } from "react-router-dom";
import { ConfirmDialog } from "../../features/ConfirmDialog";
import { useState } from "react";

const TalentCard = ({ talent, onDeleteTalent }: TTalentProps) => {
    const navigate = useNavigate();

    const [confirmDialog, setConfirmDialog] = useState<TOptionsConfirmDialog>({
        isOpen: false,
        title: "",
        onConfirm: () => { },
    });

    return (
        <Container>
            <Box className="card-header">
                <p>{`ID: ${talent.id}`}</p>
                <Box className="button-container">
                    <Tooltip title="Editar">
                        <Button variant="contained" id="edit" sx={{ background: "var(--bg-btn-primary-hover)", width: '40px', minWidth: "40px", opacity: 0.7, "&:hover": { opacity: 1 } }} onClick={() => navigate("/talentos/editar", { state: talent })}>
                            <EditNoteIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Deletar">
                        <Button variant="contained" id="delete" sx={{ background: "var(--vermelho)", width: '40px', minWidth: "40px", opacity: 0.7, "&:hover": { opacity: 1, background: "red" } }}
                            onClick={(event) => {
                                setConfirmDialog({
                                    isOpen: true,
                                    title: "Confirma a exclusão desse Talento?",
                                    onConfirm: () => {
                                        setConfirmDialog({
                                            ...confirmDialog,
                                            isOpen: false,
                                        });
                                        onDeleteTalent(talent.id);
                                    },
                                });
                            }}
                        >
                            <DeleteIcon />
                        </Button>
                    </Tooltip>
                </Box>
            </Box>
            <Box className="content">
                <Box className="img-container">
                    {
                        talent.img ?
                            <img src={talent.img} alt="imagem do talento" />
                            :
                            <AccountCircleIcon sx={{ fontSize: 100 }} />
                    }
                </Box>
                <Box className="text-container"
                    sx={{
                        "& :nth-child(4) span": {
                            color: talent.status === "T" ? "#3beb27" : "rgba(187, 43, 33, 0.9)"
                        }
                    }}
                >
                    <p>{`Nome: ${talent.nome}`}</p>
                    <p>{`E-mail: ${talent.email}`}</p>
                    <p>{`Stack: ${talent.stack}`}</p>
                    <p>Situação:<span>{` ${talent.status === "T" ? "Disponível" : "Indisponível"}`}</span></p>
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
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </Container>
    )
}

export default TalentCard;