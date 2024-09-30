const posts = [
    { id: '1', topic: 'test1', text: 'text-1' },
    { id: '2', topic: 'test2', text: 'text-2' },
    { id: '3', topic: 'test3', text: 'text-3' }
]

const getAllPosts = (req, res) => {
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: posts
        }
    })
}

const getPostById = (req, res) => {
    const { id } = req.params
    const post = posts.find(item => item.id === id)
    if (!post) {
        res.json({
            status: 'error',
            code: 404,
            data: `Post with id=${id} not found`
        })
    }
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: post
        }
    })
}

const addPost = (req, res) => {
    const { topic, text } = req.body

    const newPost = { id: v4(), topic, text }
    posts.push(newPost)
    res.json({
        status: 'success',
        code: 201,
        data: {
            result: newPost
        }
    })

}

const changePostById = (req, res) => {
    const { id } = req.params
    const data = req.body

    const postIdx = posts.findIndex(item => item.id === id)
    const changedPost = { ...posts[postIdx], ...data }
    posts[postIdx] = changedPost
    res.json({
        status: 'success',
        code: 201,
        data: {
            result: changedPost
        }
    })
}

const deletePostById = (req, res) => {
    const { id } = req.params
    const post = posts.find(item => item.id === id)
    posts = posts.filter(item => item.id !== id)
    res.json({
        status: 'success',
        code: 204,
        data: {
            result: post
        }
    })
}

module.exports = {
    getAllPosts,
    getPostById,
    addPost,
    changePostById,
    deletePostById
}