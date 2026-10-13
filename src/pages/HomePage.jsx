import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import RecipeFilters from '../components/RecipeFilters';
import RecentlyViewed from '../components/RecentlyViewed';

export default function HomePage() {
    const data = useLoaderData();

    return (
        <div>
            <h1>Книга рецептов</h1>

            <RecipeFilters />

            <div className="recipes">
                {data.recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>

            {data.recipes.length === 0 && (
                <p>Рецепты не найдены.</p>
            )}

            <RecentlyViewed />
        </div>
    );
}
