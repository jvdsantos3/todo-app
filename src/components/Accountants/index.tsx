import { Fragment } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    text: string;
    count: number;
    color: 'blue' | 'purple'
}

export function Accountants({ text, count, color }: Props) {
    const textStyle = color === 'blue' ? styles.textBlue : styles.textPurple

    return (
        <View style={ styles.accountants }>
            <Text style={ [styles.text, textStyle] }>{ text }</Text>
            <Text style={ styles.count }>{ count }</Text>
        </View>
    )
}