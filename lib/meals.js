import sql from 'better-sqlite3';
const db = sql('meals.db');

    export async function getMeals(){
        await new Promise((resolve)=> setTimeout(resolve, 2500)); // Simulate a delay
        // throw new Error('Failed to fetch meals');
        return db.prepare('SELECT * FROM meals').all();
    }

export async function getMealById(id) {
    await new Promise((resolve)=> setTimeout(resolve, 2500)); // Simulate a delay
    return db.prepare('SELECT * FROM meals WHERE id = ?').get(id);
}