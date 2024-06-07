import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const Button = ({ label, onClick, icon }) => {
  return (
    <Pressable onPress={onClick} style={styles.button}>
      {icon ? icon : null}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export const WelcomeButton = ({ label, onClick, icon }) => {
  return (
    <Pressable onPress={onClick} style={styles.welcomeButton}>
      {icon ? icon : null}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export const WelcomeButtonTray = ({ children }) => {
  return <View style={styles.welcomeButtonTray}>{children}</View>;
};

// export const CircularButton = ({ text, onClick, icon}) => {

//     return (

//         <Pressable onPress={onClick} style={styles.circularButton}>
//             {icon ? icon : null}
//             <Text style={styles.text}>{text}</Text>
//         </Pressable>
//     );
// };

export const CircularButton = ({ text, onClick, icon }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.circularButton}>
      <View style={styles.circle}>{icon ? icon : null}</View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ButtonTray = ({ children }) => {
  return <View style={styles.buttonTray}>{children}</View>;
};

export const CircularButtonTray = ({ children }) => {
  return <View style={styles.circularButtonTray}>{children}</View>;
};

const styles = StyleSheet.create({
  buttonTray: {
    flexDirection: "row",
    gap: 15,
  },
  circularButtonTray: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap: 15,
  },

  welcomeButtonTray: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
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

  welcomeButton: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#FFD166",
    backgroundColor: "#FFD166",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginBottom: 10,
  },

  circle: {
    width: 70,
    height: 70,
    borderRadius: 45,
    borderColor: "white",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  circularButton: {
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#004226",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FFD166",
    marginTop: 10,
  },
});

export default Button;
