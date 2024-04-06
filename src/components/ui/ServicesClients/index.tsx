import { Box } from "@mui/material";
import { Container, StyledListItem } from "./ServicesClients.Styled";
import { TServicesClientsProps } from "../../../types/types";

const ServicesClients = ({ title, img, classStyle, items }: TServicesClientsProps) => {
    return (
        <Container>
            <Box className="header-card-container">
                <img src={img} alt={`${title}-logo`} />
                <p className={`font-${classStyle}`}>{title}</p>
            </Box>
            <Box className="list-container">
                <StyledListItem type={classStyle}>
                    {items.map((i, index) =>
                        <li key={index}>
                            <span>{i}</span>
                        </li>
                    )}
                </StyledListItem>
            </Box>
        </Container>
    )
}

export default ServicesClients;