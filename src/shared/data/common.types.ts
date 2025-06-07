export interface WithClassName {
   className: string;
}

export interface WithActive {
   isActive: boolean;
}

export interface WithChildren {
   children: React.ReactNode;
}

export interface WithAdditionalClass {
   additionalClass: string;
}

export interface WithHandler<T = HTMLElement> {
   onClick: (event: React.MouseEvent<T>) => void;
}

export interface CommonProps extends WithClassName, WithChildren, WithActive, WithAdditionalClass {}

export type PartialCommonProps = Partial<CommonProps>;
