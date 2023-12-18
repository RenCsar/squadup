import { Button } from "@mui/material";
import { Container } from "./ButtonFindTalent .Styled";
import { Link } from "react-router-dom";
import { TButtonProps } from "../../../utils/types";

const ButtonFindTalent = ({ backgroundColor, color, borderRadius, backgoundColorHover, colorHover }: TButtonProps) => {
    return (
        <Container
            backgroundColor={backgroundColor}
            color={color}
            borderRadius={borderRadius}
            backgoundColorHover={backgoundColorHover}
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