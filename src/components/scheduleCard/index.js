import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import CustomButton from '../../components/customButton';
import {useNavigation} from '@react-navigation/native';
import CustomModal from '../../components/modal'; // Import the modal

const Index = ({
  showBtn = false,
  title,
  name,
  profileImage,
  date,
  endTime,
  startTime,
  id,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image source={profileImage} style={styles.profileImage} />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.role}>Barber</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.callButton}>
          <Image
            source={require('../../assets/phoneIcon1.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Image
            source={require('../../assets/calendarIcon.png')}
            style={styles.icon}
          />
          <Text style={styles.detailText}>{date}</Text>
        </View>
        <Image
          source={require('../../assets/Icons7.png')}
          style={styles.dividerIcon}
        />
        <View style={styles.detailItem}>
          <Image
            source={require('../../assets/clockIcon.png')}
            style={styles.icon}
          />
          <Text style={styles.detailText}>
            {startTime} - {endTime}
          </Text>
        </View>
      </View>

      {showBtn && (
        <View>
          <Image
            source={require('../../assets/divider1.png')}
            style={styles.divider}
          />
          <View style={styles.buttonContainer}>
            <CustomButton
              btnColor={'#fff'}
              borderWidth={1}
              borderColor={'#737687'}
              width={130}
              text={'Cancel'}
              justi={'center'}
              fontWeight={'500'}
              txtColor={'#737687'}
              btnHeight={35}
            />
            <CustomButton
              onPress={toggleModal}
              imgPath={require('../../assets/editIcon.png')}
              btnColor={'#2158FF'}
              width={130}
              text={'Edit'}
              justi={'center'}
              fontWeight={'500'}
              txtColor={'#fff'}
              btnHeight={35}
              showImage={true}
            />
          </View>
        </View>
      )}

      {/* Custom Modal */}
      <CustomModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        title="Edit Booking"
        onPressButton={() => {
          navigation.navigate('BookNow');
          setIsModalVisible(false);
        }}>
        <Text>Here you can edit the Booking details for {title} booking</Text>
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '98%',
    backgroundColor: '#fff',
    marginTop: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    borderRadius: 12,
  },
  profileSection: {
    height: '45%',
    width: '75%',
    marginTop: 10,
    flexDirection: 'row',
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    color: '#0D1230',
    marginTop: 7,
    marginLeft: 7,
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    color: '#0D1230',
    marginLeft: 7,
    marginTop: 7,
  },
  role: {
    fontSize: 13,
    fontWeight: '300',
    color: '#737687',
    marginLeft: 7,
  },
  callButton: {
    height: 30,
    width: 30,
    backgroundColor: '#BBE4FB',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginRight: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
  details: {
    backgroundColor: '#fff',
    height: '25%',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
    justifyContent: 'center',
  },
  detailText: {
    fontSize: 13,
    color: '#363A53',
    marginLeft: 10,
  },
  dividerIcon: {
    height: 24,
    width: 2,
  },
  divider: {
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Index;
