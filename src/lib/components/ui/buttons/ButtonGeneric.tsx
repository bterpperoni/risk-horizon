
import type { ButtonPropsGeneric } from "$/types/global";


function Button({href, onClick, children, ...props }: ButtonPropsGeneric) {
  const buttonProps = {
    ...props,
    children,
    onClick,
  };

  if (href) {
    return (
      <a href={href} {...buttonProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button {...buttonProps}>
        {children}
      </button>
    );
  }
}

export default Button;