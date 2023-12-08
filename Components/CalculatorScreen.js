import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { store } from '../Redux/Store';
import { handlePlus, handleMinus, handleMultiply, handleDivide } from '../Redux/action';
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';


export function CalculatorScreen(props) {

  var [inputOne, setInputOne] = useState('');
  var [inputTwo, setInputTwo] = useState('');
  var [result, setResult] = useState(0);

  const dispatch = useDispatch();

  return (


    <View style={styles.container}>
      <Text style={{ fontSize: 40, color: 'purple', fontWeight: 700 }}>Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Input number"
        value={inputOne}
        onChangeText={(text) => setInputOne(text)}

      />

      <TextInput
        style={styles.input}
        placeholder="Input number"
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
            dispatch(handlePlus(inputOne, inputTwo))
            //props.handlePlus(inputOne, inputTwo)
            setResult(store.getState().result);

          }}
        >
          <Text style={{ fontSize: 30, fontWeight: 700, color: 'white' }}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCalculator}
          onPress={() => {
            dispatch(handleMinus(inputOne, inputTwo))
            //props.handleMinus(inputOne, inputTwo)
            setResult(store.getState().result);
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: 700, color: 'white' }}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCalculator}
          onPress={() => {
            dispatch(handleMultiply(inputOne, inputTwo))
            //props.handleMultiply(inputOne, inputTwo)
            setResult(store.getState().result);
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: 700, color: 'white' }}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCalculator}
          onPress={() => {
            dispatch(handleDivide(inputOne, inputTwo))
            //props.handleDivide(inputOne, inputTwo)
            setResult(store.getState().result);
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: 700, color: 'white' }}>/</Text>
        </TouchableOpacity>

      </View>


    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: (inputOne, inputTwo) => {
      dispatch(handlePlus(inputOne, inputTwo));
    },

    handleMinus: (inputOne, inputTwo) => {
      dispatch(handleMinus(inputOne, inputTwo));
    },

    handleMultiply: (inputOne, inputTwo) => {
      dispatch(handleMultiply(inputOne, inputTwo));
    },

    handleDivide: (inputOne, inputTwo) => {
      dispatch(handleDivide(inputOne, inputTwo));
    },

  }
}

const mapStateToProps = (state) => {
  return {
    result: state.result
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorScreen)

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
