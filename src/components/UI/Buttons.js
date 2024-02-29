import { Pressable, StyleSheet, Text, View } from "react-native";

export const Button = ({ label, onClick, icon}) => {

    return (

        <Pressable onPress={onClick} style={styles.button}>
            {icon ? icon : null}
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
};



export const ButtonTray = ({ children }) => {
    return (
        <View style={styles.buttonTray}>{children}</View>
    );
};

const styles = StyleSheet.create({
    buttonTray:{
        flexDirection: "row",
        gap: 15,
    },
    button: {
        minHeight: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: "#FFD166",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        flex: 1, 
        flexDirection: "row",
        gap: 5,

    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#004226',
    },
});

export default Button;