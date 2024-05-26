import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const ProfileCard = ({showButton, text1, text2, profileImg1}) => {
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
    marginTop: 5,
    width: '100%',
    // marginHorizontal: 4,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    height: 160, // Ensure the inner container takes up full height
    width: '100%',
    // backgroundColor:'blue',
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
  },
  callButton: {
    flex: 1, // Use flex to distribute space evenly
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
    height: 45,
    paddingVertical: 10, // Add padding for better touch area
  },
  whatsappButton: {
    flex: 1, // Use flex to distribute space evenly
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10, // Add padding for better touch area
  },
  icon: {
    height: 27,
    width: 27,
    marginRight: 2, // Add margin for spacing between icon and text
  },
  whatsappIcon: {
    height: 38,
    width: 38,
    marginRight: 2, // Add margin for spacing between icon and text
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
  },
});

export {ProfileCard};
