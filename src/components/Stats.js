export default function Stats({ itemsObj }) {
  if (!itemsObj.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const numOfItems = itemsObj.length;
  const numPacked = itemsObj.filter((item) => item.packed === true).length;
  const packedPercent = Math.round((numPacked / numOfItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? `You got everything! Ready to go ✈`
          : `You have ${numOfItems} item(s) on your list, and you have already packed ${numPacked}. (${packedPercent}%)`}
      </em>
    </footer>
  );
}
