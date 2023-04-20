import React, {useState} from 'react';
import CustomBackground from "../../components/background/CustomBackground";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import BigButton from "../../components/buttons/BigButton";
import images from "../../assets/images";
import TextButton from "../../components/buttons/TextButton";

const Item = (props) => {

    return (
        <TouchableOpacity {...props} style={{margin: 5, padding: 5, paddingHorizontal: 20, borderWidth: 1, borderRadius: 20, borderColor: props.selected ? 'white' : 'transparent'}}><Text style={{fontSize: 20,}}>{props.text}</Text></TouchableOpacity>
    );
}
const KdaScreen = ({navigation}) => {
    const [kills, setKills] = useState(0);

    const showKills = () => {
        let view = [];

        for (let i = 0; i <= 100; i++) {
            if (i === kills) {
                view.push(<Item selected={true} text={i} ></Item>);

            } else {
                view.push(<Item selected={false} text={i} onPress={() => setKills(i)}></Item>);
            }
        }

        return view;
    }

    return (
        <CustomBackground>
            <View style={{alignItems: 'center', marginBottom: 30}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Promocja</Text>
            </View>
            <View >
                <Text>Kile</Text>
                <ScrollView horizontal={true} contentOffset={{x: 1600, y:0,}}>
                    {showKills()}
                </ScrollView>
            </View>
            <View>
                <TextButton text={"Pomiń"} color={'#808080'} onPress={() => navigation.navigate('Results')} />

                <TextButton onPress={() => navigation.navigate('MatchResult')} />
            </View>
        </CustomBackground>
    );
};

export default KdaScreen;
