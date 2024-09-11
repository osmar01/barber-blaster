function Fruits() {
  const fruits = [
    { name: "apple", price: "4" },
    { name: "banana", price: "9" },
    { name: "pineapple", price: "7" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit: any) => (
          <li key={fruit.name}>
            {fruit.name} {fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
