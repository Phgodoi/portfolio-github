import { ButtonContainer } from "./ButtomStyle";
import { IButton } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ title, icon, variant = "primary", onClick }: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="2x" />
      {title}
    </ButtonContainer>
  );
};

export { Button };
