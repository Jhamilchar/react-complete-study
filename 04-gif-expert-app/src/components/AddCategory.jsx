import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories(categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setInputValue("");

        let spaces= "           asdaasd             "
        console.log(spaces);
    }

    return (
        <form onSubmit={  onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )


}