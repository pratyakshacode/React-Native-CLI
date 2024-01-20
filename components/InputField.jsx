import { StyleSheet, Text, TextInput } from "react-native"

const InputField = ({label, keyboardType, autoComplete, secureTextEntry, value, setValue, editable, numberOfLines, multiline, placeholder}) => {
    return (
        <>
        <Text style={styles.label}>{label}</Text>
            <TextInput 
            style={styles.input} 
            autoCorrect={false}
            keyboardType={keyboardType}
            autoComplete={autoComplete}
            secureTextEntry= {secureTextEntry}
            onChangeText={text => setValue(text)}
            value={value}
            editable= {editable}
            numberOfLines={numberOfLines}
            multiline={multiline}
            placeholder={placeholder}

            />

        </>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 17,
        color: 'black',
        margin: 10,
    },
    input: {
        borderWidth: 2,
        borderRadius: 10,
        // height: 45,
        width: '80%',
        padding:10,
        backgroundColor: 'white',
        color: 'black',
    },
    text :{
        color: 'black'
    }
})

export default InputField