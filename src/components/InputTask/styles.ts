import { StyleSheet } from "react-native";

import { colors } from "../../../colors";

export const styles = StyleSheet.create({
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -27,
    },

    input: {
        flex: 1,
        height: 54,
        backgroundColor: colors.gray500,
        borderWidth: 1,
        borderColor: colors.gray700,
        borderRadius: 6,
        padding: 15,
        marginRight: 4,
        color: colors.gray100,
    },

    inputBlur: {
        borderColor: colors.gray700,
    },

    inputFocus: {
        borderColor: colors.purpleDark,
    },

    button: {
        width: 52,
        height: 52,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    }
})