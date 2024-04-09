import { Button } from "@mui/material";
import { Container } from "./ButtonFindTalent .Styled";
import { Link } from "react-router-dom";
import { TButtonProps } from "../../../types/types";

const ButtonFindTalent = ({ backgroundcolor, color, borderRadius, backgroundcolorhover, colorHover }: TButtonProps) => {
    return (
        <Container
            backgroundcolor={backgroundcolor}
            color={color}
            borderRadius={borderRadius}
            backgroundcolorhover={backgroundcolorhover}
            colorHover={colorHover}
        >
            <Link to="/home">
                <Button sx={{
                    textTransform: 'inherit',
                    p: 0
                }}>
                    Encontre um Talento
                </Button>
            </Link>
        </Container>
    )
}

export default ButtonFindTalent;