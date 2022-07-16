
describe('Pruebas en <DemoComponent />', () => {

    test("Esta prueba no debe fallar", () =>{

        //1. inicializacion
        const message1 = "Hola mundo";


        //2. estimulo
        const message2 = message1.trim();

        //3.obserbar el comportamento... esperado
        expect( message1 ).toBe( message2 );

    })


 });
