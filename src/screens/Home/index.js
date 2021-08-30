import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Header, BalanceContainer, BalanceTitle, Balance, HeaderIcon, Container } from './styles'

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';

export default function Home() {
  return(
      <Wrapper>
        <Container>
          <Header>
            <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10c86e'/>
            

            <BalanceContainer>
              <BalanceTitle>Meu saldo</BalanceTitle>
              <Balance>R$ 0,00</Balance>
            </BalanceContainer>

            <HeaderIcon>
              <AntDesign name='gift' size={30} color='#10c86e'/>

              <MaterialCommunityIcons name="percent-outline" size={30} color="#10c86e" />
            </HeaderIcon>

          </Header>

          <Suggestions/>
          
          <Activities/>

        </Container>
      </Wrapper>
  )
}