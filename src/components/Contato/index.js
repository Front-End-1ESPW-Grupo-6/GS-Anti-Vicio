import React from 'react';
import { Element } from "react-scroll";
import Galoicon from '../../imgs/galoIcon.png'
import Akio from '../../imgs/time/Guilherme A.png'
import Morais from '../../imgs/time/Guilherme M.png'
import WppIcon from "../../imgs/icons/whatsapp-icon.png";
import EmailIcon from "../../imgs/icons/email-icon.png";
import './contato.scss'

function Contato() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:ContatoGaloFiap@gmail.com';
    };

    const sendWppClick = () => {
        window.location.href = 'https://wa.me/+5511963752185';
    };

    return (
        <>
            <Element name='Sobre'>
                <div className="SobreContainer">
                    <h1>Sobre nós</h1>
                    <div className="SbrContainer">
                        <div className="SobreImg">
                            <img
                                src={Galoicon}
                                alt="Icone da logo marca">
                            </img>
                        </div>
                        <div className="SobreTxT">
                            <p> No âmago da nossa missão de "Vida Saudável" está a visão ousada de transformar radicalmente a forma como abordamos os desafios da saúde. Inspirados pela vitalidade, buscamos antecipar e promover medidas preventivas que impactam positivamente as areas da saude.</p>

                            <p>A escolha do galo como nosso símbolo vai além da promoção da saúde; ele representa nossa missão de despertar a consciência e a ação preventiva diante dos desafios de bem-estar. Assim como o galo é vigilante e anuncia mudanças, nós, na "Vida Saudável", aspiramos a ser a voz que alerta e mobiliza comunidades para adotarem práticas saudáveis e se protegerem. Nossa missão é utilizar a sabedoria da natureza, combinada com a inovação tecnológica, para forjar um futuro onde as cidades possam enfrentar os desafios de saúde, garantindo acessibilidade e bem-estar para todos.</p>
                        </div>
                    </div>
                </div>
                <div className="CardContainer">
                    <div className="Cards">
                        <img
                            src={Akio}
                            alt="Integrante do grupo Galo">
                        </img>
                        <div className="CardContent">
                            <h2>Guilherme Akio</h2>
                            <p>RM 98582</p>
                        </div>
                    </div>
                    <div className="Cards">
                        <img
                            src={Morais}
                            alt="Integrante do grupo Galo">
                        </img>
                        <div className="CardContent">
                            <h2>Guilherme Morais</h2>
                            <p>RM 551981</p>
                        </div>
                    </div>
                </div>

            </Element>
            <Element name='Contato'>
                <div className="ContatoContainer">
                    <div className="InnerContatoContainer">
                        <div className="ContatoContainerHeader">
                            <p>Entre em contato</p>
                            <p>Nós adoraríamos ouvir você. Aqui como você pode chegar até nós</p>
                        </div>
                        <div className="CardsContainer">
                            <div className="SobreCardContainer">
                                <div className="SobreCardImgContainer">
                                    <img
                                        src={WppIcon}
                                        alt="Ícone de whatsApp">
                                    </img>
                                </div>
                                <div className="CardTextContainer">
                                    <p>Contato via WhatsApp</p>
                                    <p>Em caso de dúvidas, entre em contato!</p>
                                    <p>Nosso atendimento é das 08:00 as 18:00, com respostas em até 24 horas durante dias úteis</p>
                                    <button onClick={sendWppClick}>Clique aqui</button>
                                </div>
                            </div>
                            <div className="SobreCardContainer">
                                <div className="SobreCardImgContainer">
                                    <img
                                        src={EmailIcon}
                                        alt="Ícone de email">
                                    </img>
                                </div>
                                <div className="CardTextContainer">
                                    <p>Contato via Email</p>
                                    <p>Em caso de dúvidas, entre em contato!</p>
                                    <p>Seu email será respondidoem até 24 horas durante dias úteis</p>
                                    <button onClick={handleEmailClick}>Clique aqui</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default Contato;