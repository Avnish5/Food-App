import Link from "next/link";
import classes from "./page.module.css";
import { getMeals } from "@/lin/meals";
import MealsGrid from "@/components/meals/meals-grid";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
export const metadata = {
  title: "All meals",
  description: "Delicious meals list.",
};
export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite recipe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
