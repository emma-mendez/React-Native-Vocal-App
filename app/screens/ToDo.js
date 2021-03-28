import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Task from '../components/Task';

export default function ToDo() {
    return (
        <View stle={styles.container}>

            {/* Todays Tasks */}
        <View style={styles.taskWrapper}>
            <Text style={styles.sectionTitle}></Text>
            <Task />
        <View style={styles.Items}>

        </View>
        
        </View>

            <Text>Todays Task</Text>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#E8EAED',
},
taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
},
sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'

},
Items:{},
});
