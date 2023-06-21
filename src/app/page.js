
import styles from './page.module.css'
import Post from '@/components/Post'

export default function Home() {
  return (
    <main className={styles.main}>
      <Post />
    </main>
  )
}
