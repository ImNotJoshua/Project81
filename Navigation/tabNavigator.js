import feed from "../Screens/feed";
import createPost from "../screens/createPost"
import React from 'react';
import Ionicons from 'react-naitve-vector-icons/Ionicons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab =  createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            ScreenOptions={({ route }) =>( {
                tabBarIcon: ({ focused, color, size}) => {
                let iconName;
                if(route.name === 'feed') {
                    iconName =  focused
                    ? 'book'
                    : 'book-outline';
                } else if (route.name === 'createPost') {
                    iconName =  focused ? 'create' : 'create-outline';
                }
            return<Ionicons name={iconName} size={size} color={color} />;
            }})}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
            >
        <Tab.Screen name="feed" component={feed} />
        <Tab.Screen name="createPost" component={createPost} />
            </Tab.Navigator>
            );
        }

    export default BottomTabNavigator