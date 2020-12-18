import React, { Component } from "react"
import axios from 'axios'
const { Provider, Consumer } = React.createContext()

class DataContextProvider extends Component {
    state = {
        post: {
            title: '',
            imgUrl: '',
            description: ''
        },
        uglies: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newPost = {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            description: this.state.description
        }
        axios.post("https://api.vschool.io/matthewanderson/thing", newPost)
            .then(res => {
                const savedPostFromDB = res.data
                this.setState(prevState => ({
                    uglies: [...prevState.uglies, savedPostFromDB]
                }), () => console.log(this.state.uglies))
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        axios.get('https://api.vschool.io/matthewanderson/thing')
            .then(res => {
                this.setState({
                    uglies: res.data
                })
            })
            .catch(err => console.log(err))
    }

    clear = () => {
        const post = {
            imgUrl: '',
            title: '',
            description: '',
            id: ''
        }
        this.setState({ post })
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target
        const post = this.state.post
        post[name] = value
        this.setState({ post })
    }

    edit = (post, index,) => {
        this.setState({ post, index })

        fetch('https://api.vschool.io/matthewanderson/thing')
            .then(response => response.json())
            .then(data => {
                this.putRequest(data)
            })
    }

    delete = (id) => {
        const filteredUglies = this.state.uglies.filter(post => post.id !== id);
        this.setState({ uglies: filteredUglies })

    }

    render() {
        return (
            <Provider value={{ post: this.state.post, uglies: this.state.uglies, handleSubmit: this.handleSubmit, edit: this.edit, delete: this.delete, handleChange: this.handleChange }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { DataContextProvider, Consumer as DataContextConsumer }