import React from 'react'
import Button from '../../Global/Button/Button'

type BlogCardProps = {
  image: any;
  imageDescription: string;
  headerText: string;
  link?: string;
}

const BlogCard = ({ image, imageDescription, headerText, link }: BlogCardProps) => {
  return (
    <article className="blogs_section__card">
      <img className="blogs_section__image" src={image} width="300px" alt={imageDescription} />
      <section className="blogs_section__content">
        <h3 className="blogs_section__card_header" id="blog1-header">{headerText}</h3>
        <p className="blogs_section__card_text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam error laborum id modi rerum, nulla nobis
          mollitia excepturi ea. Iste, consectetur voluptatibus molestias quod cum nisi rerum ullam consequatur?
          Assumenda nisi inventore quam fuga laboriosam placeat nulla ad sapiente perferendis.
        </p>
        <Button text='Read more!' link={link} />
      </section>
    </article>
  )
}

export default BlogCard