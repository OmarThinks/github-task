/*import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Universal React with Expo</Text>
    </View>
  );
}
*/




import { StyleSheet, Text, View } from "react-native";

const Home = () => <Text>Home</Text>;

const About = () => <Text>About</Text>;
/*
const App = () => (
  <Router>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/about">
          <Text>About</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </View>
  </Router>
);
*/
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});












import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
} from "react-router-dom";
import { RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);



const App = () =>{
  return <RouterProvider router={router} />
}



export default App;





