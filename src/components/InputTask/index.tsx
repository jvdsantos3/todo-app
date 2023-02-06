import { useState } from 'react'
import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../../colors";
import Icon from 'react-native-vector-icons/AntDesign';

import { styles } from "./styles";

export function InputTask() {
    const [ inputStyle, setInputStyle ] = useState(styles.inputBlur)

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
            />

            <Pressable
                style={({pressed}) => [
                    {
                      backgroundColor: pressed ? colors.blue : colors.blueDark,
                    },
                    styles.button
                ]}
            >
                <Icon name="pluscircleo" size={16} color={ colors.gray100 } />
            </Pressable>
            
        </View>
    )
}