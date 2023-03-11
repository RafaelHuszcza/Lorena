import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

const Header = () => {
  const history = useHistory();

  function myFunction() {
    alert("Essa Opção é Inválida");
  }

  return (
    <div className="pedido">
      <div className="divnada">
        <p id="name">Lorena Vizzoni da Silva Coelho</p>
        <p id="aceita">Você aceita Namorar Comigo</p>
        <div className="Botoes">
          <button
            onClick={() =>
              (window.location.href =
                "https://www.youtube.com/watch?v=WgTMeICssXY")
            }
            id="sim"
          >
            Sim
          </button>
          <button id="nao" onClick={myFunction}>
            Não
          </button>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Header;
