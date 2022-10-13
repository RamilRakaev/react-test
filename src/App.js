import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './styles/App.css';
import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';


function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Описание' },
        { id: 2, title: 'CSS', body: 'Описание' },
        { id: 3, title: 'HTML', body: 'Описание' },
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
        <div className="App">
            <Counter init={5} />
            <ClassCounter />
            <PostForm create={createPost} />
            <div>
                <MySelect
                    defaultValue='Сортировка'
                    options={[
                        { value: 'title', name: 'По названию'},
                        { value: 'body', name: 'По описанию' },
                    ]}
                />
            </div>
            {posts.length
                ?
                <PostList remove={removePost} posts={posts} title='Список постов' />
                :
                <h1 style={{ textAlign: 'center' }}>
                    Пусто
                </h1>
            }
        </div>
    );
}

export default App;
