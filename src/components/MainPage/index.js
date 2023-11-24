import React from 'react';
import { Element } from 'react-scroll';
import drogaCapa from '../../imgs/drogascapa.jpg';
import drogaImagem from '../../imgs/drogas.jpg';
import realtime from '../../imgs/icone_7_card.png';
import Personalização from '../../imgs/icone_6_card.png';
import Acesso from '../../imgs/icone_5_card.png';
import Jornada from '../../imgs/icone_8_card.png';
import UtilizacaoImagem from '../../imgs/infografico.png'
import FuncionamentoImagem from '../../imgs/dispositivos.png'
import './mainpage.scss'

function MainPage() {
    return (
        <>
            <Element name="Home" id="Home">
                <div>
                    <div className="HomeContainer">
                        <div className="HomeTxt1">
                            <p>Saúde Única</p>
                        </div>
                        <div className="HomeImg">
                            <img
                                src={drogaCapa}
                                alt='gif sustentabilidade'></img>
                        </div>
                        <div className="HomeTxt2">
                            <p>Unindo Saúde, Simplificando Vidas</p>
                            <p>O Projeto Saúde Única é uma plataforma digital que facilita a busca por atendimento médico, reunindo informações de vários estabelecimentos de saúde. Com ela, é possível agendar consultas, escolher onde ser atendido e ter uma experiência ágil e personalizada.</p>
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
                            <p>Nossa olução</p>
                            <p>O coração do nosso programa é um software abrangente de acompanhamento de resultados relacionados ao controle de vícios. Ao registrar o tipo específico de vício, seu estágio atual e estabelecer metas personalizadas, você terá uma ferramenta poderosa para moldar seu próprio percurso de superação. Nossa abordagem combina técnicas comprovadas, atividades práticas e estratégias de condicionamento psicológico, proporcionando um ambiente de apoio contínuo.</p>

                        </div>
                    </div>
                </div>
                <div className='UtilizacaoContainer'>
                    <div className='UtiliContent'>
                        <div className='UtiliTxt'>
                            <p>O que ela fará?</p>
                            <p>Nosso programa funciona através de uma interface intuitiva, acessível em computadores, celulares e tablets. Você pode criar e acompanhar metas, receber orientações baseadas em fontes confiáveis, como a Organização Mundial de Saúde e a Associação Internacional de Psicologia Aplicada, e participar de um sistema de recompensas exclusivo que celebra cada vitória alcançada. Lembramos que nosso programa não substitui a orientação médica, mas atua como um parceiro valioso no seu processo de superação.</p>
                        </div>
                        <div className="UtiliImg">
                            <img
                                src={UtilizacaoImagem}
                                alt="Infografico"></img>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name='Funcionamento' id='Funcionamento'>
                <div className='FuncionamentoContainer'>
                    <div className='FuncioContent'>
                        <div className='FuncioTxt'>
                            <p>Como funcionará?</p>
                            <p>O funcionamento do nosso programa é simples e eficaz. Ao começar, você registra o tipo específico de vício, indica o estágio atual e estabelece metas personalizadas para o controle do vício. Nosso software utiliza uma abordagem abrangente que combina estratégias psicológicas, atividades práticas e metas tangíveis. Com uma interface intuitiva disponível em computadores, celulares e tablets, você pode acessar e monitorar seu progresso de qualquer lugar. O programa oferece orientações baseadas em fontes confiáveis, como a Organização Mundial de Saúde e a Associação Internacional de Psicologia Aplicada, para garantir informações precisas e confiáveis. Além disso, ao atingir suas metas, você será recompensado com benefícios exclusivos, criando um ciclo positivo de conquistas e incentivos ao longo de sua jornada de superação.</p>
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
                                    <h3>Facilidade de Acesso</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p> Informações sobre vários estabelecimentos de saúde para agendamento rápido de consultas.
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
                                    <h3>Personalização</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>Seleção consciente do local de tratamento conforme as necessidades individuais.</p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={realtime}
                                        alt="realtime"></img>
                                    <h3>Informações real time</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>Geolocalização para encontrar locais próximos e estimativa de tempo para atendimento.
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
                                    <h3>Follow up da Jornada de Saúde</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>Possibilidade de redirecionamento para outras instituições, se necessário.
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