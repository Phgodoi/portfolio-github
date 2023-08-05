import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface IButton {
    title?: string;
    variant?: string;
    onClick?: () => void;
    icon: IconDefinition;

    
}

export interface IButtonStyled {
    variant : string;
}
