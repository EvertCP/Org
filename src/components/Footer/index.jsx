import './Footer.css'

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png" }}>
        <div className='redes'>
            <a href='https://wwww.github.com/EvertCP'>
                <img src='./img/github.png' alt='Github' />
            </a>
            <a href='https://www.linkedin.com/in/evert-cardenas-polo-564907156/'>
                <img src='./img/linkedin.png' alt='Linkedin' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Evert Cardenas</strong>
    </footer>
}
export default Footer;