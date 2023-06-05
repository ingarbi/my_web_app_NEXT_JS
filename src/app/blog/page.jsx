import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="blog/test" className={styles.container} key="1">
        <div className={styles.imageContainer}>
          <Image
            src="https://img.freepik.com/free-vector/tiny-house-concept-illustration_114360-9087.jpg?w=826&t=st=1685978770~exp=1685979370~hmac=a60346fbe51d7b8a4713bbfaadc4aaa0365ebec7b120bafb235d0a446efc8676"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="blog/test2" className={styles.container} key="2">
        <div className={styles.imageContainer}>
          <Image
            src="https://img.freepik.com/free-vector/tiny-house-concept-illustration_114360-9087.jpg?w=826&t=st=1685978770~exp=1685979370~hmac=a60346fbe51d7b8a4713bbfaadc4aaa0365ebec7b120bafb235d0a446efc8676"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
