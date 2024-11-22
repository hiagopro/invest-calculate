import React from "react";

// import { Container } from './styles';

const Hero: React.FC = () => {
  return (
    <div className="flex">
      <div className=" flex flex-col h-screen w-11/12 m-auto bg-purple-50 rounded-lg px-6 py-4 gap-2">
        <h1 className="font-Heebo font-bold text-2xl">Calculadora de Investimentos Online</h1>
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col gap-4 pb-4">
            <p>Tipo de investimento</p>
            <form action="" className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input type="radio" name="typeInvest" />
                <label htmlFor="CDB/LC/Títulos públicos/Debêntures">
                  CDB/LC/Títulos públicos/Debêntures
                </label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="typeInvest" />
                <label htmlFor="LCI/LCA">LCI/LCA</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="typeInvest" />
                <label htmlFor="Tesouro">Tesouro</label>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-4">
            <h1>É PRÉ fixado ou PÓS fixado?</h1>
            <form action="" className="flex gap-4 flex-col">
              <div className="flex  gap-2">
                {" "}
                <input type="radio" name="preouPos" />
                <label htmlFor="Pre">PRÉ</label>
              </div>
              <div className="flex  gap-2">
                {" "}
                <input type="radio" name="preouPos" />
                <label htmlFor="PÓS">PÓS</label>
              </div>
              <div className="flex  gap-2">
                {" "}
                <input type="radio" name="preouPos" />
                <label htmlFor="IPCA">IPCA</label>
              </div>
            </form>
          </div>
        </div>
        <div>
            <form action="" className="flex flex-col">
            <label htmlFor="">investimento inicial</label>
            <input type="number" />
            <label htmlFor="">investimento mensal</label>
            <input type="number" />
            <label htmlFor="">Prazo</label>
            <input type="number" className="h-8"/>
            <label htmlFor="">Rentabilidade</label>
            <input type="number" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
