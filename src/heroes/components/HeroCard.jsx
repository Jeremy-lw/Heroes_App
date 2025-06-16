import { Link } from "react-router";

export const HeroCard = ( {id, superhero, publisher, alter_ego, first_appearence, characters} ) => {

    const imgUrl = `/assets/heroes/${id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={imgUrl} className="card-img" alt={ superhero } />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                        </div>
                    </div>

                    <p className="card-text">{alter_ego}</p>

                    {
                        (alter_ego != characters ) && (<p>{characters}</p>)
                    }

                    <p className="card-text">
                        <small className="text-muted">{first_appearence}</small>
                    </p>

                    <Link to={`/hero/${id}`}>
                        Info
                    </Link>
                </div>
            </div>
        </div>
    )
}