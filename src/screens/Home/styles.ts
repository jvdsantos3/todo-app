import { StyleSheet } from "react-native";

import { colors } from "../../../colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray600,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 24,
    },

    tasksArea: {
        marginTop: 32,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    content: {
        marginTop: 20,
    },

    emptyContent: {
        borderTopWidth: 1,
        borderTopColor: colors.gray400,
        height: 208,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    clipeboard: {
        width: 56,
        height: 56,
        marginBottom: 16,
    },

    emptyTextStrong: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.gray300,
    },

    emptyText: {
        fontSize: 14,
        color: colors.gray300,
    }
})