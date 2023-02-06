import React, { Fragment, useState } from 'react';
import { FlatList, View, Text, Image } from "react-native";
import { Accountants } from '../../components/Accountants';
import { Header } from "../../components/Header";
import { InputTask } from '../../components/InputTask';
import { Task } from '../../components/Task';
import { styles } from "./styles";

type Task = {
    id: string,
    title: string,
    isComplete: boolean,
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([
        // {
        //     id: '1',
        //     title: 'Teste',
        //     isComplete: false,
        // }
    ]);

    return (
        <Fragment>
            <Header />

            <View style={ styles.container }>
                <InputTask />

                <View style={ styles.tasksArea }>
                    <View style={ styles.header }>
                        <Accountants text='Criadas' count={0} color={'blue'} />
                        <Accountants text='Concluídas' count={0} color={'purple'} />
                    </View>

                    <View style={ styles.content }>
                        <FlatList 
                            data={tasks}
                            renderItem={({ item }) => (
                                <Task title={ item.title } />
                            )}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            ListEmptyComponent={() => (
                                <View style={ styles.emptyContent }>
                                    <Image 
                                        style={ styles.clipeboard }
                                        source={require('../../../assets/Clipboard.png')}
                                    />
                                    
                                    <Text style={ styles.emptyTextStrong }>Você ainda não tem tarefas cadastradas</Text>
                                    <Text style={ styles.emptyText }>Crie tarefas e organize seus itens a fazer</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
        </Fragment>
    )
}