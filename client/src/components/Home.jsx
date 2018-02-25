import React from 'react'
import {HomeCard, HomeContainer} from './styled components/Containers'
import {ToAdvButton} from './styled components/Buttons'



const Home = () => {
return (
    <HomeContainer>
        <HomeCard>
            <h3>Welcome to</h3>
            <h1>Tome!</h1>
            <p>One app to rule them all, Tome allows you to run your dungeons and dragons adventures all from one app!
                Gone are the days of juggling multiple resources, flipping through books and notes to find the right piece of information for your game.
                With Tome, all your resources from the adventure itself to monster stats are all within reach. Keep your story going and never get lost again. <span>For the best experience, please enjoy this app on a tablet or pc!</span>
            </p>
            <ToAdvButton>
                Adventures
            </ToAdvButton>
        </HomeCard>
    </HomeContainer>
)

}

export default Home