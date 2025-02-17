import React from 'react';
import Img from 'gatsby-image';

import Section from '../../components/section';
import BuyLink from '../../components/buy-link';
import Link from '../../components/link';

import { Github as GithubIcon } from '@styled-icons/boxicons-logos/Github';

import * as S from './styles';

const BannerSection = ({ cover }) => (
  <Section>
    <S.Content>
      <S.About>
        <S.Title>JavaScript Assertivo</S.Title>
        <S.Subtitle>Testes e qualidade de código em todas as camadas da aplicação</S.Subtitle>
        <p>
          Chegou a hora de testar todas as camadas de uma aplicação JavaScript.
        </p>
        <p>
          De uma simples ferramenta de linha de comando, à uma aplicação
          Back-end que expõe uma API e uma aplicação Front-end.
        </p>
        <S.Links>
          <BuyLink />
          <Link href="https://github.com/gabrieluizramos/javascript-assertivo" color="green">
            acesse o repositório <GithubIcon />
          </Link>
        </S.Links>
      </S.About>
      <S.Book>
        <S.Link href="https://www.casadocodigo.com.br/products/livro-javascript-assertivo" target="_blank">
          <S.Cover>
            <Img fixed={cover.childImageSharp.fixed} />
          </S.Cover>
        </S.Link>
      </S.Book>
    </S.Content>
  </Section>
);

export default BannerSection;
