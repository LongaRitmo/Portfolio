function Card ({dados}) {
    // console.log(dados.url);
    // fetch(dados.url, {headers: {"Access-Control-Allow-Origin":"*"}}).then(response => response.text()).then(data => console.log(data));
    return (
        <>
            <div className="card">
                <img src="/project-icon.png" alt="imagem" width={120} />
                <div className="card-body">
                    <h4 className="card-title">{dados.title}</h4>
                    <p className="card-text">{dados.description.substring(0,50)}</p>
                    <a href={dados.url} target="_blank" rel="noreferrer" className="btn btn-primary">Mais informações</a>
                </div>
            </div>
        </>
    );
}


export default Card;