import React from 'react' 
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector,useDispatch} from 'react-redux';


function Header({navigation}){
//    console.log(navigation);
const counter = useSelector(state => state.counter)
    return(
        <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#DFA13A'}}>
              <TouchableOpacity onPress={()=>navigation.navigation.goBack()}>  
                 <Icon style={{margin:15}} name="chevron-back" color="#035956" size={30} />
                 </TouchableOpacity>
          
           <TouchableOpacity onPress={()=>navigation.navigation.openDrawer()}>
           <View style={{margin:15,flexDirection:'row'}}>
              <Icon name="cart" style={{}} color="#035956" size={30} />
              <Text>{counter } </Text>
              </View>
              </TouchableOpacity>
         
             

        </View>

    )
}
 export default Header;