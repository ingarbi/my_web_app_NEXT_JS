import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2023 MyApp. All rights reserved</div>
      <div className={styles.social}>
        <Image src='/vk.png' width={15} height={15} className={styles.icon} alt="vk.com"/>
        <Image src="/inst.png" width={15} height={15} className={styles.icon} alt="instagram"/>
        <Image src="/twitter.png" width={15} height={15} className={styles.icon} alt="twitter"/>
        <Image src="/yt.png" width={15} height={15} className={styles.icon} alt="youtube"/>
      </div>
    </footer>
  );
};

export default Footer;
