import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
export default function MealsPage() {
  return <>
  <header className={classes.header}>
    <h1>Delicious Meals <span className={classes.highlight}>by you</span></h1>
    <p>choose your favorite Meal and cook it with your self</p>
    <p className={classes.cta}>
      <Link href="/meals/share"> Share your favorite Recipe</Link>
    </p>
  </header>
  <main className={classes.main}>
    <MealsGrid meals={[]}/>
  </main>
  </>
}
