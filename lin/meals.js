import sql from 'better-sqlite3'
import { resolve } from 'styled-jsx/css';

const db=sql('meals.db')

export async function getMeals(){
     await new Promise((resolve)=>setTimeout(resolve,2000));
    // throw new Error("An error occured")
    return db.prepare('SELECT * FROM meals').all();
}

export  function  getMeal(slug)
{
   // await new Promise((resolve)=>setTimeout(resolve,2000));
    return db.prepare('SELECT *FROM MEALS WHERE slug=?').get(slug);
}