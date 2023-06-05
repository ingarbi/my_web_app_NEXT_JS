import Image from 'next/image'
import styles from './page.module.css'

const BlogId = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          desc
        </p>
        <div className={styles.author}>
          <Image
            src=''
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>username</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src=''
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
       desc
      </p>
    </div>
    </div>
  )
}

export default BlogId