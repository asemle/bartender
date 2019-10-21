import React from 'react';
import Cards, { Card } from 'react-swipe-card';
import FlipContainer from './FlipContainer';


const data = [11001,11003,11004,11006,11008,11728,14167,17181,17212,11007,11009,11000,11113,12089,17211,11410,11403,17252,11002,12528,11102,11690,17207,17196,13971,11008,12196,11600,14366,12402,17255,13731,17251]

export default function Wrapper() {
    return (
        <Cards onEnd={() => console.log('swipe left')} className='master-root'>
            {data.map(id =>
                <Card 
                    key={id}
                    
                    onSwipeLeft={() => console.log('swipe left')}
                    onSwipeRight={() => console.log('swipe left')}>
                    <FlipContainer id={id}/>
                </Card>
            )}
        </Cards>
    )
}