import React, { useEffect, useState} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../components/Header";



function Home() {
  const [comida, setComida] = useState([]);


  useEffect(() => {
    function carregaDados() {
      let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setComida(json.meals);
        })
        .catch((error) => {
          toast.error("Erro ao buscar filmes");
        });
    }

    carregaDados();
  }, []);

  return (
    <div>
    <Header/>
    <div className="container">
      {Array.isArray(comida) &&
        comida.map((item) => {
          return (
            <article className="post" key={item.idMeal}>
              <strong className="nome">{item.strMeal}</strong>
              <img className="foto" src={item.strMealThumb} />
              <a>
                <Link to={`/detalhes/${item.idMeal}`} className="botao">
                  Acessar
                </Link>
              </a>
            </article>
          );
        })}
    </div>
    </div>
  );
}

export default Home;