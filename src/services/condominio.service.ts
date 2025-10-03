import { createClient } from "@/utils/supabase/cliente";

export interface ICondominio {
    id_condominio: number;
    id_administradora: number;
    nome_condominio: string;
    endereco_condominio: string;
    cidade_condominio: string;
    uf_condominio: string; 
    tipo_condominio: string;
    created_at: string;
}

export async function getCondominios(): Promise<ICondominio[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("condominio")
        .select("*")
        .order("id_condominio");

    if (error) {
        console.error("Erro Supabase:", error.message);
        throw new Error("Erro ao buscar condomínios: " + error.message);
    }

    return data ?? [];
}