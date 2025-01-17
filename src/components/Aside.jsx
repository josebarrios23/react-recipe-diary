const Aside = (props) => {
  return <aside>
    <h2>{props.name.firstName}'s Lists:</h2>
    <h3>Vegetarian</h3>
    <ul>{props.recipes.map((recipe) => recipe.isVegetarian === true && <li key={recipe.id}>{recipe.title}</li>)}</ul>

    <h3>Non-Vegetarian</h3>
    <ul>{props.recipes.map((recipe) => recipe.isVegetarian === false && <li key={recipe.id}>{recipe.title}</li>)}</ul>

    <h3>40 Minutes or less</h3>
    <ul>{props.recipes.map((recipe) => recipe.minutesToCook <= 40 && <li key={recipe.id}>{recipe.title}</li>)}</ul>
    </aside>;
    
};

export default Aside;
