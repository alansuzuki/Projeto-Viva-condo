import { NextResponse } from "next/server";
import { getCondominios } from "@/services/condominio.service";

//GET /api/condominios
export async function Get() {
    try {
        const data = await getCondominios();

        return NextResponse.json({
            sucess: true,
            count: data.length,
            data,
        }, { status: 200 }); 
    } catch (e: any) {
        return NextResponse.json ({
            sucess: false,
            error: e.message ?? "Erro inesperado",
        }, { status: 400});
        }
}

