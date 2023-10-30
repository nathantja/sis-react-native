import { Text, View, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";



export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#808080" },
          headerShadowVisible: false,
          headerLeft: () =>
        }}
      />
    </SafeAreaView>
  );
}


{/* <View style={styles.container}>
<View style={styles.main}>
  <Text style={styles.title}>Helloooo World</Text>
  <Text style={styles.subtitle}>This is the first page of your app.</Text>
</View>
</View> */}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
