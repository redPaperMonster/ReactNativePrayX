import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './CounterStyles';

interface CounterProps {
  icon: Element;
}
const Counter: React.FC<CounterProps> = ({icon}) => {
  const [count, setCount] = useState<number>(0);
  return (
    <TouchableOpacity
      onPress={() => setCount(count + 1)}
      style={style.container}>
      {icon}
      <Text style={style.text}>{count}</Text>
    </TouchableOpacity>
  );
};

export default Counter;
