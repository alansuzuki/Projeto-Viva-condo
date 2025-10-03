"use client";

import { useEffect, useState } from "react";
import { getCondominios, ICondominio } from "@/services/condominio.service";

export default function CondominiosPage() {
  const [condominios, setCondominios] = useState<ICondominio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const data = await getCondominios(); 
        setCondominios(data);
      } catch (err: any) {
        setError(err.message || "Erro inesperado");
      } finally {
        setLoading(false); 
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Erro: {error}</p>;
  }

  if (condominios.length === 0) {
    return <p>Nenhum condomínio encontrado</p>;
  }

  return (
    <div>
      <h1>Lista de Condomínios</h1>
      <ul>
        {condominios.map((c) => (
          <li key={c.id_condominio}>
            {c.nome_condominio} - {c.cidade_condominio}/{c.uf_condominio}
          </li>
        ))}
      </ul>
    </div>
  );
}