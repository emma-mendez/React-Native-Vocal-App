import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Task from '../components/Task';

export default function ToDo() {
    return (
        <View stle={styles.container}>

            {/* Todays Tasks */}
        <View style={styles.taskWrapper}>
            <Text style={styles.sectionTitle}>Todays Task</Text>
            <Task text={'Task 1'}/>
            <Task text={'Task 2'}/>
        <View style={styles.Items}>
        </View>
        </View>
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
    marginBottom: 30,
    fontSize: 24,
    fontWeight: 'bold',

},
Items:{
    marginTop: 30,
},
});
