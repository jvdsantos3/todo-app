import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { FlatList, View, Text, Image, Alert } from "react-native";
import { Accountants } from '../../components/Accountants';
import { Header } from "../../components/Header";
import { InputTask } from '../../components/InputTask';
import { Task } from '../../components/Task';
import { styles } from "./styles";

type Task = {
    id: string
    title: string,
    isComplete: boolean,
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);

    function handleTaskAdd(title: string) {
        const newTask = {
            id: uuidv4(),
            title: title,
            isComplete: false,
        };

        setTasks(prevState => [...prevState, newTask])
    }

    function handleTaskRemove(id: string) {
        Alert.alert('Remover', 'Remover a tarefa?', [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task.id != id)),
            },
            {
                text: 'Não',
                style: 'cancel',
            }
        ])
    }

    return (
        <Fragment>
            <Header />

            <View style={ styles.container }>
                <InputTask onCreate={handleTaskAdd} />

                <View style={ styles.tasksArea }>
                    <View style={ styles.header }>
                        <Accountants text='Criadas' count={0} color={'blue'} />
                        <Accountants text='Concluídas' count={0} color={'purple'} />
                    </View>

                    <View style={ styles.content }>
                        <FlatList 
                            data={tasks}
                            renderItem={({ item }) => (
                                <Task 
                                    title={ item.title } 
                                    isComplete={ item.isComplete } 
                                    onRemove={() => handleTaskRemove(item.id)}
                                />
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