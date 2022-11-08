import { Link } from 'react-router-dom';

import bannerImage from '../../assets/banner.png';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} nome="Rodrigo Duarte" image="https://avatars.githubusercontent.com/u/47402277?v=4" />
                <UserInfo percentual={64} nome="Rodrigo Duarte" image="https://avatars.githubusercontent.com/u/47402277?v=4" />
                <UserInfo percentual={49} nome="Rodrigo Duarte" image="https://avatars.githubusercontent.com/u/47402277?v=4" />
                <UserInfo percentual={47} nome="Rodrigo Duarte" image="https://avatars.githubusercontent.com/u/47402277?v=4" />
                <UserInfo percentual={44} nome="Rodrigo Duarte" image="https://avatars.githubusercontent.com/u/47402277?v=4" />
            </Column>
        </Container>
    </>)
}

export { Feed }