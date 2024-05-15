import { Image, StyleSheet, Platform, Text, View, TextInput, ViewStyle, TextStyle} from 'react-native';
// new button import for custom styles
import { Button } from '@rneui/base';

export default function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E0E0E2',
    },
    titleSection : 
    {
      backgroundColor: '#da3e52',
      height: 100,
    },
    title : {
      color: '#ffffff',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 50,
      fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif',
    },
    loginPane : {
      backgroundColor: '#ffffff',
      height: 500,
      margin: 20,
      borderRadius: 10,
      padding: 10,
    },
    button: {
      backgroundColor : '#4a306d',
      borderRadius: 15,
      alignSelf: 'center',
      width: 200,
      marginBottom: 10,
    },
    hyperlink: {
      backgroundColor : 'white',
      color: '#000000',
    }
  });
  
  var value;


  interface Styles {
    container: ViewStyle;
    titleSection: ViewStyle;
    title: TextStyle;
    loginPane: ViewStyle;
  }


  

  const onChangeText = (text: string) => {
    // handle text change
  };

  return (
    <View style={styles.container}>
      <View id="titleSection" style={styles.titleSection}>
        <Text style={styles.title}>AutoMate</Text>
      </View>
      <View id="loginPane" style={styles.loginPane}>
        <Text style={{fontSize: 30, textAlign: 'center', marginTop:80}}> Welcome to AutoMate! </Text>
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: 40}}> Please login to continue </Text>

        <View style = {{marginTop: 50}}>
          <TextInput placeholder = "Username" placeholderTextColor={'grey'} style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 30, textAlign: 'center'}} onChangeText={text => onChangeText(text)} value={value}/>
          <TextInput  placeholder = "Password" placeholderTextColor={'grey'} style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 30, textAlign: 'center', marginTop: 30 }} onChangeText={text => onChangeText(text)} value={value}/>
        </View>

        <View style = {{marginTop: 50}}>
          <Button buttonStyle = {styles.button} title="Login" onPress={() => {}}/>
          <Button type = 'clear' title="New here? Join AutoMate." onPress={() => {}} />
        </View>
      </View>
    </View>
  );



  
}
