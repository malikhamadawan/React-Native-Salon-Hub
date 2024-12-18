import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import CustomButton from '../customButton';
import BookingDetail from '../../screens/AppStack/BookingDetail';
import {useNavigation} from '@react-navigation/native';

const CustomModal = ({
  isVisible,
  onClose,
  title,
  children,
  onPressButton,
  onServices,
}) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{title}</Text>
              {children}
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <CustomButton
                  onPress={onServices}
                  btnColor={'#2158FF'}
                  width={130}
                  text={'Services'}
                  justi={'center'}
                  fontWeight={'500'}
                  txtColor={'#fff'}
                  btnHeight={35}
                />
                <CustomButton
                  onPress={onPressButton}
                  btnColor={'#2158FF'}
                  width={130}
                  text={'Schedule'}
                  justi={'center'}
                  fontWeight={'500'}
                  txtColor={'#fff'}
                  btnHeight={35}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CustomModal;
