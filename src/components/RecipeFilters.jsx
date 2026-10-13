
const FILTERS = [
    { value: 'all', label: 'Все' }
]

export default function TodoFilters() {
    const { filter, setFilter } = useTodoStore()
    const { recipe } = useRecipeStore()

    return (
        <div style={{ display: 'flex', gap: 8 }}>
            {FILTERS.map((f) => (
                <button
                    key={f.value}
                    onClick={() => {
                        setFilter(f.value);
                        setFilteredTodos(filterTodos(todos, f.value))
                    }}
                    style={{ fontWeight: filter === f.value ? 700 : 400, color: filter === f.value ? 'green' : 'red' }}
                >
                    {f.label}
                </button>
            ))}
        </div>
    )
}