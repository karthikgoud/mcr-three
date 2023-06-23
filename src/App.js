import { useState } from "react";
import "./App.css";

import { FaSort } from "react-icons/fa";
import { snacks } from "./data/tableData";

function App() {
  const [data, setData] = useState({
    products: snacks,
    searchText: "",
    sortValue: true,
    sortType: null,
  });

  const sortedData = data.products.toSorted((a, b) =>
    data.sortValue
      ? a[data.sortType] - b[data.sortType]
      : b[data.sortType] - a[data.sortType]
  );

  const filterIngre = sortedData.filter((product) =>
    product.ingredients.find((ingredient) =>
      ingredient.toLowerCase().includes(data.searchText.toLowerCase())
    )
  );

  const filterByName = sortedData.filter((product) =>
    product.product_name.toLowerCase().includes(data.searchText.toLowerCase())
  );

  const filterProducts = [...new Set([...filterByName, ...filterIngre])];
  console.log(data);

  return (
    <div className="App">
      <div className="table-search">
        <label>Search:</label>
        <input
          type="text"
          value={data.searchText}
          onChange={(e) =>
            setData((prev) => ({ ...prev, searchText: e.target.value }))
          }
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>
              Id
              <button
                onClick={(e) =>
                  setData((prev) => ({
                    ...prev,
                    sortValue: !prev.sortValue,
                    sortType: "id",
                  }))
                }
              >
                <FaSort />
              </button>
            </th>
            <th>
              Product Name{" "}
              <button
                onClick={(e) =>
                  setData((prev) => ({
                    ...prev,
                    sortValue: !prev.sortValue,
                    sortType: "product_name",
                  }))
                }
              >
                <FaSort />
              </button>
            </th>
            <th>
              Product Weight
              <button
                onClick={(e) =>
                  setData((prev) => ({
                    ...prev,
                    sortValue: !prev.sortValue,
                    sortType: "product_weight",
                  }))
                }
              >
                <FaSort />
              </button>
            </th>
            <th>
              Price
              <button
                onClick={(e) =>
                  setData((prev) => ({
                    ...prev,
                    sortValue: !prev.sortValue,
                    sortType: "price",
                  }))
                }
              >
                <FaSort />
              </button>
            </th>
            <th>
              Calories
              <button
                onClick={(e) =>
                  setData((prev) => ({
                    ...prev,
                    sortValue: !prev.sortValue,
                    sortType: "calories",
                  }))
                }
              >
                <FaSort />
              </button>
            </th>
            <th>
              Ingredients
              <button
                onClick={(e) =>
                  setData((prev) => ({
                    ...prev,
                    sortValue: !prev.sortValue,
                    sortType: "ingredients",
                  }))
                }
              >
                <FaSort />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filterProducts.map((product) => {
            const {
              id,
              product_name,
              product_weight,
              price,
              calories,
              ingredients,
            } = product;
            return (
              <tr>
                <td>{id}</td>
                <td>{product_name}</td>
                <td>{product_weight}</td>
                <td>{price}</td>
                <td>{calories}</td>
                <td>{ingredients}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
