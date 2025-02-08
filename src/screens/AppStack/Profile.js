/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Input} from '../../components/input';
import CustomButton from '../../components/customButton';
import {
  setImage,
  loadProfileImage,
} from '../../components/redux/slices/profileImageupdate';
import {useDispatch, useSelector} from 'react-redux';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const imageUri = useSelector(state => state.profileImageupdate.imageUri);

  useEffect(() => {
    dispatch(loadProfileImage()); // Load image from AsyncStorage when component mounts
  }, [dispatch]);

  const pickImage = async () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets?.length > 0) {
        dispatch(setImage(response.assets[0].uri));
      }
    });
  };
  const [imagebackgroundUri, setImagebackgroundUri] = React.useState(null);
  const pickImagebackground = async () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled imagebackground picker');
      } else if (response.errorCode) {
        console.log('ImagebackgroundPicker Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        setImagebackgroundUri(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {imagebackgroundUri && (
          <ImageBackground
            source={{uri: imagebackgroundUri}}
            style={styles.backgroundImage}
            blurRadius={3}
            resizeMode="cover"
          />
        )}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            source={require('../../assets/arrowicon2.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={pickImagebackground}>
          <Image
            source={require('../../assets/cameraicon.png')}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        {imageUri && (
          <Image source={{uri: imageUri}} style={styles.profileImage} />
        )}
        <TouchableOpacity style={styles.cameraButton} onPress={pickImage}>
          <Image
            source={require('../../assets/cameraicon.png')}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>
      </View>

      <ProfileInput label="Name" icon={require('../../assets/icon1.png')} />
      <ProfileInput label="Email" icon={require('../../assets/icon2.png')} />
      <ProfileInput
        label="Phone Number"
        icon={require('../../assets/phoneIcon1.png')}
      />
      <ProfileInput
        label="Address"
        icon={require('../../assets/addressIcon.png')}
      />

      <View style={{marginTop: '18%'}}>
        <CustomButton
          onPress={() => navigation.goBack()}
          btnColor="#C62300"
          width={150}
          text="Save"
          justi="center"
          txtColor="white"
          btnHeight={42}
        />
      </View>
    </View>
  );
};

const ProfileInput = ({label, icon}) => (
  <View style={styles.inputContainer}>
    <View style={styles.inputRow}>
      <Image source={icon} style={styles.inputIcon} />
      <Text style={styles.textInput}>{label}</Text>
    </View>
    <Input
      img2={require('../../assets/editIcon1.png')}
      rightIcon={true}
      focusview={true}
      marginLeftImg2={45}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    // marginTop: Platform.OS === 'ios' ? 60 : 37,
    flex: 1,
  },
  header: {
    width: '100%',
    height: '25%',
    position: 'absolute',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#C62300',
    zIndex: 0,
  },
  backButton: {
    width: 27,
    height: 27,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    zIndex: 1,
    marginLeft: 17,
    top: 35,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute', // Ensure it is placed correctly behind other components
    // zIndex: 0,
  },
  imageContainer: {
    marginTop: 128,
    width: 155,
    height: 155,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 78,
    borderColor: '#C62300',
    borderWidth: 2,
    position: 'relative',
  },
  profileImage: {
    width: 145,
    height: 145,
    borderRadius: 100,
    zIndex: 3,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 3,
  },
  cameraIcon: {
    height: 40,
    width: 40,
  },
  inputContainer: {
    // marginTop: 40,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  inputIcon: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  textInput: {
    color: 'black',
    fontSize: 18,
    marginHorizontal: 5,
  },
});

export default Profile;
