import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Input} from '../../components/input';

const Profile = () => {
  const [imageUri, setImageUri] = React.useState(null);

  const pickImage = async () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
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
      <View
        style={{
          width: '100%',
          height: '25%',
          position: 'absolute',
        }}>
        {imagebackgroundUri && (
          <ImageBackground
            source={
              imageUri
                ? {uri: imagebackgroundUri}
                : require('../../assets/images400.jpeg')
            }
            style={{
              height: '100%',
              width: '100%',
            }}
            blurRadius={3}
            resizeMode="cover"></ImageBackground>
        )}
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={pickImagebackground}>
          <Image
            source={require('../../assets/cameraicon.png')}
            style={{height: 40, width: 40}}
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
            style={{height: 40, width: 40}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 60,
          height: 25,
        }}>
        <Text style={styles.textInput}>Name</Text>
        <Input />
      </View>
      <View
        style={{
          marginTop: 60,
          height: 25,
        }}>
        <Text style={styles.textInput}>E mail</Text>
        <Input />
      </View>
      <View
        style={{
          marginTop: 60,
          height: 25,
        }}>
        <Text style={styles.textInput}>Phone Number</Text>
        <Input />
      </View>
      <View
        style={{
          marginTop: 60,
          height: 25,
        }}>
        <Text style={styles.textInput}>Address</Text>
        <Input />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 60 : 37,
    flex: 1,
    // paddingHorizontal: 10,
  },
  imageContainer: {
    marginTop: 128,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 75,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'white',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 1,
  },
  textInput: {
    color: 'black',
    fontSize: 18,
    marginHorizontal: 10,
    height: 25,
  },
});

export default Profile;
