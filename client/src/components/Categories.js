import React, { useState } from "react";
//import { FilterStyled } from '../Styles/Filter_styles';

function Categories({ searchCat, categories }) {
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  const regex = / /gi;
  return (
    //<FilterStyled>
    <div className="all">
      <form
        className="orderCat"
        onSubmit={(e) => {
          e.preventDefault();
          searchCat(input);
          setInput("");
        }}
      >
        <input
          className="send"
          type="submit"
          value="Categories"
          onClick={() => setShowResults(!showResults)}
        />
      </form>

      {showResults ? (
        <div className="results">
          {categories.map((cat) => {
            return (
              <li
                className="list"
                key={cat.id}
                // Window.open inicializa una nueva página con _blanck para generarla en otra pestaña
                // Normalice retorna la Forma de Normalización Unicode de la cadena dada. Utiliza una expresión regular
                onClick={() =>
                  window.open(
                    `https://www.mercadolibre.com.ar/c/${cat.name
                      .replace(regex, "-")
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")}`,
                    "_blank"
                  )
                }
                style={{ cursor: `pointer` }}
              >
                {cat.name}
              </li>
            );
          })}
        </div>
      ) : null}
    </div>
    //</FilterStyled>
  );
}

export default Categories;
