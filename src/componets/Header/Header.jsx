
import rickAndMortyLogo from '../../assets/logo.png';
import rickAndMorty from '../../assets/kCyZc7mvqHdeUGpguSGxsWPxqpI.png';

const Header = (props) => {

    return (

        <div>
            <nav className="navbar navbar-expand-md bg-white navbar-white mb-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <h1 className="m-0 text-center"><img className="img-fluid w-50" src={rickAndMortyLogo} alt="" /></h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item" onClick={(event)=>{
                                    event.preventDefault(); 
                                    props.handleOptions('character'); 
                                     }}>
                                <a id='personagens' className="nav-link" aria-current="page" href="" >Personagens</a>
                            </li>
                            <li className="nav-item" onClick={(event)=>{event.preventDefault(); props.handleOptions('location')}}>
                                <a className="nav-link" href="">Locais</a>
                            </li>
                            <li className="nav-item" onClick={(event)=>{ event.preventDefault(); props.handleOptions('episode')}}>
                                <a className="nav-link" href="">Episódios</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='d-flex justify-content-center mb-3'>
                <img className="img-fluid w-25 d-none d-md-block" src={rickAndMorty} alt="" />
                <img className="img-fluid w-50 d-block d-md-none " src={rickAndMorty} alt="" />
            </div>
            
        </div>


    )
}
export default Header