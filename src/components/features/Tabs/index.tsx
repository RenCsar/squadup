import {
    FormControl,
    Grid,
    InputLabel,
    Select,
    Stack,
    MenuItem,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Button,
    Pagination,
    Box,
    LinearProgress,
    Typography,
    Tooltip,
    useMediaQuery,
    useTheme,
    Avatar,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import elementos from '../../../utils/elementos.json';
import CustomButton from '../../ui/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const trilhaArr = [
    { nome: "Frontend" },
    { nome: "Backend" },
    { nome: "Fullstack" },
    { nome: "Data Science" },
    { nome: "DevOps" },
    { nome: "UI/UX Design" },
    { nome: "Mobile Development" },
    { nome: "QA" }
];

const rows = () => {
    return elementos.map(dados => {
        return {
            id: dados.idInscricao,
            img: dados.candidato.img,
            nome: dados.candidato.nome,
            email: dados.candidato.email,
            trilha: dados.candidato.formulario?.trilhas
                .map((trilha: any) => {
                    return trilha.nome
                })
                .join(', '),
            status: dados.disponivel,
            telefone: dados.candidato.telefone,
            turno: dados.candidato.formulario?.turno,
            estado: dados.candidato.estado,
        }
    })
};

export const Tabs = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [isLoading, setisLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [trilha, setTrilha] = useState('');

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    const resetFiltro = () => {
        setEmail('');
        setEmailInput('');
        setTrilha('');
        setPage(0);
    };

    const columns = [
        {
            field: 'img',
            headerName: '',
            width: 60,
            sortable: false,
            filterable: false,
            hideable: false,
            renderCell: (params: any) => {
                return (
                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px",

                            "& img": {
                                width: 40,
                                height: 40,
                                borderRadius: 50
                            }
                        }}
                    >
                        {
                            params.row.img ?
                                <img src={params.row.img} alt="foto-perfil" />
                                :
                                <Avatar />
                        }
                    </Box>
                )
            }
        },
        {
            field: 'id',
            headerName: 'ID',
            width: 60
        },
        {
            field: 'nome',
            headerName: 'Nome',
            minWidth: 180,
            flex: 1
        },
        {
            field: 'email',
            headerName: 'Email',
            minWidth: 230,
            flex: 1
        },
        {
            field: 'trilha',
            headerName: 'Trilhas',
            minWidth: 90,
            maxWidth: 200,
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 140,
            renderCell: (params: any) => {
                return (
                    <Typography
                        variant="body2"
                        color={params.value === 'T' ? 'text.primary' : 'red'}
                    >
                        {params.value === 'T' ? 'disponivel' : 'Indisponivel'}
                    </Typography>
                )
            }
        },
        {
            field: 'acoes',
            headerName: 'Ações',
            width: 120,
            sortable: false,
            filterable: false,
            hideable: false,
            renderCell: (params: any) => {
                return (
                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px"
                        }}
                    >
                        <Tooltip title="Editar">
                            <Button variant="contained" id="edit" sx={{ width: '40px', minWidth: "40px", opacity: 0.7, "&:hover": { opacity: 1 } }} onClick={() => { console.log(params.row); navigate('/talento/editar', { state: params.row }) }}>
                                <EditNoteIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip title="Deletar">
                            <Button variant="contained" id="delete" sx={{ background: "red", width: '40px', minWidth: "40px", opacity: 0.7, "&:hover": { opacity: 1, background: "red" } }} onClick={() => console.log(params.row.id)}>
                                <DeleteIcon />
                            </Button>
                        </Tooltip>
                    </Box>
                )
            },
        }
    ];

    return (
        <Grid container spacing={2} sx={{ paddingInline: "20px", marginBlock: "20px" }}>
            <Grid item xs={12}>
                <Stack
                    direction={{
                        xs: 'column',
                        sm: 'row'
                    }}
                    spacing={2}
                >
                    <FormControl fullWidth variant="outlined" size="small">
                        <InputLabel>Pesquisar por Email</InputLabel>
                        <OutlinedInput
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setEmail(emailInput)} edge="end">
                                        <Search color="primary" />
                                    </IconButton>
                                </InputAdornment>
                            }
                            id="candidatos-search-by-email"
                            label="Pesquisar por Email"
                            value={emailInput}
                            onChange={e => {
                                setEmailInput(e.target.value)
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth size="small">
                        <InputLabel>Filtrar por Stack</InputLabel>
                        <Select
                            label="Filtrar por trilha"
                            id="candidatos-filter-by-trilha"
                            defaultValue=""
                            value={trilha}
                            onChange={e => {
                                setTrilha(e.target.value)
                            }}
                            sx={{ color: 'black' }}
                        >
                            {trilhaArr?.map((trilha: any) => {
                                return (
                                    <MenuItem
                                        key={trilha.nome}
                                        value={trilha.nome}
                                        id={`filtro-trilha-${trilha.nome}`}
                                    >
                                        {trilha.nome}
                                    </MenuItem>
                                )
                            })}
                            ;
                        </Select>
                    </FormControl>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '15px'
                        }}
                    >
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <CustomButton
                                color={"var(--font-color-primary)"}
                                backgroundcolor={"var(--bg-section-claro)"}
                                backgroundcolorhover={"var(--bg-section-escuro)"}
                                onClickButton={resetFiltro}
                            >
                                Limpar
                            </CustomButton>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Link to='/adicionar'>
                                <CustomButton
                                    color={"var(--font-color-primary)"}
                                    backgroundcolor={"var(--bg-section-claro)"}
                                    backgroundcolorhover={"var(--bg-section-escuro)"}
                                >
                                    <Box
                                        sx={{
                                            gap: '10px',
                                            display: 'flex'
                                        }}
                                    >
                                        <PersonAddIcon />
                                        Adicionar
                                    </Box>
                                </CustomButton>
                            </Link>
                        </Box>
                    </Box>
                </Stack>
            </Grid>
            {
                smDown ?
                    <Grid item xs={12} sx={{ height: 'calc(100vh)', width: '100%', }}>
                        {isLoading ? (
                            <LinearProgress />
                        ) : (
                            <Box
                                component="div"
                                sx={{
                                    boxShadow: 2,
                                    borderRadius: "5px",
                                    height: "100%",
                                    width: "100%",
                                    p: "5px",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "5px",
                                    scrollBehavior: "smooth",
                                    overflow: 'auto',
                                    background: "rgba(0, 0, 0, .1)"
                                }}

                            >
                                {[...Array(6)].map((_, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            width: "100%",
                                            height: "200px",
                                            background: "white",
                                            borderRadius: "5px",
                                            display: "flex",
                                        }}
                                    />
                                ))}
                            </Box>
                        )}
                    </Grid>
                    :
                    <Grid item xs={12} sx={{ height: 'calc(100vh - 223px)', width: '100%' }}>
                        {isLoading ? (
                            <LinearProgress />
                        ) : (
                            <DataGrid
                                rows={rows() || []}
                                columns={columns}
                                initialState={{
                                    pagination: { paginationModel: { pageSize: 22 } },
                                }}
                                // onRowClick={({ row }) => {
                                //     navigate('/candidatos/curriculo', { state: row })
                                // }}
                                sx={{
                                    boxShadow: 2
                                }}
                                hideFooter
                            />
                        )}
                    </Grid>
            }
            <Grid item xs={12} display="flex" justifyContent="center">
                <Pagination
                    count={2}
                    color="primary"
                    size="small"
                    onChange={(_, page) => {
                        setPage(page - 1)
                    }}
                    page={page + 1}
                />
            </Grid>
        </Grid>
    )
};