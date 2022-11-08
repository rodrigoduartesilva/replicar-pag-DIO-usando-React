import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://image.shutterstock.com/image-illustration/abstract-hexagonal-geometric-ultra-wide-260nw-1205811127.jpg' />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/47402277?v=4' />
                <div>
                    <h4>Rodrigo Duarte</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp dio Orange Tech +...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }