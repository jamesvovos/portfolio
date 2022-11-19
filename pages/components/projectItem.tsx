import styles from "../../styles/Home.module.css";
import Image from "next/image";

type ItemProps = {
  link: string;
  title: string;
  text: string;
};

export default function ProjectItem(props: ItemProps) {
  return (
    <div className={styles.grid}>
      <a href={props.link} className={styles.card}>
        <h2>{props.title} &rarr;</h2>
        <p>{props.text}</p>
      </a>
    </div>
  );
}
