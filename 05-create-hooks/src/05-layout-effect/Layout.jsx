import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";


export const Layoutº = () => {

  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
  const { author, quote } = !!data && data[0];


  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />


    {
      isLoading
        ? <LoadingQuote />

        : <Quote author={author} quote={quote}/>


    }


    <button
      className="btn btn-primary"
      disabled= { isLoading }
      onClick={ () => decrement(1) }
    >
      Prev Quote
    </button>

    <button
      className="btn btn-primary"
      disabled= { isLoading }
      onClick={ () => increment(1) }>
      Next Quote
    </button>



    </>
    )
}
