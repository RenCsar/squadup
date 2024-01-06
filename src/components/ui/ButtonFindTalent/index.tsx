import { Button } from "@mui/material";
import { Container } from "./ButtonFindTalent .Styled";
import { Link } from "react-router-dom";
import { TButtonProps } from "../../../utils/types";

const ButtonFindTalent = ({ backgroundcolor, color, borderRadius, backgoundcolorhover, colorHover }: TButtonProps) => {
    return (
        <Container
            backgroundcolor={backgroundcolor}
            color={color}
            borderRadius={borderRadius}
            backgoundcolorhover={backgoundcolorhover}
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