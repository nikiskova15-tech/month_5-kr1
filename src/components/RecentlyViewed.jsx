import { useRecipeStore } from '../store/useRecipeStore';
import RecipeCard from './RecipeCard';

export default function RecentlyViewed() {
    const recent = useRecipeStore((state) => state.recent);

    if (!recent.length) {
        return null;
    }

    return (
        <section>
            <h2>Недавно просмотренные</h2>

            <div className="recipes">
                {recent.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </section>
    );
}
