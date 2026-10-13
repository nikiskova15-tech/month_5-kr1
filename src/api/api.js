
const API = 'https://dummyjson.com/recipes';

export async function getRecipes({ request }) {
    const url = new URL(request.url);

    const search = url.searchParams.get('search') || '';
    const sortBy = url.searchParams.get('sortBy') || 'name';
    const order = url.searchParams.get('order') || 'asc';

    let apiUrl = API;

    if (search.trim()) {
        apiUrl += `/search?q=${encodeURIComponent(search.trim())}`;
    } else {
        apiUrl += '?limit=9&skip=0';
    }

    const separator = apiUrl.includes('?') ? '&' : '?';

    apiUrl += `${separator}sortBy=${sortBy}&order=${order}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error('Не удалось загрузить рецепты');
    }

    return response.json();
}

export async function getRecipe({ params }) {
    const response = await fetch(`${API}/${params.id}`);

    if (!response.ok) {
        throw new Response('Рецепт не найден', { status: 404 });
    }

    return response.json();
}
