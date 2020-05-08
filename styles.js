
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        
        textAlign: 'center',
        
    },
    itemContainer: {
       
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 5,
   
    },
    item: {
        fontSize: 15,
        textAlign: 'center',
        paddingVertical: 5,
        backgroundColor: "#b0c4de",
        borderBottomColor: "grey",
        
    },
    button: {
        position: 'absolute',
        bottom:0
    },
    textInput:{
        backgroundColor: '#d7dbdd',
        paddingLeft: 6,
        paddingVertical: 5,
        height: 40, 
        fontSize: 20
    },
    card:{
        backgroundColor: '#d7dbdd',
        paddingLeft: 6,
        paddingVertical: 5,
        height: 300, 
        fontSize: 30,
        textAlign: 'center',
    }
})

export default styles