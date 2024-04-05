import React, { useEffect, useContext} from "react";
import "./style.css";
import Header from "../../components/Header";
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/index';
import Loading from '../../components/Loading/index';
import AppContext from '../../contexts/AppContext';
import Pedido from '../Pedido/index';


function Cardapio() {
  const { products, setProducts, loading1, setLoading1 } = useContext(AppContext);
  

  useEffect(() => {
    fetchProducts('pão').then((response) => {
      setProducts(response);
      setLoading1(false);
    });
  }, []);

  return (
    (loading1 && <Loading /> ) || (
      <div>
        <div><Header/></div>
      <section className="products">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
        <Pedido/>
      </section>
      </div>
    )

  );
}

export default Cardapio;