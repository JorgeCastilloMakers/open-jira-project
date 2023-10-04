import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// Define una función middleware que se ejecutará antes de manejar una solicitud.
export function middleware(req: NextRequest) {
    // Verifica si la ruta de la solicitud comienza con '/api/entries/'.
    if (req.nextUrl.pathname.startsWith('/api/entries/')) {
        // Extrae el ID de la ruta eliminando '/api/entries/'.
        const id = req.nextUrl.pathname.replace('/api/entries/', '');
        // Crea una expresión regular para verificar si el ID es válido.
        const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
        
        // Si el ID no coincide con la expresión regular (no es un ID válido de MongoDB).
        if (!checkMongoIDRegExp.test(id)) {
            // Clona la URL de la solicitud y cambia la ruta y la búsqueda.
            const url = req.nextUrl.clone();
            url.pathname = '/api/bad-request';
            url.search = `?message=${id} is not a valid MongoID`;
            // Redirige la solicitud a la nueva URL.
            return NextResponse.rewrite(url);
        }
    }

    // Si la solicitud es válida, permite que continúe el procesamiento normal.
    return NextResponse.next();
}
 
// Configura un objeto con un matcher que coincide con las rutas '/api/entries/:path/'.
export const config = {
    matcher: [
        '/api/entries/:path/']
}