import React from 'react';
import { Element } from 'react-scroll';
import drogaCapa from '../../imgs/drogascapa.jpg';
import drogaImagem from '../../imgs/drogas.jpg';
import realtime from '../../imgs/icon3_vantagem.png';
import Personalização from '../../imgs/icon2_vantagem.png';
import Acesso from '../../imgs/icon1_vantagem.png';
import Jornada from '../../imgs/icon4_vantagem.png';
import FuncionamentoImagem from '../../imgs/multi_dispositivo.png'
import './mainpage.scss'

function MainPage() {
    return (
        <>
            <Element name="Home" id="Home">
                <div>
                    <div className="HomeContainer">
                        <div className="HomeTxt1">
                            <p>Anti-vicio</p>
                        </div>
                        <div className="HomeImg">
                            <img
                                src={drogaCapa}
                                alt='gif sustentabilidade'></img>
                        </div>
                        <div className="HomeTxt2">
                            <p>Introdução do Projeto</p>
                            <p>O projeto nasce da preocupação crescente com os vícios e dependências na sociedade contemporânea. Diante do aumento alarmante no consumo de substâncias e comportamentos aditivos, surge a necessidade de uma abordagem inovadora. O nosso objetivo é oferecer uma solução tecnológica capaz de apoiar indivíduos no processo de superação dessas adversidades, fornecendo ferramentas e acompanhamento necessários para conquistar uma vida mais saudável e livre de vícios.</p>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name="About" id="About">
                <div className="aboutContainer">
                    <div className="abtContainer">
                        <div className="aboutImg">
                            <img
                                src={drogaImagem}
                                alt="inundação"></img>
                        </div>
                        <div className="aboutTxT">
                            <p>Sobre a Solução</p>
                            <p>A nossa solução é um software de acompanhamento personalizado, destinado a auxiliar na superação de vícios, sejam eles relacionados a substâncias ou comportamentos. Com uma abordagem ampla e acessível, o programa permite que os usuários estabeleçam metas, recebam orientações e estratégias embasadas em estudos psicológicos e pratiquem atividades que visam o controle e superação do vício.</p>

                        </div>
                    </div>
                </div>
                <div className='UtilizacaoContainer'>
                    <div className='UtiliContent'>
                        <div className='UtiliTxt'>
                            <p>O que ela fará?</p>
                            <p>Nosso software oferecerá uma plataforma interativa na qual os usuários poderão registrar seu tipo específico de vício, determinar o estágio atual e definir metas viáveis para superá-lo. Além disso, fornecerá recursos para acompanhamento de progresso, técnicas de controle do vício e recompensas ao atingir metas, incentivando assim a jornada rumo à libertação dos vícios.</p>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name='Funcionamento' id='Funcionamento'>
                <div className='FuncionamentoContainer'>
                    <div className='FuncioContent'>
                        <div className='FuncioTxt'>
                            <p>Como funcionará?</p>
                            <p>Ao se cadastrar, os usuários terão acesso a um ambiente intuitivo e multifuncional, no qual poderão explorar estratégias psicológicas, definir metas personalizadas e receber orientações embasadas em fontes confiáveis sobre o tratamento de vícios. O programa estará disponível em computadores, celulares e tablets, garantindo um acompanhamento contínuo e flexível, adaptado às necessidades individuais de cada usuário.</p>
                        </div>
                        <div className="FuncioImg">
                            <img
                                src={FuncionamentoImagem}
                                alt="Dispositivos"></img>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name='Solucao'>
                <div className="SolucaoContainer">
                    <h1>Solução</h1>
                    <div className="solucaoContent">
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={Acesso}
                                        alt="Acesso"></img>
                                    <h3>Personalização e Controle</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p> Oferece um acompanhamento personalizado, permitindo que os usuários controlem seu próprio processo de superação.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={Personalização}
                                        alt="Personalização"></img>
                                    <h3>Recursos Embasados em Evidências</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>Utiliza técnicas e estratégias comprovadas, baseadas em estudos reconhecidos na área da psicologia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={realtime}
                                        alt="realtime"></img>
                                    <h3>Apoio Contínuo</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>Disponibilidade em diversas plataformas para um acompanhamento constante, proporcionando suporte em qualquer momento.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={Jornada}
                                        alt="Jornada"></img>
                                    <h3>Incentivo por Metas Alcançadas</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>Oferece um sistema de recompensas motivacionais ao usuário ao atingir seus objetivos de superação.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default MainPage