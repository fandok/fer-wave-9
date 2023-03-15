import styles from "./Ini.module.css";

export default function IniComponent({ type, text }) {
  return (
    <h1 className={styles.headText}>
      Ini component yang {type} dan {text}
    </h1>
  );
}
