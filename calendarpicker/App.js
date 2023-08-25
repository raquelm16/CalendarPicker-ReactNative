import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import {getToday, getFormatedDate} from 'react-native-modern-datepicker';

export default function App(){

    const today = new Date();
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD') //or 'DD/MM/YYYY'
    const [open, setOpen] = useState(false) //open and close the modal
    const [date, setDate] = useState('2023/02/08') //date variable

    function handleOnPress(){
        setOpen(!open);
    }

    function handleChange(propDate){
        console.log(propDate);
        setDate(propDate);
    }

    return(
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>

            <TouchableOpacity onPress={handleOnPress}>
                <Text>Open</Text>
            </TouchableOpacity>

            <Modal
            animationType='slide'
            transparent={true}
            visible={open}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <DatePicker 
                        mode='calendar'
                        minimumDate={startDate}
                        selected={date}
                        onDateChange={handleChange}
                        />

                        {/*if you have a problem with your calendar, like gray numbers, just
                        delete the line 40 (minimumDate={startDate})*/}

                        <TouchableOpacity onPress={handleOnPress}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <StatusBar style="auto"/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        display:'flex', //you can use flex:1, too
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    centeredView:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:22,
    },
    modalView:{
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        width:'90%',
        padding:35,
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
    }
})
