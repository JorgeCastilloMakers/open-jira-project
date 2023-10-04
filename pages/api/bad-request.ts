//controller
import type { NextApiRequest, NextApiResponse } from 'next'

// Define un tipo de dato para la respuesta JSON que se enviará.
type Data = {
    ok: boolean;
    message: string | string[];
}
// Define la función controladora que manejará las solicitudes entrantes.
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // Extrae el parámetro 'message' de la consulta de la solicitud o establece un valor predeterminado.
    const { message = 'Bad request' } = req.query; 
    
    // Establece el código de estado de la respuesta en 400 (Error de solicitud) y envía un objeto JSON como respuesta.
    res.status(400).json({
        ok: false, // Indica que la solicitud no fue exitosa.
        message // Incluye el mensaje de error en la respuesta.
    });
}