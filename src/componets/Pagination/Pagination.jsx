const Pagination = ({ info , handlePage, handlePrevPage, handleNextPage }) => {
    const totalPages = info.pages;
    const count = info.count;
    const next = info.next;
    const prev = info.prev

    const pages = [];

    const MAX_ITEMS = 7;
    const MAX_LEFT = (MAX_ITEMS - 1) / 2
    const LIMIT = 20;

    // const totalPages = Math.ceil(info.count / LIMIT );
    let pageNext = next.split('').filter(char => !isNaN(char) && char !== ' ').join('');

    let currentPage = prev === null? 1 : next == null ? totalPages : pageNext -1 ;

    const first = Math.max(currentPage - MAX_LEFT, 1 );

    for (let i = first ; i <= Math.min((first + (MAX_ITEMS-1)),totalPages); i++) {
        pages.push(i);
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center m-3 ">
                <li className="page-item"><a className={`page-link segundo-text-color ${ prev === null ? 'disabled' : null }`} href="" onClick={(event)=>{event.preventDefault(); handlePrevPage()}}>Anterior</a ></li>
                {pages.map(page => 
                    <li key={page} id={page} className={`page-item ${currentPage===page ? 'active' : null}`}><a className="page-link segundo-text-color" href="#" onClick={(event)=>{event.preventDefault(); handlePage(page)}}>{page}</a></li>
                )}
                <li className="page-item"><a className={`page-link segundo-text-color ${ next === null ? 'disabled' : null }`} href="#" onClick={(event)=>{event.preventDefault(); handleNextPage()}}>Próximo</a></li>
            </ul>
        </nav>

    )

}

export default Pagination;