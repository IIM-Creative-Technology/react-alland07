const Presentation = ({clas,titre,description,img}) => {
    return(
        <div className={clas}>
            <h2>Titre: {titre}</h2>
            <p>Titre: {description}</p>
            <img src={img} alt={description}/>
        </div>
    )
}

export default Presentation