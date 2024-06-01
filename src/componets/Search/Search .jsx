const Search = (props) => {

    var value = '';

    function saveValues(v){
        value = v;
    }

    return (
        <div className="container mb-5">
            <form
                className="form-inline row justify-content-center"
                onSubmit={(event) => { event.preventDefault(); }}
            >
                <input
                    className="col-6 col-md-6 me-2 rounded-2"
                    onChange={(event) => { event.preventDefault(); saveValues(event.target.value) }}
                    type="search"
                    placeholder="Digite a sua busca"
                    aria-label="Search" />
                <button
                    className="btn principal-background-color text-branco-color col-3 col-md-1"
                    type="submit"
                    onClick={()=>{props.handleSearch(value)}}
                >
                    Buscar
                </button>
            </form>
        </div>
    )

}

export default Search;