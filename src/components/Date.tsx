import { format, formatISO } from "date-fns";
import { arSA } from "date-fns/locale";

type Props = {
  date: Date;
};
export default function Date({ date }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span>{format(date, "d LLLL yyyy", {locale: arSA})}</span>
      <style jsx>
        {`
          span {
            color: #9b9b9b;
          }
        `}
      </style>
    </time>
  );
}
