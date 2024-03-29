import { Container } from "./AddForm.Styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    TextField,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Tooltip,
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import InputMask from "react-input-mask";
import { addTalentSchema } from "../../../schemas/addTalentSchema";
import { estadosBrasileiros, stacks } from "../../../utils/elementos";
import { formatDate } from "../../../utils/functions/dateUtils";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CustomButton from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { TAddFormProps, TAddTalent } from "../../../utils/types";
import { Store } from "../../../store/store";
import { addTalent, updateTalent } from "../../../store/reducers/talent.Slice";

const AddForm = ({ state }: TAddFormProps) => {
    const [value, resetValue] = useState(0);
    const [imgTalent, setImgTalent] = useState(state?.img ? state.img : '');

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<TAddTalent>({
        resolver: yupResolver(addTalentSchema),
    });

    const onSubmit = (data: TAddTalent) => {
        const newTalent = {
            ...data,
            dataNascimento: formatDate(data.dataNascimento),
        };

        if (state) {
            Store.dispatch(updateTalent({ talentData: newTalent, talentId: state.id }));
        } else {
            Store.dispatch(addTalent(newTalent));
        }
        reset();
        resetValue(value + 1);
        setImgTalent('');
        state = undefined;
        navigate("/talentos");
    };

    return (
        <Container>
            <Box className="container-geral">
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    <Box
                        sx={{
                            color: "var(--vermelho)",
                            display: "flex",
                            flexDirection: "column",
                            position: "absolute",
                            left: 0,
                            cursor: "pointer",

                            "&:hover": {
                                color: "var(--vermelho-hover)"
                            }
                        }}
                        onClick={() => navigate("/talentos")}
                    >
                        <ArrowBackIcon />
                        <p>Voltar</p>
                    </Box>
                    <Box className="title-container"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            width: smDown ? "150px" : "100%",
                        }}
                    >
                        <PersonAddIcon color="primary" sx={{
                            display: smDown ? "none" : "block",
                        }} />
                        <h2>{state ? "Editar Talento" : "Adicionar Talento"}</h2>
                    </Box>
                </Box>
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={12} lg={12} xl={12}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "10px",
                                width: '100%',
                                height: 290,
                                mb: errors.img?.message ? "20px" : 0,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    width: 200,
                                    height: 200,

                                    "& img": {
                                        width: 200,
                                        height: 200,
                                        borderRadius: 50,
                                    }
                                }}
                            >
                                {
                                    imgTalent == '' ?
                                        <AccountCircleIcon sx={{ fontSize: 200, color: 'var(--azul-claro)' }} />
                                        :
                                        <img src={imgTalent} alt="imagem do talento" onError={() => setImgTalent('')} />
                                }
                            </Box>
                            <Grid item xs={12} md={12} lg={12} xl={12}
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <Tooltip
                                    title={`Insira a URL de uma imagem para ser utilizada como foto do perfil. O link deve começar com "https://" ou "data:image".`}
                                    placement="top"
                                    arrow
                                >
                                    <TextField
                                        fullWidth
                                        label="URL da Imagem"
                                        error={!!errors.img}
                                        helperText={`${errors.img?.message ? errors.img?.message : ''}`}
                                        id="url-img"
                                        {...register("img")}
                                        key={value}
                                        onChange={(e) => setImgTalent(e.target.value)}
                                        defaultValue={state?.img}
                                    />
                                </Tooltip>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <TextField
                                fullWidth
                                label="Nome"
                                error={!!errors.nome}
                                helperText={`${errors.nome?.message ? errors.nome?.message : ''}`}
                                id="step-1-nome"
                                {...register("nome")}
                                defaultValue={state?.nome}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <TextField
                                fullWidth
                                label="E-mail"
                                error={!!errors.email}
                                helperText={`${errors.email?.message ? errors.email?.message : ''}`}
                                id="step-1-email"
                                {...register("email")}
                                key={value}
                                defaultValue={state?.email}
                            />
                        </Grid>

                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <InputMask
                                mask="************"
                                maskChar=" "
                                {...register("rg")}
                                key={value}
                                defaultValue={state?.rg}
                            >
                                {
                                    // @ts-ignore
                                    (inputProps) => (
                                        <TextField
                                            {...inputProps}
                                            label="RG"
                                            variant="outlined"
                                            id="step-1-rg"
                                            helperText={`${errors.rg?.message ? errors.rg?.message : ''}`}
                                            error={!!errors.rg}
                                            sx={{
                                                width: "100%",
                                            }}
                                        />
                                    )
                                }
                            </InputMask>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <InputMask
                                mask="999.999.999-99"
                                maskChar=" "
                                {...register("cpf")}
                                key={value}
                                defaultValue={state?.cpf}
                            >
                                {
                                    // @ts-ignore
                                    (inputProps) => (
                                        <TextField
                                            {...inputProps}
                                            label="CPF"
                                            variant="outlined"
                                            id="step-1-cpf"
                                            helperText={errors.cpf?.message}
                                            error={!!errors.cpf}
                                            sx={{
                                                width: "100%",
                                            }}
                                        />
                                    )
                                }
                            </InputMask>
                        </Grid>

                        <Grid item xs={12} md={6} lg={6} xl={6} display="flex" flexDirection="column">
                            <InputMask
                                mask="(99)99999-9999"
                                maskChar=" "
                                {...register("telefone")}
                                key={value}
                                defaultValue={state?.telefone}
                            >
                                {
                                    // @ts-ignore
                                    (inputProps) => (
                                        <TextField
                                            {...inputProps}
                                            label="Telefone"
                                            variant="outlined"
                                            error={!!errors.telefone}
                                            helperText={errors.telefone?.message}
                                            id="step-1-telefone"
                                        />
                                    )
                                }
                            </InputMask>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                label="Data de Nascimento"
                                type="date"
                                error={!!errors.dataNascimento}
                                helperText={`${errors.dataNascimento?.message ? errors.dataNascimento?.message : ''}`}
                                id="step-1-dataNascimento"
                                InputLabelProps={{ shrink: true }}
                                {...register("dataNascimento")}
                                defaultValue={state ? state.dataNascimento.split("/").reverse().join("-") : ''}
                            />
                        </Grid>

                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                label="Cidade"
                                error={!!errors.cidade}
                                helperText={`${errors.cidade?.message ? errors.cidade?.message : ''}`}
                                id="step-1-cidade"
                                {...register("cidade")}
                                key={value}
                                defaultValue={state?.cidade}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <FormControl fullWidth>
                                <InputLabel>Estado</InputLabel>
                                <Select
                                    label="Estado"
                                    error={!!errors.estado}
                                    defaultValue={state ? state.estado : "Acre"}
                                    id="step-1-estado"
                                    {...register("estado")}
                                    key={value}
                                >
                                    {estadosBrasileiros.map((estado) => (
                                        <MenuItem key={estado.id} value={estado.nome}>
                                            {estado.nome}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <FormControl fullWidth>
                                <InputLabel>Status</InputLabel>
                                <Select
                                    label="Status"
                                    error={!!errors.status}
                                    defaultValue={state ? state.status : "T"}
                                    id="step-1-status"
                                    {...register("status")}
                                    key={value}
                                >
                                    <MenuItem value="T">
                                        Disponível
                                    </MenuItem>
                                    <MenuItem value="F">
                                        Indisponível
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <FormControl fullWidth>
                                <InputLabel>Stack</InputLabel>
                                <Select
                                    label="Stack"
                                    error={!!errors.stack}
                                    defaultValue={state ? state.stack : "Frontend"}
                                    id="step-1-stack"
                                    {...register("stack")}
                                    key={value}
                                >
                                    {stacks.map((stack) => (
                                        <MenuItem key={stack.id} value={stack.nome}>
                                            {stack.nome}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Box className="btn-container">
                                <CustomButton
                                    type="submit"
                                >
                                    {state ? "Editar" : "Adicionar"}
                                </CustomButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default AddForm;