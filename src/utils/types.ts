import { SlideProps } from "@mui/material/Slide";
import { ReactNode } from "react";

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

export type TAddTalentBase = {
    nome: string;
    email: string;
    rg: string;
    cpf: string;
    telefone: string;
    estado?: string;
    cidade: string;
    img: string;
    status?: string;
    stack?: string;
}

export type TAddTalent = TAddTalentBase & {
    dataNascimento: Date;
}

export type TAddTalentReq = TAddTalentBase & {
    dataNascimento: string;
}

export type TTalent = {
    id: string;
    nome: string;
    email: string;
    rg: string;
    cpf: string;
    telefone: string;
    estado: string;
    cidade: string;
    dataNascimento: string;
    img: string;
    status: string;
    stack: string;
}

export type APIResponse = {
    results: TTalent[];
    total: number;
}

export type TInitialState = {
    talents: TTalent[],
    loading: boolean;
    error: string | null;
    total: number;
    message: string | null;
}

export type TTalentProps = {
    key: number,
    talent: TTalent,
    onDeleteTalent: (id: string) => void
}

export type TAddFormProps = {
    state?: TTalent,
}

export type TOptionsConfirmDialog = {
    isOpen: boolean,
    title: string,
    onConfirm(): void
}

export type TOptionsConfirmDialogProps = {
    confirmDialog: TOptionsConfirmDialog,
    setConfirmDialog(options: TOptionsConfirmDialog): void
}

export type CustomizedSnackbarsProps = {
    error: string | null;
    message: string | null;
    tipo?: any;
};

export type TransitionProps = Omit<SlideProps, "direction">;

export type TGlobalSnackbarProps = {
    children: ReactNode;
}