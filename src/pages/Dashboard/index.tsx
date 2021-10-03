import React from 'react';

import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import { 
    Container, 
    Header, 
    Photo, 
    User, 
    UserGreeting, 
    UserWrapper, 
    UserInfo, 
    UserName, 
    Icon, 
    HighlightCards,
    Transaction,
    Title,
    TransactionList,
} from './styles';

export interface TransactionListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){
    const data : TransactionListProps[] = [
    {
        id: '1',
        type: 'positive',
        title: "Desenvolvimento de site",
        amount:"R$ 12.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: "12/12/2020"
    },
    {
        id: '2',
        type: 'negative',
        title: "Hamburger",
        amount:"R$ 59,00",
        category: {
            name: 'Alimentação',
            icon: 'dollar-sign'
        },
        date: "15/12/2020"
    },
    {
        id: '3',
        type: 'negative',
        title: "Aluguel do Apartamento",
        amount:"R$ 1.200,00",
        category: {
            name: 'Casa',
            icon: 'dollar-sign'
        },
        date: "12/12/2020"
    }
    ];

    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                        source={{uri: 'https://avatars.githubusercontent.com/u/41094695?v=4'}}
                        />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Dailon</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HighlightCards 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24}}
            >
                <HighlightCard 
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 20 de Setembro"
                    type="up"
                />
                <HighlightCard 
                    title="Saídas" 
                    amount="R$ 1.400,00" 
                    lastTransaction="Última saída dia 10 de Setembro"
                    type="down"
                />
                <HighlightCard 
                    title="Total" 
                    amount="R$ 16.000,00" 
                    lastTransaction="10 à 20 de Setembro"
                    type="total"
                />
            </HighlightCards>

            <Transaction>
                <Title>Listagem</Title>

                <TransactionList 
                  keyExtractor={item => item.id}
                  data={data}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{paddingBottom: getBottomSpace()}}
                  renderItem={
                      ({item}) => <TransactionCard data={item} />
                  }
                />

                
            </Transaction>
        </Container>
    );
}