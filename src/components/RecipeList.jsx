import RecipeCard from './RecipeCard';

export default function RecipeList({ recipes }) {
    if (!recipes.length) {
        return <p className="empty-message">Рецепты не найдены.</p>;
    }

    return (
        <div className="recipes">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
}