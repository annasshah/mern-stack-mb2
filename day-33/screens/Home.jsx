import { useRoute } from "@react-navigation/native";
import ScreenContainer from "../components/ScreenContainer"

export const Home = () => {
     const route = useRoute();

     console.log(route.params)


    return <ScreenContainer title={'Home'} />
}