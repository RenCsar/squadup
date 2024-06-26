import * as Yup from "yup";
const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

export const addTalentSchema = Yup.object().shape({
    nome: Yup.string()
        .required("O nome é obrigatório")
        .min(3, "O nome deve ter no mínimo 3 letras")
        .max(50, "O nome deve ter no máximo 50 letras")
        .matches(regex, "O nome deve ter apenas letras e espaços")
        .test("nome", "O nome deve ter no mínimo sobrenome", (value: string| Yup.AnyObject| undefined| "") => {
            if (value) {
                const [nome, sobrenome] = value.split(" ");
                return nome && sobrenome;
            }
            return false;
        }),

    email: Yup.string()
        .required("O email é obrigatório")
        .min(3, "O email deve ter no mínimo 3 letras")
        .max(50, "O email deve ter no máximo 50 letras")
        .email("O email deve ser um endereço de email válido"),
    rg: Yup.string()
        .required("O RG é obrigatório")
        .max(12, "O RG deve ter no máximo 12 letras"),
    cpf: Yup.string()
        .required("O CPF é obrigatório")
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "O CPF deve ser um número válido"),

    telefone: Yup.string()
        .required("O telefone é obrigatório")
        .matches(
            /^\(\d{2}\)\d{5}-\d{4}$/,
            "O telefone deve ser um número válido no formato (99)99999-9999"
        ),

    cidade: Yup.string()
        .required("A cidade é obrigatória")
        .min(3, "A cidade deve ter no mínimo 3 letras")
        .max(50, "A cidade deve ter no máximo 50 letras")
        .matches(regex, "A Cidade deve ter apenas letras e espaços")
        .test("cidade", "A cidade não pode conter apenas espaço", (value: string| Yup.AnyObject| undefined| "") => {
            if (value?.trim().length == 0) {
                return false;
            }
            return true;
        }),

    dataNascimento: Yup.date()
        .required("A data de nascimento é obrigatória")
        .typeError("A data de nascimento deve ser uma data válida")
        .max(new Date(), "A data de nascimento deve ser anterior a data atual")
        .min(
            new Date(1900, 0, 1),
            "A data de nascimento deve ser posterior a 01/01/1900"
        )
        .test(
            "dataNascimento",
            "A data de nascimento deve ter no mínimo 18 anos",
            (value) => {
                if (value) {
                    const dataNascimento = new Date(value);
                    const dataAtual = new Date();
                    const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
                    return idade >= 18;
                }
                return false;
            }
        ),
    img: Yup.string()
        .required("O Link da imagem é obrigatório")
        .matches(/^(https?:\/\/|data:image)/, 'Insira uma URL válida')
});
