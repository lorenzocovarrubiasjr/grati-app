import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Amplify } from "aws-amplify";

//import { withAuthenticator } from "@aws-amplify/ui-react-native";
//import "@aws-amplify/ui-react-native/styles.css";

import awsExports from "./src/aws-exports";
import Dashboard from "./src/screens/Dashboard";
Amplify.configure(awsExports);

interface IUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  memberSince: Date | any;
}

interface IAppParams {
  signOut: any;
  user: IUser;
}

export default function App({
  signOut,
  user = {
    id: "1",
    username: "witeout777",
    firstName: "Lorenzo",
    lastName: "Covarrubias",
    memberSince: "01/31/2006",
  },
}: IAppParams) {
  return (
    <View style={styles.container}>
      <Text>Hello {user.username}</Text>
      <Dashboard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
