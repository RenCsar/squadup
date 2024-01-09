import { Box } from '@mui/material';
import { ParallaxContainer } from './Parallax.Styled';

const Parallax = () => {
    return (
        <ParallaxContainer>
            <Box className="container-geral">
                <Box className="text-container">
                    <h1>Nossa empresa</h1>
                    <p>Através de metodologias ágeis para o desenvolvimento de aplicativos, e com uma equipe incrível, trabalhamos intensamente para entregar produtos surpreendentes que tenham a capacidade de impactar e transformar a vida de seus usuários.</p>
                    <p>Temos experiência com todas as fases do ciclo de desenvolvimento de um aplicativo, desde a concepção até o lançamento, passando pelo planejamento, concepção visual e desenvolvimento!</p>
                </Box>
            </Box>
        </ParallaxContainer>
    );
};

export default Parallax;