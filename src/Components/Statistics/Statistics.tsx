import s from "./Statistics.module.css";
import { getRandomColor } from "../../helpers/getRandomColor";

type TStats = {
  id: string;
  label: string;
  percentage: number;
};

type Props = {
  title?: string;
  stats: TStats[];
};

const Statistics = ({ title, stats }: Props) => (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}

    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={s.item}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={s.label}>{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
