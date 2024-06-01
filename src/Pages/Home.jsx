

const Home = ({ option }) => {

    return (
        <div className="container">
            <div className="row row-cols-2 row-cols-md-4 g-4">
                {option?.map((character) =>
                    <div key={character.id} className="col">
                        <div className="card">
                            {character.image == null 
                            ? <div></div> 
                            : <img src={character.image} className="card-img-top" alt="..." />}
                            <div className="card-body">
                                <h5 className="card-title segundo-text-color">{character.name}</h5>
                                <p className="card-text font-weight-bold">{character.status}</p>
                                
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Home;