import { Card } from 'antd';
import RecipeCard from './RecipeCard';

export default function RecipeList({ recipes }) {
  if (!recipes.length) {
    return <p className="empty-message">Рецепты не найдены.</p>;
  }

  return (
    <div style={{ display: 'flex', gap: "15px", flexWrap: 'wrap' }}>
      {recipes.map((recipe) => (
        <Card>
          <RecipeCard key={recipe.id} recipe={recipe} />
        </Card>
      ))}
    </div>
  );
}