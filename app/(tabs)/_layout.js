import { Tabs } from "expo-router"
import { Feather } from '@expo/vector-icons';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen name="list" options={{
                title: "Countries",
                tabBarLabel:'Countries',
                tabBarIcon: (color) => (<Feather name="list" size={24} color={color}/>)
            }}/>
            <Tabs.Screen name="about" options={{
                title: "About",
                tabBarLabel:'About',
                tabBarIcon: (color) => (<Feather name="book-open" size={24} color={color} />)
            }}/>
            
        </Tabs>
    )
}