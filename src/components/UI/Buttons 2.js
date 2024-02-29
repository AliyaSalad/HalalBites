import { Pressable, StyleSheet, Text, View } from "react-native";

export const Button = ({ label, onClick, icon}) => {

    return (

        <Pressable onPress={onClick} style={styles.button}>
            {icon ? icon : null}
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
};

export const CircularButton = ({text, onClick, icon}) => {
    
    return (

        <Pressable onPress={onClick} style={styles.CircularButton}>
            {icon ? icon : null}
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}


export const ButtonTray = ({ children }) => {
    return (
        <View style={styles.buttonTray}>{children}</View>
    );
};

export const CircularButtonTray = ({ children }) => {
    return (
        <View style={styles.circularButtonTray}>{children}</View>
    );
};

const styles = StyleSheet.create({
    buttonTray:{
        flexDirection: "row",
        gap: 15,
    },
    circularButtonTray:{
        flexDirection: "row",
        justifyContent: 'center',
        gap: 5,
        marginBottom: 20,
    },
    button: {
        minHeight: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        flex: 1, 
        flexDirection: "row",
        gap: 5,

    },
    CircularButton: {
        width: 90,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
    },
    text: {
        fontSize: 18,
       // fontWeight: bold,
        color: '#FFD166',
    },
});

export default Button;