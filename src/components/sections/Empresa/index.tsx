import { Parallax, Background } from 'react-parallax';
import EmpresaImg from "./../../../assets/empresa.webp";
import { Container } from './Empresa.Styled';
import { Box } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const Empresa = () => {
    const lgDown = useMediaQuery({ query: "(max-width: 1100px)" });
    return (
        <Container>
            <Parallax strength={lgDown ? 0 : -320}>
                <Background>
                    <img
                        src={EmpresaImg}
                        alt="Imagem de fundo"
                    />
                </Background>
                <Box className="container-geral">
                    <Box className="text-container">
                        <h1>Nossa empresa</h1>
                        <p>Através de metodologias ágeis para o desenvolvimento de aplicativos, e com uma equipe incrível, trabalhamos intensamente para entregar produtos surpreendentes que tenham a capacidade de impactar e transformar a vida de seus usuários.</p>
                        <p>Temos experiência com todas as fases do ciclo de desenvolvimento de um aplicativo, desde a concepção até o lançamento, passando pelo planejamento, concepção visual e desenvolvimento!</p>
                    </Box>
                </Box>
            </Parallax>
        </Container>
    );
};

export default Empresa;