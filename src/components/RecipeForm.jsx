import { useState } from "react"
import { useRecipeStore } from "../store/useFavoritesStore.js/useRecipeStore"


export default function TodoForm() {
    const [title, setTitle] = useState('')
    const { addTodo } = useRecipeStore()

    function handleSubmit(e) {
        e.preventDefault()
        addTodo(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Найти рецепт"
                style={{ flex: 1, padding: 0 }}
            />
            <button>Поиск</button>
        </form>
    )
}