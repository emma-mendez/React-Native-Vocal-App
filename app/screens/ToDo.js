import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Task from '../components/Task';

export default function ToDo() {
    const [task, setTask] = useState();

    const handleAddTask = () => {
        console.log(task);
    }

    return (
        <View stle={styles.container}>

            {/* Todays Tasks */}
        <View style={styles.taskWrapper}>
            <Text style={styles.sectionTitle}>Todays Task</Text>
            <View style={styles.items}>
            <Task text={'Task 1'}/>
            <Task text={'Task 2'}/>
        </View>
        </View>

        {/* write a task */}
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskManager}>
            <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text => setTask(text)}></TextInput>
        
        <TouchableOpacity onPress={() =>handleAddTask()}>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#E8EAED',
},
taskWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
},
sectionTitle:{
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',

},
items:{
    marginTop: 30,
},
writeTaskManager:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

},
input:{
    top: 390,
    backgroundColor: '#FFF', 
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    width: 250,
},
addWrapper:{
    top: 390,
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    alignItems: 'center',
},
addText:{
},
});
