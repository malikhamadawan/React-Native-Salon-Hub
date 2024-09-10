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
          backgroundColor: 'white',
          borderColor: '#2158ff',
          borderBottomWidth: 1,
          borderBottomColor: 'red',
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
          marginTop: 20,
          height: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/icon1.png')}
            style={{
              height: 20,
              width: 20,
              marginLeft: 10,
            }}
          />
          <Text style={styles.textInput}>Name</Text>
        </View>
        <Input
          marginLeftImg2={45}
          img2={require('../../assets/editIcon1.png')}
          rightIcon={true}
        />
      </View>
      <View
        style={{
          marginTop: 60,
          height: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/icon2.png')}
            style={{
              height: 20,
              width: 20,
              marginLeft: 10,
            }}
          />
          <Text style={styles.textInput}>Email</Text>
        </View>
        <Input
          marginLeftImg2={45}
          img2={require('../../assets/editIcon1.png')}
          rightIcon={true}
        />
      </View>
      <View
        style={{
          marginTop: 60,
          height: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/phoneIcon1.png')}
            style={{
              height: 20,
              width: 20,
              marginLeft: 10,
            }}
          />
          <Text style={styles.textInput}>Phone Number</Text>
        </View>
        <Input
          img2={require('../../assets/editIcon1.png')}
          rightIcon={true}
          marginLeftImg2={45}
        />
      </View>
      <View
        style={{
          marginTop: 60,
          height: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/icon1.png')}
            style={{
              height: 20,
              width: 20,
              marginLeft: 10,
            }}
          />
          <Text style={styles.textInput}>Address</Text>
        </View>
        <Input
          img2={require('../../assets/editIcon1.png')}
          rightIcon={true}
          marginLeftImg2={45}
        />
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
    width: 155,
    height: 155,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 78,
    borderColor: '#2158ff',
    borderWidth: 1,
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
    marginHorizontal: 5,
    height: 25,
  },
});

export default Profile;
