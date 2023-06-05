import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

const Category = ({params}) => {
  // console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item} key="1">
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://img.freepik.com/free-vector/tiny-house-concept-illustration_114360-9087.jpg?w=826&t=st=1685978770~exp=1685979370~hmac=a60346fbe51d7b8a4713bbfaadc4aaa0365ebec7b120bafb235d0a446efc8676"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item} key="2">
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://img.freepik.com/free-vector/tiny-house-concept-illustration_114360-9087.jpg?w=826&t=st=1685978770~exp=1685979370~hmac=a60346fbe51d7b8a4713bbfaadc4aaa0365ebec7b120bafb235d0a446efc8676"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Category