'use strict'
const Post = require("../../Models/Post")
class PostController {
  index() {
    return {status : 200 ,data : 'succ'}
  }
  async show({ request }){
    const {id} = request.body
    return {status : 200 ,data : id}
  }
  async store({ request }){
    const { title,name,cover_img_url,author  } = request.body
    const post = await Post.create({
      title,name,cover_img_url,author_id :author,
    })
    return {status : 200 ,data : post}
  }
}
module.exports = PostController
