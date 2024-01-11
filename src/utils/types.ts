export type TButtonProps = {
    color?: string;
    backgroundcolor?: string;
    fontSize?: string;
    borderRadius?: string;
    colorHover?: string;
    backgroundcolorhover?: string;
    children?: React.ReactNode;
    onClickButton?: React.MouseEventHandler<HTMLButtonElement>;
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