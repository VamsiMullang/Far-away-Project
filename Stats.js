export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Some Items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Got Every Thing! Ready To Fly✈️"
          : `💼You Have ${numItems} Items on Your List , and you already packed
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
