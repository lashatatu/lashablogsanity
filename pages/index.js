import {Col, Row} from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import FilteringMenu from '../components/FilteringMenu';
import {useState} from 'react';
import useSWR from 'swr';

import {getAllBlogs} from 'lib/api';
import {useGetBlogs, useGetHello} from '../actions';

const fetcher = (url) => fetch(url).then(res => res.json());

export default function Home ({blogs}) {
  const [filter, setFilter] = useState({
    view: {list: 1}
  });

  const {data, error} = useGetBlogs()
  if(data){
    // alert(JSON.stringify(data))
  }

  return (
     <PageLayout >
       <AuthorIntro />
       <FilteringMenu
          filter={filter}
          onChange={(option, value) => {
            setFilter({...filter, [option]: value});
          }}
       />
       <hr />

       <Row className="mb-5">
         {/*<Col md="10">*/}
         {/*  <CardListItem />*/}
         {/*</Col >*/}
         {blogs.map(blog =>
            filter.view.list ?
               <Col
                  key={`${blog.slug}-list`}
                  md={'9'}
               >
                 <CardListItem
                    author={blog.author}
                    title={blog.title}
                    subtitle={blog.subtitle}
                    date={blog.date}
                    slug={blog.slug}
                    link={{
                      href: `/blogs/[slug]`,
                      as: `/blogs/${blog.slug}`
                    }}
                 />
               </Col >
               :
               <Col
                  key={blog.slug}
                  md="4"
               >
                 <CardItem
                    author={blog.author}
                    title={blog.title}
                    subtitle={blog.subtitle}
                    date={blog.date}
                    image={blog.coverImage}
                    slug={blog.slug}
                    link={{
                      href: `/blogs/[slug]`,
                      as: `/blogs/${blog.slug}`
                    }}
                 />
               </Col >
         )}
       </Row >
     </PageLayout >
  );
}

export async function getStaticProps () {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  };
}
