import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet , Image} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Read  extends React.Component {
  render(){
    return(

       
        <View>
            <Image
      style = {styles.imageIcon}
       source={require('../Photo/best.PNG')}  
              /> 

        <Text
          style={styles.buttonText}>
      Some months ago I was not knowing coding of app. 
       Thanks WhitehatJr helped me learn coding so nicely.
       Best coding platform in the world !
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  buttonText: {
    fontSize: 20,
  },
  imageIcon: {
    width:150,
    height: 150,
    marginLeft: 100,
  }

});