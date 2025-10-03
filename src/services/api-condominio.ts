export interface ICondominio {

    id_condominio: string;
    nome_condominio: string;
    endereco_condominio: string;
    cidade_condominio: string;
    uf_condominio: string;
    tipo_condominio: string;
    create_at: string;
    id_cliente: number;

}

export const getCondominios = async () => {

    const response = await fetch("/api/condominios", {cache: "no-store"});
    const{data,sucess, count, error} = await response.json();


}