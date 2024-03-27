import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import Header from "../../components/Header";

function Detalhes() {
  const { id } = useParams();
  const [comida, setComida] = useState([]);

  useEffect(() => {
    function carregaDados() {
      let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setComida(json.meals);
        })
        .catch((error) => {
          toast.error("Erro ao buscar filme");
        });
    }

    carregaDados();
  }, [id]);



  return (
    <div>
        <Header/>
    <div className="container">
      {comida.map((item) => {
        return (
          <article className="post" key={item.id}>
            <strong className="nome">{item.strMeal}</strong>
            <p className="sinopse">{item.strInstructions}</p>
            <p className="sinopse">{item.strIngredient1}</p>
            <p className="sinopse">{item.strIngredient2}</p>
            <p className="sinopse">{item.strIngredient3}</p>
            <p className="sinopse">{item.strIngredient4}</p>
            <img className="foto" src={item.strMealThumb} />
          </article>
        );
      })}
    </div>
    <div>
      <button>Adicionar ao Carrinho</button>
    </div>
    </div>
  );
}

export default Detalhes;