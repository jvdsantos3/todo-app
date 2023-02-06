import { useState } from 'react'
import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../../colors";
import Icon from 'react-native-vector-icons/AntDesign';

import { styles } from "./styles";

type Props = {
    onCreate: (title: string) => void;
}

export function InputTask({ onCreate }: Props) {
    const [ inputStyle, setInputStyle ] = useState(styles.inputBlur);
    const [ taskTitle, setTaskTitle ] = useState('');

    function handleTaskAdd() {
        onCreate(taskTitle);

        setTaskTitle('');
    }

    function onFocus() {
        setInputStyle(styles.inputFocus)
    }

    function onBlur() {
        setInputStyle(styles.inputBlur)
    }

    return (
        <View style={ styles.inputArea }>
            <TextInput 
                style={ [styles.input, inputStyle] }
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={colors.gray300}
                onFocus={onFocus}
                onBlur={onBlur}
                onChangeText={setTaskTitle}
                value={taskTitle}
            />

            <Pressable
                style={({pressed}) => [
                    {
                      backgroundColor: pressed ? colors.blue : colors.blueDark,
                    },
                    styles.button
                ]}
                onPress={handleTaskAdd}
            >
                <Icon name="pluscircleo" size={16} color={ colors.gray100 } />
            </Pressable>
            
        </View>
    )
}