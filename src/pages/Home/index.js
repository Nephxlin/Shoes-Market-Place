import React from 'react'
import {MdShoppingCart} from 'react-icons/md'

import {ProductList} from './styles'

export default function Home (){
  return(
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-20-masculino/26/NQQ-0144-026/NQQ-0144-026_detalhe1.jpg?ts=1581718228?ims=280x280" alt="tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff"/>3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-20-masculino/26/NQQ-0144-026/NQQ-0144-026_detalhe1.jpg?ts=1581718228?ims=280x280" alt="tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>
        <button>
          <div>
            <MdShoppingCart size={16} color="#fff"/>3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-20-masculino/26/NQQ-0144-026/NQQ-0144-026_detalhe1.jpg?ts=1581718228?ims=280x280" alt="tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>
        <button>
          <div>
            <MdShoppingCart size={16} color="#fff"/>3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-20-masculino/26/NQQ-0144-026/NQQ-0144-026_detalhe1.jpg?ts=1581718228?ims=280x280" alt="tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>
        <button>
          <div>
            <MdShoppingCart size={16} color="#fff"/>3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-20-masculino/26/NQQ-0144-026/NQQ-0144-026_detalhe1.jpg?ts=1581718228?ims=280x280" alt="tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>
        <button>
          <div>
            <MdShoppingCart size={16} color="#fff"/>3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-20-masculino/26/NQQ-0144-026/NQQ-0144-026_detalhe1.jpg?ts=1581718228?ims=280x280" alt="tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>
        <button>
          <div>
            <MdShoppingCart size={16} color="#fff"/>3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  )
}