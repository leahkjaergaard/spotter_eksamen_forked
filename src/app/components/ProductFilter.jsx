export default function ProductFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <aside className="w-48">
      <h3 className="font-bold mb-2">Filtrér</h3>
      <ul className="space-y-2 text-sm">
        {["Alle", ...categories].map((cat) => (
          <li key={cat} className={`cursor-pointer ${selectedCategory === cat ? "font-bold underline" : ""}`} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}
