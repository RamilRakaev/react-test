import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './styles/App.css';
import React, { useState } from 'react';
import PostList from './components/PostList';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Описание' },
        { id: 2, title: 'CSS', body: 'Описание' },
        { id: 3, title: 'HTML', body: 'Описание' },
    ])
    return (
        <div className="App">
            <Counter />
            <ClassCounter />
            <PostList posts={posts} title="Список постов" />
        </div>
    );
}

export default App;
