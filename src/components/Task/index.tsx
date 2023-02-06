import React, { Fragment, useState } from 'react';
import { View, Text, Pressable } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/Feather';
import { colors } from "../../../colors";
import { styles } from "./styles";

type Props = {
    title: string,
    isComplete: boolean,
    onRemove: () => void,
    onComplete: () => void,
}

export function Task({ title, isComplete, onRemove, onComplete }: Props) {
    const [checkboxState, setCheckboxState] = useState(isComplete);

    function handleTaskComplete() {
        setCheckboxState(!checkboxState);

        onComplete();
    }   

    return (
        <View style={ styles.task }>
            <BouncyCheckbox 
                onPress={handleTaskComplete} 
                isChecked={checkboxState}
                size={20.73}
                style={ styles.checkbox }
                fillColor={ colors.purpleDark }
                innerIconStyle={{ borderWidth: 2  }}
                TouchableComponent={Pressable}
            />

            <Text style={ [styles.title, checkboxState ? styles.checked : styles.unChecked] }>{ title }</Text>

            <Pressable 
                style={({pressed}) => [
                    pressed ? styles.deleteButtonPress : null,
                    styles.deleteButton
                ]}
                onPress={onRemove}
            >
                {({pressed}) => (
                    <Icon name="trash-2" size={18} color={ pressed ? colors.danger : colors.gray300 } />
                )}
            </Pressable>
        </View>
    )
}