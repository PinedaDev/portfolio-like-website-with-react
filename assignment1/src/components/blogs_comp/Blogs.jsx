import React from 'react'
import BlogCard from './BlogCard'

import imgBlog1 from '../../assets/imgs/img-1.jpg'
import imgBlog2 from '../../assets/imgs/img-2.jpg'
import imgBlog3 from '../../assets/imgs/img-3.jpg'

import './styles/_blogs-section.scss'

const Blogs = () => {

    const blogs = [
        {
            name: 'blog1',
            headerText: 'Blog 1',
            image: imgBlog1,
            imageDescription: 'laptop keyboard image'
        },
        {
            name: 'blog2',
            headerText: 'Blog 2',
            image: imgBlog2,
            imageDescription: 'mac laptop image'
        },
        {
            name: 'blog3',
            headerText: 'Blog 3',
            image: imgBlog3,
            imageDescription: 'work desktop image'
        },
    ]

    const showBlogsCards = () => {
        return (
            blogs.map(blog => (
                <BlogCard key={blog.name} {...blog} />
            ))
        )
    }

    return (
        <section className="blogs_section" id="blogs">
            <h2 className="blogs_section__header">
                Blogs
            </h2>
            <div className="blogs_section__container">
                {showBlogsCards()}
            </div>
        </section>
    )
}

export default Blogs