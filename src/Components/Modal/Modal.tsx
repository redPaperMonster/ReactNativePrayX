import React from 'react';
import {View, Modal} from 'react-native';
import Button from '../Button/Button';
import style from './ModalStyles';

interface ModalProps {
  visible: boolean;
  close: () => void;
}

const CustomModal: React.FC<ModalProps> = ({children, visible, close}) => {
  return (
    <View style={style.container}>
      <Modal animationType="slide" transparent visible={visible}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <View style={style.closeButton}>
              <Button title="X" onPress={close} customStyle={style.button} />
            </View>
            <View style={style.children}>{children}</View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
