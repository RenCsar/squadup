export type TButtonProps = {
    color?: string;
    backgroundColor?: string;
    fontSize?: string;
    borderRadius?: string;
    colorHover?: string;
    backgoundColorHover?: string;
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