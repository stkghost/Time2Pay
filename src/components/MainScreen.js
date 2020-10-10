import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, ImageBackground, Image, KeyboardAvoidingView} from 'react-native';

// import FormRow from '../util/FormRow.js';

const {width: WIDTH } = Dimensions.get('window')


type Props = {};
export default class MainScreen extends Component<Props> {
    
    constructor(props){
        super(props)
        this.state = {
            rendaMensal:'',
            diasPorSemana: '',
            horasDias: '',
            valorProduto: '',
            resultado: ''
            }
            this.calcular = this.calcular.bind(this)
            
    }
            calcular() {
                let valSemana = this.state.rendaMensal /  4 
                let valDia = valSemana / this.state.diasPorSemana
                let valHora = valDia / this.state.horasDias
                let resultado = this.state.valorProduto / valHora
            
                let s = this.state
                s.resultado = resultado
                this.setState(s)

            }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                {/* <ImageBackground 
                    source={require('../image/25100.jpg')}
                    style={styles.container}> */}

                    
                    <View style={styles.formContainer}>
                        <Image
                            style={styles.money}
                            source={require('../image/Time_To_Pay.png')}
                        />
                        <Text style={styles.textRes}>
                            Calcule quantas horas serão necessárias para pagar um produto de acordo com sua renda mensal
                        </Text>
                        <TextInput
                        style={styles.input}
                        placeholder='Renda mensal'
                        placeholderTextColor={'#4e8db4'}
                        keyboardType={"numeric"}
                        onChangeText={(rendaMensal)=> {this.setState({rendaMensal})}}S
                        /> 
                        <TextInput
                        style={styles.input}
                        placeholder='Dias por semana'
                        placeholderTextColor={'#4e8db4'}
                        keyboardType={"numeric"}
                        onChangeText={(diasPorSemana)=> {this.setState({diasPorSemana})}}
                        /> 
                        <TextInput
                        style={styles.input}
                        placeholder='Horas por dia'
                        placeholderTextColor={'#4e8db4'}
                        keyboardType={"numeric"}
                        onChangeText={(horasDias)=> {this.setState({horasDias})}}
                        /> 
                        <TextInput
                        style={styles.input}
                        placeholder='Preço produto'
                        placeholderTextColor={'#4e8db4'}
                        keyboardType={"numeric"}
                        onChangeText={(valorProduto)=> {this.setState({valorProduto})}}
                        /> 
                        <TouchableOpacity 
                            style={styles.button}
                            // ()=>{this.calcular}
                            onPress={this.calcular}>
                                <Text style={styles.buttonTxt}>
                                    CALCULAR 
                                </Text>
                        </TouchableOpacity>
                        <Text style={styles.textRes}>
                            Serão necessário {this.state.resultado} horas de trabalho para pagar este produto
                        </Text>
                        
                    </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        height: 710,
        width: WIDTH - 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#29ABE3'        
    },
    textLogo: {
        color: '#212121',
        fontSize:25,
        fontWeight: 'bold',
        marginBottom: 15
    },
    input: {
        color: 'black',
        fontSize: 14,
        backgroundColor: '#6fddff',
        width: WIDTH - 105,
        height: 40,
        borderRadius: 9, 
        margin: 15,
        paddingLeft: 10,
        borderColor: '#6fddff',
        borderWidth: 0.4
    },
    textRes: {
        fontSize: 18,
        textAlign: 'center',

        color: '#007cb1',
        fontWeight: 'bold'
    },
    money: {
        width: 150,
        height: 150,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontSize: 14,
        backgroundColor: '#007cb1',
        width: WIDTH - 200,
        height: 40,
        borderRadius: 9, 
        margin: 15,
    },
    buttonTxt: {
        fontWeight: 'bold',
        color: '#00182d'
    }
});
