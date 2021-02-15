import { Col, Row } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';

import { getAllBlogs } from 'lib/api';

export default function Home ( { blogs } ) {
  return (
     <PageLayout >
       <AuthorIntro />
       <hr />
       <Row className="mb-5">
         {/*<Col md="10">*/}
         {/*  <CardListItem />*/}
         {/*</Col >*/}

         {blogs.map(blog =>
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
              />
            </Col >
         )
         }
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
