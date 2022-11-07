import { Link } from 'react-router-dom';
import bannerImage from '../../assets/banner.png';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, TextContent, Title, TitleHighlight } from './styles';

const Home = () => {
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente
                        <br />
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                     desafio profissional, evoluindo em comunidade em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secundary" onClick={() => null} />
            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal" />
            </div>
        </Container>
    </>)
}

export { Home }