import styles from "./Logo.module.scss";

export type Props = {};

const Logo: React.FC<Props> = () => {
  return <div className={styles.container}>Nikolai Stepanov</div>
} 

export default Logo;