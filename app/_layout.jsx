import LayoutApp from "./router/LayoutApp";

//Redux

import { Provider } from "react-redux"; //envuelve nuestra aplicación y le da acceso a los datos gestionados por Redux

import { store } from "../components/redux/store/store";


import Toast from "react-native-toast-message"; //componente utilizado para mostrar un breve mensaje

export default function RootLayout() {
  return (
    //store={store} permite conectar el componente Provider a la tienda Redux
    <Provider store={store}>
     
        <LayoutApp />

        <Toast />
      
    </Provider>
  );
}
