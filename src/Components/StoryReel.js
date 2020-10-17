import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel' >
            <Story
                image='/images/sonnystory.webp'
                profileSrc='/images/24712956.jpg'
                title='Sonny Sangha'
            />
            <Story
                image='/images/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg'
                profileSrc='https://media-exp1.licdn.com/dms/image/C4E03AQGivOvOWtHbhQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=KLHRHD6oZcHMHCmlVEqS7wGEEnjiYn9HdUzt41SNrcY'
                title='Rafeh Qazi '
            />
            <Story
                image='/images/nazstory.webp'
                profileSrc='/images/naz.jpg'
                title='Nazariy Dumanskyy '
            />

        </div>
    )
}

export default StoryReel
