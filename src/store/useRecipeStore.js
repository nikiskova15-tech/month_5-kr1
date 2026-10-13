import { create } from "zustand"

export const useRecipeStore = create((set) => ({
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),

    recent: JSON.parse(localStorage.getItem('recent') || '[]'),

    toggleFavorite: (recipe) => {
        set((state) => {
            const exists = state.favorites.some(
                (item) => item.id === recipe.id
            )

            const favorites = exists
                ? state.favorites.filter((item) => item.id !== recipe.id)
                : [...state.favorites, recipe]

            localStorage.setItem('favorites', JSON.stringify(favorites))

            return { favorites }
        })
    },

    addRecent: (recipe) => {
        set((state) => {
            const recent = [
                recipe,
                ...state.recent.filter((item) => item.id !== recipe.id)
            ].slice(0, 5)

            localStorage.setItem('recent', JSON.stringify(recent))

            return { recent }
        })
    }
}))
