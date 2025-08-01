import fs from 'node:fs'
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

    export async function getMeals(){
        await new Promise((resolve)=> setTimeout(resolve, 2500)); // Simulate a delay
        // throw new Error('Failed to fetch meals');
        return db.prepare('SELECT * FROM meals').all();
    }

export  function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true});
    meal.instructions = xss(meal.instructions);
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferImage), (error) => {
        if (error) {
            throw new Error('Failed to save image');
        }
    });
    meal.image = `/images/${fileName}`;

    db.prepare(`
        INSERT INTO meals (title, summary, instructions,creator, creator_email, image, slug)
        VALUES (
         @title,
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @image,
         @slug
        )
        `

    ).run(meal);
}

