import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import BottomTabNavigator from "./tabNavigator";
import profile from "../Screens/profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
        <Drawer.Screen name="Porfile" component={profile} />
    </Drawer.Navigator>
    );
};
 
export default DrawerNavigator

