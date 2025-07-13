import ImageSlideshow from '@/components/images/image-slideshow';
import styles from './page.module.css'
import  Link  from 'next/link';

export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <div className={styles.slideshow}>
    <ImageSlideshow/>
      </div>
      <div>
        <div className={styles.hero}>
          <h1>Welcome to NextLevel Food</h1>
          <p>Discover delicious meals shared by a food-loving community.</p>
        </div>
        <div className={styles.cta}>
          <Link href="/community">Join to Community</Link>
          <Link href="/meals">Explore Meals</Link>
        </div>
      </div>
    </header>
    <main>
       <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
    </main>
    </>
  );
}
