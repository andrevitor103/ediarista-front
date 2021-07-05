import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = useState("");
  const cepValido = useMemo(() => {
    return ValidationService.cep(cep);
  }, [cep]);
  const [erro, setErro] = useState("");
  const [buscaFeita, setBuscaFeita] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [diaristas, setDiaristas] = useState([] as UserShortInterface[]);
  const [diaristasRestantes, setDiaristasRestantes] = useState(0);

  async function buscarProfissionais(cep) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro("");
    try {

      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>(`/api/diarista-cidade?cep=${cep.replace(/\D/g, "")}`);

      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
      console.log(diaristas);

      setBuscaFeita(true);
      setCarregando(false);
    } catch (error) {
      setErro("CEP não encontrado");
      setCarregando(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  };
}
