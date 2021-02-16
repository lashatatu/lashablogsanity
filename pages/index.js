import {Col, Row} from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import {getAllBlogs} from 'lib/api';
import Link from 'next/link';
import FilteringMenu from '../components/FilteringMenu';
import {useState} from 'react';

export default function Home ({blogs}) {
  const [filter, setFilter] = useState({
    view: {list: 0}
  });
  return (
     <PageLayout >
       <AuthorIntro />
       <FilteringMenu
          onChange={() => {

          }}
       />
       <hr />

       <Row className="mb-5">
         {/*<Col md="10">*/}
         {/*  <CardListItem />*/}
         {/*</Col >*/}
         {blogs.map(blog =>
            filter.view.list === 0 ?
               <Col md={'9'}>
                 <CardListItem />
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
