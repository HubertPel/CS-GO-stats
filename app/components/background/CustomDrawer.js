import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from "react-native";
import colors from "../../assets/colors";
import {useNavigation} from "@react-navigation/native";

const CustomDrawer = () => {
    const navigation = useNavigation();

    const [menuItems, setMenuItems] = useState([
        {
            name: "Home",
            type: 'navigate',
            to: 'Dashboard'
        },
        {
            name: "Historia",
            type: 'navigate',
            to: 'Dashboard'
        },
    ]);

    return (
        <View style={{backgroundColor: colors.darkerGrey, flex: 1,}}>
            <View style={{marginTop: 100, marginLeft: 20,}}>
                {menuItems.map((item, map) => {
                    return (
                        <TouchableOpacity style={{marginTop: 20}} onPress={() => { if (item.type === 'navigate') {navigation.navigate(item.to)}}}><Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text></TouchableOpacity>
                    )
                })}
            </View>
        </View>
    );
};

export default CustomDrawer;
