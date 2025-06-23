import { Modal, Pressable, StyleSheet, Text, View,  } from 'react-native';
import React, { ReactNode } from 'react';

import { height, width } from '../../utils/constants';
import { Colors } from '../../theme/colors';

interface CustomModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  title: string;
  description: string;
  icon?: ReactNode;
  buttonSuccesTitle: string;
  cancelButtonTitle: string;
  cancelButton: () => void;
  successButton: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  setVisible,
  title,
  description,
  icon,
  buttonSuccesTitle,
  cancelButtonTitle,
  cancelButton,
  successButton
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {icon}
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalDescription}>{description}</Text>
          <Pressable
            style={styles.button}
            onPress={successButton}>
            <Text style={styles.textStyle}>{buttonSuccesTitle}</Text>
          </Pressable>
          <Pressable
            style={styles.buttonCancel}
            onPress={cancelButton}>
            <Text style={styles.textCancel}>{cancelButtonTitle}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(128,128,128,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: width * 0.8,
    minHeight: height * 0.3,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    width: '100%',
    minHeight: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
    marginVertical: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonCancel: {
    borderRadius: 8,
    padding: 10,
    width: '100%',
    minHeight: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DARKGRAY,
    marginVertical: 5,
  },
  textCancel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginVertical: 10,
  },
  modalDescription: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
});
