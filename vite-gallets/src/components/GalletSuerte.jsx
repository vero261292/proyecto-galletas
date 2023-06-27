

const GalletSuerte = (props) => {
    const{beta}= props

    return (
        <article >
            <h1>GALLETAS DE LA FORTUNA </h1>
            <div className="pras">
                <p>
                    {beta.phrase}
                </p>
            </div>

            <div className="aut">
                <p>
                    {beta.author}
                </p>
            </div>          
        </article>


    )
}

export default GalletSuerte



