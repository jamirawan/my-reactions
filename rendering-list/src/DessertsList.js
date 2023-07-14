function DessertsList(props) {
  // Filtering desserts with less than or equal to 500 calories
  const filteredDesserts = props.data.filter(dessert => dessert.calories <= 500);
  
  // Sorting desserts by calories in ascending order
  const sortedDesserts = filteredDesserts.sort((a, b) => a.calories - b.calories);
  
  return (
    <ul>
      {sortedDesserts.map(dessert => (
        <li key={dessert.id}>
          {`${dessert.name} - ${dessert.calories} cal`}
        </li>
      ))}
    </ul>
  );
}

export default DessertsList;

