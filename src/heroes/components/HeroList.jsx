import { useMemo } from 'react';
import { getHeroesByPuclisher } from '../helpers'
import { HeroCard } from './';


export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPuclisher(publisher), [ publisher ]);

    return (    
        <div className='row rows-cols-1 row-cols-md-3 g-3'> 
            {
                heroes.map( hero => (                    
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}