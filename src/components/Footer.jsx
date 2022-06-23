function Footer() {
    return <footer className="page-footer green">

        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" 
                href="https://samandar99.github.io/react-shop" 
                rel="noreferrer" 
                target="_blank">Repo</a>
            </div>
        </div>
    </footer>
}
export { Footer }