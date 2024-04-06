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
            <Button sx={{
                textTransform: 'inherit',
                p: 0
            }}>
                <Link to="/home">Encontre um Talento</Link>
            </Button>
        </Container>
    )
}

export default ButtonFindTalent;