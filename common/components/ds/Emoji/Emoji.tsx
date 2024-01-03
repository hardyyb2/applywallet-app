import { cnM } from "@/utils/styles";

interface EmojiProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
  symbol: string;
}

const Emoji = ({ label, symbol, className, ...rest }: EmojiProps) => {
  return (
    <span
      className={cnM(className)}
      {...rest}
      role="img"
      aria-label={label || ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
};

export { Emoji };
