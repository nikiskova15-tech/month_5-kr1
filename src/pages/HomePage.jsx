
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import SearchSort from '../components/SearchSort';
import RecentlyViewed from '../components/RecentlyViewed';

export default function HomePage() {
    const data = useLoaderData();

    return (
        <div>
            <h1>Книга рецептов</h1>

            <SearchSort />

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
