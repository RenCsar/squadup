export type TButtonProps = {
    color?: string;
    backgroundcolor?: string;
    fontSize?: string;
    borderRadius?: string;
    colorHover?: string;
    backgroundcolorhover?: string;
    children?: React.ReactNode;
    onClickButton?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "submit" | "button" | "reset" | undefined;
};

export type TServiceListProps = {
    type?: string;
};

export type TServicesClientsProps = {
    title: string;
    img: string;
    classStyle: string;
    items: string[];
}

type TCarouselItemProps = {
    url: string;
};

export type TCarouselProps = {
    content: TCarouselItemProps[];
};

export type TBackgroundProps = {
    backgroundcolor?: string;
}

export type TSocialProps = TBackgroundProps & {
    isfooter: boolean;
}

export type TTalent = {
    idInscricao: number;
    candidato: {
        nome: string;
        img?: string;
        email: string;
        formulario: {
            trilhas: { nome: string; }[];
            turno: string;
        };
        telefone: string;
        estado: string;
    };
    disponivel: string;
}

export type TTalentProps = {
    key: number,
    talent: TTalent
}