import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'



const  Task = (props) => {
        return (
            <View>
                <Text> {props.text}</Text>
            </View>
        )
    }

const styles = StyleSheet.create({
    
})

export default Task; 
