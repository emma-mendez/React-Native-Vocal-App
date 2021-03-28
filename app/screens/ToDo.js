import React from 'react'
import { View, Text } from 'react-native'

export default class ToDo() {
    return (
        <View style={styles.container}>

                {/* Todays Tasks */}
            <View style={styles.taskWrapper}>  
                <Text style={styles.sectionTitle}>Todays Task</Text>
            <View style={styles.items}>
                {/* this is where tasks go */}
            </View>
            </View>
        </View>
    )
}

