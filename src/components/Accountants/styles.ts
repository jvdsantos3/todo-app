import { StyleSheet } from "react-native";

import { colors } from "../../../colors";

export const styles = StyleSheet.create({
    accountants: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    text: {
        marginRight: 8,
    },

    textBlue: {
        color: colors.blue,
    },

    textPurple: {
        color: colors.purple,
    },

    count: {
        fontSize: 12,
        backgroundColor: colors.gray400,
        borderWidth: 0,
        borderRadius: 999,
        paddingHorizontal: 8,
        paddingVertical: 2,
    }
})