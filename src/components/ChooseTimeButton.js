import React, { useContext, useState } from 'react';
import { View, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../components/Button';
import { size } from './Theme';
import AdminContext from '../context/admin/AdminContext';
import { styles } from './styles';


const ChooseTimeButton = ({ navigation }) => {
  const
    { state: { loading },
      actions: { isLoading, fetchUserAveragePerc } }

      = useContext(AdminContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setStartDate(currentDate);
    setShow(false);
  };


  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setEndDate(currentDate);
    setShow2(false)
  };

  const showStartDatepicker = () => {
    setShow(true);
    setShow2(false)
  };

  const showEndDatepicker = () => {
    setShow2(true);
    setShow(false);
  };
  return (
    <View>
      <Text style={[styles.text, { fontSize: 15 }]}>Choose start and end date to get customer percentage</Text>
      <View>
        <Text style={[styles.text, { fontSize: 18 }]}>Start Date</Text>
        <Button
          width={size.width / 1.3}
          height={size.height / 8}
          light
          onPress={showStartDatepicker}
          label={startDate.toLocaleString()}
          hidden={true}
        />
      </View>
      <View style={{ margin: 20 }}>
        <Text style={[styles.text, { fontSize: 18 }]}>End Date</Text>
        <Button
          width={size.width / 1.3}
          height={size.height / 8}
          light
          onPress={showEndDatepicker}
          label={endDate.toLocaleString()}
          hidden={true}
        />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startDate}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChangeStart}
        />
      )}

      {show2 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={endDate}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChangeEnd}
        />
      )}
      <Button label={"Get Percentage"} onPress={() => {
        fetchUserAveragePerc({ start_date: startDate, end_date: endDate }, navigation);
        isLoading();
      }} />
    </View>
  );
}

export default ChooseTimeButton;