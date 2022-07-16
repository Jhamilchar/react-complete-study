import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroesById debe de retornar un héroe de ID', () => {

        const id = 1;
        const hero = getHeroeById( id )

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' } )

     })

    test('getHeroesById debe de retornar si no existe ID', () => {

        const id = 100;
        const hero = getHeroeById( id )
        expect( hero ).toBeFalsy()

     })

     //Tarea

    test('getHeroesOwner debe de retornar un heroe de owner DC', () => {

        const owner = "DC";
        const hero = getHeroesByOwner( owner )

        // console.log(hero);

        expect( hero.length ).toBe( 3 );
        expect( hero ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])

     })

    test('getHeroesOwner debe de retornar un heroe de owner MARVEL', () => {

        const owner = "Marvel";
        const hero = getHeroesByOwner( owner )

        // console.log(hero);

        expect( hero.length ).toBe( 2 );
        expect( hero ).toEqual([
          { id: 2, name: 'Spiderman', owner: 'Marvel' },
          { id: 5, name: 'Wolverine', owner: 'Marvel' },
        ])

     })


 });


