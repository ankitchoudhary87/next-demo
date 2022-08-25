import Head from 'next/head';
import Header from '../header';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import { bloglist } from '../api/blog';
import ReactPaginate from 'react-paginate';
/* export const getStaticProps = async () => {
    return {
        props: {
            data: bloglist
        }
    }
} */
export const getServerSideProps = async (context) => {
    return {
        props: {
            data: bloglist
        }
    }
}
function Blog({ data }) {
    const router = useRouter();
    let { page } = router.query;
    if(page && page!=='' && page!==0){
        page = page
    }else{
        page = 1;
    }
    const itemsPerPage = 10;
    //const total_records = data.length;
    const slice_end = page * itemsPerPage;
    const slice_start = Number(slice_end) - Number(itemsPerPage);
    const pageCount = Math.ceil(data.length / itemsPerPage)
    const handlePageClick = (event) => {
        //alert(event.selected);
        const nexpage = Number(1)+Number(event.selected);
        if(event.selected && event.selected!=='' && event.selected!==0){
            router.push(`/blog?page=${nexpage}`)
        }else{
            router.push('/blog')
        }
      };
    return (
        <div>
            <Head>
                <title>This is Blog Main Page</title>
                <meta name="description" content="This is blog main page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div style={{ marginTop: '5px', marginBottom: '10px', fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }}>
                Blogs
            </div>
            <Container style={{ width: '75%', marginBottom: '20px' }}>
                {
                    data.slice(slice_start, slice_end).map((item) => {
                        return <Row key={item.id} onClick={() => router.push({pathname: `/blog/${item.id}`, query: { page: page }})} style={{ cursor: 'pointer' }}>
                            <Col style={{ border: 'solid gray 1px', fontSize: '17px', padding: '5px' }}>
                                <strong>{item.id} -</strong> {item.title}
                            </Col>
                        </Row>
                    })
                }
            </Container>
            <div>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
}
export default Blog;