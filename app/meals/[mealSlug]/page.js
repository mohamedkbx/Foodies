import Image from 'next/image';
import classes from './page.module.css';
export default function MealDetailsPage() {
  return <>
  <header className={classes.header}>
    <div className={classes.image}>
      <Image fill />
    </div>
    <div className={classes.headerText}>
      <h1>Meal Details</h1>
      <p className={classes.creator}>
        by <a href="#">Chef Name</a>
      </p>
      <p className={classes.summary}>
        Summary
      </p>
    </div>
  </header>
  <main>
    <p className={classes.instructions} dangerouslySetInnerHTML={}></p>
  </main>
  </>
}
