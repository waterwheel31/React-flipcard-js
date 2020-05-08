
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
        padding: 10,
        marginTop: 2,
        marginBottom: 8,
        backgroundColor: "#b0c4de",
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 4,
        shadowRadius: 6,
        shadowOpacity: 0.6,
        shadowColor: 'rgba(0,0,0,24)',
        shadowOffset: {
            width: 1,
            height: 5,
        }
        
    },
    button: {
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#fff',
    },
    textInput:{
        backgroundColor: '#d7dbdd',
        paddingLeft: 6,
        paddingVertical: 5,
        marginTop: 2,
        marginBottom: 15,
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