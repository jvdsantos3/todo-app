import { colors } from './../../../colors';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.gray500,
        borderWidth: 1,
        borderColor: colors.gray400,
        borderRadius: 8,
        paddingLeft: 12,
        paddingRight: 8,
        paddingVertical: 12,
        marginBottom: 16,
    },

    checkbox: {
        padding: 3.27,
    },

    title: {
        flex: 1,
        fontSize: 14,
        lineHeight: 19.6,
    },

    checked: {
        color: colors.gray300,
        textDecorationLine: 'line-through',
    },

    unChecked: {
        color: colors.gray100,
    },

    deleteButton: {
        width: 32,
        height: 32, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },

    deleteButtonPress: {
        backgroundColor: colors.gray400,
    }
})