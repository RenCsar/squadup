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
} from "@mui/material";
import InputMask from "react-input-mask";
import { addTalentSchema } from "../../../schemas/addTalentSchema";
import { estadosBrasileiros } from "../../../utils/estados";
import { formatDate } from "../../../utils/functions/dateUtils";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CustomButton from "../../ui/Button";

type TAddTalent = {
    nome: string;
    email: string;
    rg: string;
    cpf: string;
    telefone: string;
    estado?: string;
    cidade: string;
    dataNascimento: Date;
    img: string;
}

const AddForm = () => {
    const [value, resetValue] = useState(0);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<TAddTalent>({
        resolver: yupResolver(addTalentSchema),
    });

    const onSubmit = (data: any) => {
        data.dataNascimento = formatDate(data.dataNascimento);

        console.log(data)
        reset();
        resetValue(value + 1);
    };

    return (
        <Container>
            <Box className="container-geral">
                <Box className="title-container">
                    <PersonAddIcon color="primary" />
                    <h3>Adicionar Talento</h3>
                </Box>
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                label="Nome"
                                error={!!errors.nome}
                                helperText={`${errors.nome?.message ? errors.nome?.message : ''}`}
                                id="step-1-nome"
                                {...register("nome")}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                label="E-mail"
                                error={!!errors.email}
                                helperText={`${errors.email?.message ? errors.email?.message : ''}`}
                                id="step-1-email"
                                {...register("email")}
                                key={value}
                            />
                        </Grid>

                        <Grid item xs={12} md={3} lg={3} xl={3}>
                            <InputMask
                                mask="************"
                                maskChar=" "
                                {...register("rg")}
                                key={value}
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
                        <Grid item xs={12} md={3} lg={3} xl={3}>
                            <InputMask
                                mask="999.999.999-99"
                                maskChar=" "
                                {...register("cpf")}
                                key={value}
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

                        <Grid item xs={12} md={3} lg={3} xl={3} display="flex" flexDirection="column">
                            <InputMask
                                mask="(99)99999-9999"
                                maskChar=" "
                                {...register("telefone")}
                                key={value}
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
                        <Grid item xs={12} md={3} lg={3} xl={3}>
                            <TextField
                                fullWidth
                                label="Data de Nascimento"
                                type="date"
                                error={!!errors.dataNascimento}
                                helperText={`${errors.dataNascimento?.message ? errors.dataNascimento?.message : ''}`}
                                id="step-1-dataNascimento"
                                InputLabelProps={{ shrink: true }}
                                {...register("dataNascimento")}
                            />
                        </Grid>

                        <Grid item xs={12} md={3} lg={3} xl={3}>
                            <TextField
                                fullWidth
                                label="Cidade"
                                error={!!errors.cidade}
                                helperText={`${errors.cidade?.message ? errors.cidade?.message : ''}`}
                                id="step-1-cidade"
                                {...register("cidade")}
                                key={value}
                            />
                        </Grid>
                        <Grid item xs={12} md={3} lg={3} xl={3}>
                            <FormControl fullWidth>
                                <InputLabel>Estado</InputLabel>
                                <Select
                                    label="Estado"
                                    error={!!errors.estado}
                                    defaultValue="AC"
                                    id="step-1-estado"
                                    {...register("estado")}
                                    key={value}
                                >
                                    {estadosBrasileiros.map((estado) => (
                                        <MenuItem key={estado.id} value={estado.sigla}>
                                            {estado.nome}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={6} lg={6} xl={6}>
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
                                />
                            </Tooltip>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Box className="btn-container">
                                <CustomButton
                                    type="submit"
                                >
                                    Adicionar
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