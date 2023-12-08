import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { divide, minus, multiply, plus, reset } from '../ReduxToolkit/reducers/calculatorRTK';
import { storeRTK } from '../ReduxToolkit/storeRTK';

export function CalculatorRTKScreen() {

    var [inputOne, setInputOne] = useState('');
    var [inputTwo, setInputTwo] = useState('');
    var [result, setResult] = useState(0);

    const calcalationRTK = useSelector((state) => state.calculatorRTK)

    const dispatch = useDispatch();

    useEffect(() => {
        // Thực hiện hành động sau khi kết quả đã được cập nhật
        if (calcalationRTK.result !== null) {
          setResult(calcalationRTK.result);
        }
      }, [calcalationRTK.result]);


    return (


        <View style={styles.container}>
            <Text style={{ fontSize: 40, color: 'purple', fontWeight: 700 }}>Calculator RTK</Text>
            <TextInput
                style={styles.input}
                placeholder="Input number A"
                value={inputOne}
                onChangeText={(text) => setInputOne(text)}

            />

            <TextInput
                style={styles.input}
                placeholder="Input number B"
                value={inputTwo}
                onChangeText={(text) => setInputTwo(text)}

            />

            <TextInput
                style={styles.input}
                placeholder="Result"
                value={result}
                editable={false}
            />

            <View style={{ width: '100%', height: 'auto', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                <TouchableOpacity style={styles.btnCalculator}
                    onPress={() => {

                        dispatch(plus({
                            inputOne: inputOne,
                            inputTwo: inputTwo,
                        }))

                        //setResult(storeRTK.getState().result)
                    }}
                >
                    <Text style={{ fontSize: 30, fontWeight: 700, color: 'white' }}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCalculator}
                    onPress={() => {
                        dispatch(minus({
                            inputOne: inputOne,
                            inputTwo: inputTwo,
                        }))

                        //setResult(storeRTK.getState().result)

                    }}
                >
                    <Text style={{ fontSize: 30, fontWeight: 700, color: 'white' }}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCalculator}
                    onPress={() => {
                        dispatch(multiply({
                            inputOne: inputOne,
                            inputTwo: inputTwo,
                        }))

                        //setResult(storeRTK.getState().result)

                    }}
                >
                    <Text style={{ fontSize: 30, fontWeight: 700, color: 'white' }}>*</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCalculator}
                    onPress={() => {
                        dispatch(divide({
                            inputOne: inputOne,
                            inputTwo: inputTwo,
                        }))

                        //setResult(storeRTK.getState().result)

                    }}
                >
                    <Text style={{ fontSize: 30, fontWeight: 700, color: 'white' }}>/</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        width: '80%',
        height: 50,
        paddingLeft: 20,
        fontSize: 20,
        marginTop: 40,
        borderRadius: 10,
        border: '1px #9095A0 solid'
    },

    btnCalculator: {
        width: '13%',
        height: 50,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 20
    }

});
