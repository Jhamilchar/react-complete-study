import { useContexts } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-obj', () => {

    test('useContext debe retornar un objeto', () => {

        const clave = "1234";
        const edad = 15;

        const user = useContexts(clave, edad);

        expect( user ).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

     });

})





