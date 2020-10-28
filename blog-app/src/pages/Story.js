import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import withHelmet from '../utils/withHelmet';

async function getPost (id) {
    const response = await fetch.get(`http:localhost:3333/api/v1/posts/${id}`)
    return response.json()
  } 

function usePostData (postId) {
  const [post, setPost] = useState({})
  const [isLoading,setLoading] = useState(false)
  const [error, setError] = useState(undefined)

async function reteivaData(){
  try {
    setLoading(true)
    const postResponse = await getPost (postId)
    setPost(postResponse)
  } 
  catch (err) {
    setError(err)
  }
    setLoading(false)
  }
  return [ {post, isLoading,error}, {reteivaData} ]
}

function Story () {
  const { storyId } = useParams()
  return <div>
    
    Story page { storyId }

  </div>
}

export default withHelmet('Blog App | Story')(Story);