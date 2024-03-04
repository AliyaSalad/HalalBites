import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icons = {};

const Add = () => <MaterialIcons name="add" size={16} color={"#004226"} />;
const Delete = () => <MaterialIcons name="delete" size={16} />;
const Edit = () => <MaterialIcons name="edit" size={16} />;
const Account = () => <MaterialCommunityIcons name="account" size={16} />;

Icons.Add = Add;
Icons.Delete = Delete;
Icons.Edit = Edit;
Icons.Close = Delete;
Icons.Account = Account;

export default Icons;
