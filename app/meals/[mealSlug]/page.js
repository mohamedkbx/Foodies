import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default  function MealDetailsPage({params}) {

  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }

  return <>
  <header className={classes.header}>
    <div className={classes.image}>
      <Image src={meal.image} alt={meal.title} fill />
    </div>
    <div className={classes.headerText}>
      <h1>{meal.title}</h1>
      <p className={classes.creator}>
        by <a href="#">{meal.creator}</a>
      </p>
      <p className={classes.summary}>
        {meal.summary}
      </p>
    </div>
  </header>
  <main>
    <p className={classes.instructions} dangerouslySetInnerHTML={{ 
      __html:meal.instructions.replace(/\n/g, '<br />')
    }}></p>
  </main>
  </>
}
