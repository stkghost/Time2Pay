import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, ImageBackground, Image} from 'react-native';

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
            <ImageBackground 
                source={require('../image/25100.jpg')}
                style={styles.container}>

                
                <View style={styles.formContainer}>

                    <Image
                        style={styles.money}
                        source={require('../image/time-is-money.png')}
                    />
                    
                    <Text style={styles.textLogo}>Time to Pay $$$</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='Renda mensal'
                    placeholderTextColor={'#9E9E9E'}
                    keyboardType={"numeric"}
                    onChangeText={(rendaMensal)=> {this.setState({rendaMensal})}}S
                    /> 
                    <TextInput
                    style={styles.input}
                    placeholder='Dias por semana'
                    placeholderTextColor={'#9E9E9E'}
                    keyboardType={"numeric"}
                    onChangeText={(diasPorSemana)=> {this.setState({diasPorSemana})}}
                    /> 
                    <TextInput
                    style={styles.input}
                    placeholder='Horas por dia'
                    placeholderTextColor={'#9E9E9E'}
                    keyboardType={"numeric"}
                    onChangeText={(horasDias)=> {this.setState({horasDias})}}
                    /> 
                    <TextInput
                    style={styles.input}
                    placeholder='Preço produto'
                    placeholderTextColor={'#9E9E9E'}
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
                        De acordo com sua renda levará {this.state.resultado} horas de trabalho para pagar este produto
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    formContainer: {
        height: 710,
        width: WIDTH - 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#AED581'        
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
        backgroundColor: '#F1F8E9',
        width: WIDTH - 75,
        height: 40,
        borderRadius: 9, 
        margin: 15,
        paddingLeft: 10,
        borderColor: '#AED581',
        borderWidth: 0.4
    },
    textRes: {
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 20,
        margin: 5
    },
    money: {
        width: 60,
        height: 60,
        marginBottom: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontSize: 14,
        backgroundColor: '#Ab89',
        width: WIDTH - 75,
        height: 40,
        borderRadius: 9, 
        margin: 15,
        paddingLeft: 10,
        borderColor: '#AED581',
        borderWidth: 0.4
    },
    buttonTxt: {
        fontWeight: 'bold'
    }
});
