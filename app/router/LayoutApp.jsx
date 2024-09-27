import { Stack, router } from "expo-router";



//Redux

export default function LayoutApp() {


  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="registro" options={{ title: "registro" }} />
    
    </Stack>
  );
}
