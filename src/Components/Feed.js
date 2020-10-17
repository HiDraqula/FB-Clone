import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import axios from '../axios'
import Pusher from 'pusher-js'

import db from '../firebase'

const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPostsData(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])
    useEffect(() => {
        console.log(postsData)
    })
    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />

            {
                postsData.map(({ data }) => (
                    <Post
                        profilePic={data.profilePic}
                        message={data.message}
                        timestamp={data.timestamp.seconds}
                        imgName={data.image}
                        username={data.username}
                    />
                ))
            }
        </div>
    )
}

export default Feed
