import { View, StyleSheet } from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import { Formik } from 'formik';
import { useTheme } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HideKeyboard from '../components/HideKeyboard';
import * as yup from 'yup';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import Snackbar from "react-native-snackbar"
import { useState } from 'react';


export default Login = ({ navigation }) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const handleRegister = () => {
    navigation.navigate('Register')
  }
  const gotoHome =()=>{
    navigation.navigate('Home')
  }
  const [visible, setVisible] = useState(false);

  const onDismissSnackBar = () => setVisible(false);
  return (
    <HideKeyboard>

      <View style={{

        height: hp('100%'),
      }}>

        <TopBar title="Loader"

        />

        <View
          style={{
            marginLeft: wp('10%'),
            marginTop: hp('20%'),
            width: wp('80%'),
          }}
        >
          <Text
            style={styles.heading}
          >Login Screen</Text>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, actions) => {
              if (values.username === 'tms' && values.password === "loaderpass") {
                actions.resetForm();
                Snackbar.show({
                  text: 'Logged in sucesfully',
                  duration: Snackbar.LENGTH_SHORT,
                  action: {
                    text: 'close',
                    textColor: 'green',
                    onPress: () => { /* Do something. */ },
                  },
                });
                
              
              } else {
                Snackbar.show({
                  text: 'Invalid username or password',
                  duration: Snackbar.LENGTH_SHORT,
                  action: {
                    text: 'close',
                    textColor: '#7676a7',
                    onPress: () => { /* Do something. */ },
                  },
                });
              }
            }}
          >
            {
              (
                {

                  handleChange,
                  handleSubmit,
                  values,
                  errors,
                  isValid
                }
              ) => (
                <View>
                  <TextInput
                    placeholder=''
                    label='Enter user name'
                    onChangeText={handleChange('username')}
                    value={values.username}
                    style={{ marginTop: hp('4%'), }}
                  />
                  {errors.username &&
                    <Text style={styles.error}>{errors.username}</Text>
                  }
                  <TextInput
                    style={{ marginTop: hp('2%'), }}
                    label='Enter Password'
                    secureTextEntry={true}
                    onChangeText={handleChange('password')}
                    value={values.password}
                  />
                  {errors.password &&
                    <Text style={styles.error}>{errors.password}</Text>
                  }
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center'
                    }}
                  >
                    <Button
                      textColor='black'
                      style={styles.sidebutton}
                      mode='contained'
                      onPress={gotoHome}
                      disabled={!isValid}
                    >Log In</Button>
                    <Button
                      textColor='black'
                      style={styles.sidebutton}
                      mode='contained'
                      onPress={handleRegister}
                    >Register</Button>
                  </View>
                </View>
              )
            }
          </Formik>

        </View>
        <BottomBar
          content='Copyright @ 2022'
        />
      </View >
    </HideKeyboard>
  )
}



const useStyles = (theme) => (StyleSheet.create({
  sidebutton: {
    marginTop: hp('2%'),
    width: wp('30%'),
    margin: wp('2%'),
    backgroundColor: theme.colors.greey,

  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  error: {
    fontSize: 10,
    color: 'red'
  }
}))

const loginValidationSchema = yup.object().shape({
  username: yup.string().required('User name is Required'),
  password: yup.string().min(6, ({ min }) => 'Password must be at least ${min} characters').required('Password is required')

})
