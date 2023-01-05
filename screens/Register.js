import { View, StyleSheet, ScrollView } from 'react-native'
import { TextInput, Button, Text, Appbar, RadioButton } from 'react-native-paper';
import { Formik } from 'formik';
import { useTheme } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HideKeyboard from '../components/HideKeyboard';
import * as yup from 'yup';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useState } from 'react';
import Snackbar from "react-native-snackbar"

export default Register = ({navigation}) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const goBack =()=>{
    navigation.navigate('Login');
  }
  const [agree, setAgree] = useState(false);
  return (
    <HideKeyboard>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          height: hp('100%'),
        }}>

          {/* <TopBar title="Loader"
          leftSide={true}
              leftChild={
                <Appbar.BackAction onPress={()=>{
                    navigation.pop();
                }}/>
              }
          /> */}

          <View
            style={{
              marginLeft: wp('10%'),
              marginTop: hp('3%'),
              width: wp('80%'),
            }}
          >
            <Text
              style={styles.heading}
            >Registration Form</Text>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{
                username: '',
                email: '',
                password: '',
                cnic: '',
                confirmpassword: '',
                companyName: '',
                phonenumber: '',
              }}
              onSubmit={(values, actions) => {
                actions.resetForm();
                Snackbar.show({
                  text: 'Registered',
                  duration: Snackbar.LENGTH_SHORT,
                  action: {
                    text: 'close',
                    textColor: 'green',
                    onPress: () => { /* Do something. */ },
                  },
                });
                console.log(values);
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
                      placeholder='sanju'
                      label='Enter user name'
                      onChangeText={handleChange('username')}
                      value={values.username}
                      style={{ marginTop: hp('4%'), }}
                    />
                    {errors.username &&
                      <Text style={styles.error}>{errors.username}</Text>
                    }
                    <TextInput
                      placeholder='sanju@gmail.com'
                      label='Enter Email'
                      onChangeText={handleChange('email')}
                      value={values.email}
                      style={{ marginTop: hp('1%'), }}
                    />
                    {errors.email &&
                      <Text style={styles.error}>{errors.email}</Text>
                    }
                    <TextInput
                      style={{ marginTop: hp('1%'), }}
                      label='Enter Password'
                      secureTextEntry={true}
                      onChangeText={handleChange('password')}
                      value={values.password}
                    />
                    {errors.password &&
                      <Text style={styles.error}>{errors.password}</Text>
                    }
                    <TextInput
                      style={{ marginTop: hp('1%'), }}
                      label='Confirm Password'
                      secureTextEntry={true}
                      onChangeText={handleChange('confirmpassword')}
                      value={values.confirmpassword}
                    />
                    {errors.confirmpassword &&
                      <Text style={styles.error}>{errors.confirmpassword}</Text>
                    }
                    <TextInput
                      style={{ marginTop: hp('1%'), }}
                      label='CNIC'
                      onChangeText={handleChange('cnic')}
                      value={values.cnic}
                      keyboardType='numeric'
                    />
                    {errors.cnic &&
                      <Text style={styles.error}>{errors.cnic}</Text>
                    }
                    <TextInput
                      style={{ marginTop: hp('1%'), }}
                      label='Phone Number'
                      onChangeText={handleChange('phonenumber')}
                      value={values.phonenumber}
                      keyboardType='number-pad'
                    />
                    {errors.phonenumber &&
                      <Text style={styles.error}>{errors.phonenumber}</Text>
                    }
                    <TextInput
                      style={{ marginTop: hp('1%'), }}
                      label='Compnay Name'
                      onChangeText={handleChange('companyName')}
                      value={values.companyName}
                    />
                    {errors.companyName &&
                      <Text style={styles.error}>{errors.companyName}</Text>
                    }
                    <View style={{
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}>
                      <RadioButton
                        value={agree}
                        status={agree ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setAgree(true)
                        }}
                      />
                      <Text>I agree to terms and conditions</Text>
                    </View>
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
                        onPress={goBack}
                        disabled={!isValid}
                      >Register</Button>

                    </View>
                  </View>
                )
              }
            </Formik>

          </View>

        </View >
        <BottomBar
          content='Copyright @ 2022'
        />
      </KeyboardAwareScrollView>

    </HideKeyboard>
  )
}



const useStyles = (theme) => (StyleSheet.create({
  sidebutton: {
    marginTop: hp('2%'),
    width: wp('30%'),
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
  phonenumber: yup
    .string().min(11, ({ min }) => `Phone Number must be atleast ${min} numbers`)
    .required('Phone Number is required'),
    
    // .matches(/(03)(\d){11}\b/, 'Enter a valid phone number')
    // .required('Phone number is required'),
  cnic: yup.string().min(14, ({ min }) => `CNIC must be at least ${min} characters`)
    .required('CNIC is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
  email: yup.string().email("please enter valid email").required("Email address is required"),
  companyName: yup.string().required("company name is required")
})
