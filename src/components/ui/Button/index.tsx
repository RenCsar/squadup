import { Button } from "@mui/material";
import { Container } from "./Button.Styled";
import { TButtonProps } from "../../../utils/types";

const CustomButton = ({ type, backgroundcolor, color, borderRadius, backgroundcolorhover, colorHover, children, onClickButton }: TButtonProps) => {
    return (
        <Container
            backgroundcolor={backgroundcolor}
            color={color}
            borderRadius={borderRadius}
            backgroundcolorhover={backgroundcolorhover}
            colorHover={colorHover}
        >
            <Button
                type={type ? type : "button"}
                sx={{
                    textTransform: 'inherit',
                    height: "auto",
                }}
                fullWidth
                variant="contained"
                onClick={onClickButton}
            >
                {children}
            </Button>

        </Container>
    )
}

export default CustomButton;