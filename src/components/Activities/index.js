import React from 'react'
import { Feather } from '@expo/vector-icons'

import {
   Container,
   Header,
   Title, 
   Card, 
   CardHeader, 
   Avatar, 
   Description,
   Bold,
   CardBody,
   UserName,
   CardFooter,
   Details,
   Value,
   Divider,
   Date,
  } from './styles'
import avatar from '../../images/avatar.png'

export default function Acticities(){
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@flvSantos</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Flavio Santos</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 35,00</Value>

            <Divider/>

            <Feather name='lock' color='#fff' size={14}/>
            <Date>há 2 anos</Date>
          </Details>
        </CardFooter>
      </Card>
    </Container>
  )
}