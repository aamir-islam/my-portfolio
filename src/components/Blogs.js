import React from 'react'
import styled from 'styled-components/macro'
import { BlogsList } from './assets/projects'
const StyledBlogsWrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
`
const StyledBlogs = styled.div`
  color: ${(props) => props.theme.text};
  box-sizing: border-box;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 3rem;
  @media (max-width: 790px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 85%;
  }
`

const H3 = styled.h3`
  font-size: clamp(35px, 5vw, 60px);
  text-align: center;
  padding-bottom: 2rem;
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme.text};
`

const BlogListContainer = styled.div`
  max-width: 1000px;
  text-align: center;
  margin: 0 auto;
  border-radius: 5px;
  transition: ${(props) => props.theme.themeTransition.transition};

  .blog-lists {
    padding: 2rem 2rem 1rem 2rem;
    min-height: 100px;
    margin: 2rem 0;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 12px;
    transition: ${(props) => props.theme.themeTransition.transition};
    background-color: ${(props) => props.theme.moreProjectsCardBackgroundColor};
  }

  .blog-title {
    font-size: 24px;
    margin-bottom: 1rem;

    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
  a {
    text-decoration: none;
  }
  .blog-link {
    transition: ${(props) => props.theme.themeTransition.transition};
    background-color: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.body};
    padding: 1rem 1rem;
    margin-top: 5px;
    font-size: 13px;
    font-family: 'Roboto Mono', monospace;
    border: none;
    border-radius: 4px;

    cursor: pointer;
    display: inline-flex;
    align-items: center;
    &:hover {
      filter: brightness(1.2);
    }

    img {
      height: 25px;
      will-change: 25px;
      color: red;
      padding-left: 5px;
    }
  }
`

const Blogs = ({ theme }) => {
  return (
    <>
      <StyledBlogsWrapper>
        <StyledBlogs>
          <H3 aria-level='1' title='Blogs' aria-label='Blogs'>
            Blogs
          </H3>
          <BlogListContainer>
            {BlogsList.map((blog, index) => {
              return (
                <div key={index} className='blog-lists'>
                  <h3 className='blog-title'>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <a
                    href={blog.link}
                    aria-label='external link'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='blog-link'>
                      Read More
                      <img
                        src={
                          theme === 'darkTheme'
                            ? 'images/readMoreLight.png'
                            : 'images/readMoreDark.png'
                        }
                        alt='Read More'
                      />
                    </button>
                  </a>
                </div>
              )
            })}
          </BlogListContainer>
        </StyledBlogs>
      </StyledBlogsWrapper>
    </>
  )
}

export default Blogs
