import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { Button, ButtonTray } from "./Buttons";
import Icons from "./Icons";

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      <Text style={styles.title}> New Restaurant</Text>
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
const InputSelect = ({ label, prompt, options, value, onChange }) => {
  //Initialisation
  const [modalVisible, setModalVisible] = useState(false);
  //State
  //Handlers
  //View
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.inputContainer}>
          <Text style={styles.selectedValue}>{value || prompt}</Text>
        </View>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView style={styles.modalScrollView}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setModalVisible(false);
                    onChange(option.value);
                  }}
                >
                  <Text style={styles.modalOption}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

Form.InputText = InputText;
Form.InputSelect = InputSelect;

//Styles
const styles = StyleSheet.create({
  formContainer: {
    marginTop: 50,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
  inputContainer: {
    height: 50,
    borderRadius: 7,
    borderWidth: 1,
    backgroundColor: "white",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
  },
  item: {
    marginTop: 10,
  },
  itemLabel: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  selectedValue: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 20,
    maxHeight: 300,
    width: "80%",
  },
  modalScrollView: {
    maxHeight: 250,
  },
  modalOption: {
    fontSize: 16,
    paddingVertical: 10,
  },
});

export default Form;
