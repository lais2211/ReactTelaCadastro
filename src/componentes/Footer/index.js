import "./Footer.css";


const Footer = () => {
  return (
    <footer className='rodape'>
                <dvi className='redes-sociais'>
                    <a href="facebook.com" target="_blank"></a>
                    <img src='/imagens/fb.png' alt='Facebook'/>
                    <a href="twitter.com" target="_blank"></a>
                    <img src='/imagens/tw.png' alt='Twitter'/>
                    <a href="instagram.com" target="_blank"></a>
                    <img src='/imagens/ig.png' alt='Instagram'/>
                </dvi>
                <div className='logo'>
                    <img src='/imagens/logo.png' alt='Logo Organo' />
                </div>
                <div className='desenvolvido'>
                    <p>Desenvolvido por Alura.</p>
                </div>
        </footer>
  );
}

export default Footer;