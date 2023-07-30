import { ButtonContainer } from "./style";
import { IButton } from "./types";

const Button = ({title, variant = 'primary'}: IButton) => {
  return <ButtonContainer variant={variant}>
    {title}
  </ButtonContainer>;
};

export { Button };
