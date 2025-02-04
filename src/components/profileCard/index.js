import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  Alert,
  Platform,
} from 'react-native';
import React from 'react';

const ProfileCard = ({showButton, text1, text2, profileImg1}) => {
  const openWhatsApp = phoneNumber => {
    Linking.openURL(`https://wa.me/${phoneNumber}`).catch(() =>
      Alert.alert('Error', 'Unable to open WhatsApp'),
    );
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.innerContainer}>
        <Image source={profileImg1} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={[styles.nameText, {marginTop: showButton ? 0 : '20%'}]}>
            {text1}
            <Text style={styles.professionText}>{text2}</Text>
          </Text>
          {showButton && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.callButton}
                accessible={true}
                accessibilityLabel="Call Usman">
                <Image
                  source={require('../../assets/phoneIcon.png')}
                  style={styles.icon}
                />
                <Text style={styles.buttonText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.whatsappButton}
                onPress={() => openWhatsApp('923044949459')} // Replace with a valid phone number
                accessible={true}
                accessibilityLabel="WhatsApp Call Usman">
                <Image
                  source={require('../../assets/whatsappIcon.png')}
                  style={styles.whatsappIcon}
                />
                <Text style={styles.buttonText}>Call</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        shadowOffset: {width: 2, height: 4}, // Shadow offset outside
        shadowOpacity: 0.5, // Slightly transparent shadow
        shadowRadius: 8, // Blurred shadow effect
        shadowColor: 'black',
      },
      android: {
        elevation: 10, // Shadow with elevation on Android, giving it an "outside" effect
      },
    }),
  },
  innerContainer: {
    flexDirection: 'row',
    height: 160,
    width: '100%',
  },
  profileImage: {
    height: 140,
    width: '45%',
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  textContainer: {
    width: '55%',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    marginLeft: 20,
  },
  professionText: {
    fontSize: 12,
    fontWeight: '300',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: '20%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  callButton: {
    flex: 1,
    backgroundColor: '#C62300',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
    height: 45,
    paddingVertical: 10,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 2, height: 4}, // Shadow offset outside
        shadowOpacity: 0.5, // Slightly transparent shadow
        shadowRadius: 8, // Blurred shadow effect
        shadowColor: 'black',
      },
      android: {
        elevation: 10, // Shadow with elevation on Android, giving it an "outside" effect
      },
    }),
  },
  whatsappButton: {
    flex: 1,
    backgroundColor: '#C62300',
    borderRadius: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 2, height: 3}, // Shadow offset outside
        shadowOpacity: 0.5, // Slightly transparent shadow
        shadowRadius: 8, // Blurred shadow effect
        shadowColor: 'black',
      },
      android: {
        elevation: 10, // Shadow with elevation on Android, giving it an "outside" effect
      },
    }),
  },
  icon: {
    height: 27,
    width: 27,
    marginRight: 2,
    tintColor: '#fff',
  },
  whatsappIcon: {
    height: 33,
    width: 33,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 14,
  },
});

export {ProfileCard};
