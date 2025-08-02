import { useRoute } from "@react-navigation/native";
import ScreenContainer from "../../components/ScreenContainer"
// import Feather from 'react-native-vector-icons/dist/Feather';

export const Home = () => {
    const route = useRoute();

    console.log(route.params)


    return <>
        {/* <Feather name='home' /> */}
        <ScreenContainer title={'Home'} />
    </>
}