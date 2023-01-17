import React from 'react'

function Blog() {
    return (
        <div className='blog-posts'>

            <div className='blog-header'>
            <h2>My Blog Posts</h2>
            </div>

                <a className='blog1' href = 'https://medium.com/@joe.robbins.cpt/console-log-more-versatile-than-you-might-think-650a940d34c9' target="_blank"> Console.log: more versatile than you might think</a>

                <p className='blog-description'>While I was first learning JavaScript, I wrote a blog about what I feel is the most helpful debugging tool for new programmers</p>

            <br></br>
            <br></br>
            {/* <a >Console.log: more versatile than you might think</a>
            <br></br>
            <br></br>
            <br></br>
            <a style={{color: 'white', fontSize: '20px'}}>Console.log: more versatile than you might think</a>
            <br></br>
            <br></br>
            <br></br>
            <a style={{color: 'white', fontSize: '20px'}}>Console.log: more versatile than you might think</a>
            <br></br>
            <br></br>
            <br></br>
            <a style={{color: 'white', fontSize: '20px'}}>Console.log: more versatile than you might think</a> */}
        </div>
    )
}

export default Blog