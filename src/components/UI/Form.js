import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button, ButtonTray } from "./Buttons";
import Icons from "./Icons";

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      <ScrollView contentContainerStyle={styles.formItems}>
        {children}
      </ScrollView>

      <ButtonTray>
        <Button label={submitLabel} icon={submitIcon} onClick={onSubmit} />
        <Button label="Cancel" icon={<Icons.Close />} onClick={onCancel} />
      </ButtonTray>
    </KeyboardAvoidingView>
  );
};

const InputText = ({
  label,
  value,
  onChange,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.itemTextInput}
      />
    </View>
  );
};

Form.InputText = InputText;

//Styles
const styles = StyleSheet.create({
  formContainer: {
    gap: 10,
  },
  item: {
    marginTop: 10,
  },
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "lightgray",
  },
});

export default Form;
