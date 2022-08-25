import Head from 'next/head';
import Link from 'next/link';
function header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top" style={{ paddingLeft: '7%' }}>
            <Head>
                <script type="text/javascript" dangerouslySetInnerHTML={{__html: `(function(d){var s = d.createElement("script");s.setAttribute("data-account", "1R6thmeylV");s.setAttribute("src", "https://cdn.userway.org/widget.js");(d.body || d.head).appendChild(s);})(document)`}}></script>
                <noscript>Please ensure Javascript is enabled for purposes of <a href="https://userway.org">website accessibility</a></noscript>
            </Head>
            <div className="container-fluid">
                <Link href="/"><a className="navbar-brand" href="#javascript">Product Module</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link href="/"><a className="nav-link active" href="#javascript">Home</a></Link>
                        <Link href="/categories"><a className="nav-link" href="#javascript">Categories</a></Link>
                        <Link href="/products"><a className="nav-link" href="#javascript">Products</a></Link>
                        <Link href="/videocat"><a className="nav-link" href="#javascript">Video Categories</a></Link>
                        <Link href="/video"><a className="nav-link" href="#javascript">Video</a></Link>
                        <Link href="/about"><a className="nav-link" href="#javascript">About</a></Link>
                        <Link href="/blog"><a className="nav-link" href="#javascript">Blog</a></Link>
                        <Link href="/videos"><a className="nav-link" href="#javascript">Videos</a></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default header;