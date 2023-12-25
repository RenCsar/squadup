import { Container } from "./ExecutiveBanner.Styled";

type TExecBannerProps = {
    img: string,
}

const ExecutiveBanner = ({ img }: TExecBannerProps) => {
    return (
        <Container>
            <img src={img} alt="banner" />
        </Container>
    )
}

export default ExecutiveBanner;