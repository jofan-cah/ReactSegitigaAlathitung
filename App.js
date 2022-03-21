import React, { Component } from 'react';
import {
    Text,View,TextInput,TouchableOpacity
} from 'react-native';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            alas : 0,
            tinggi: 0,
             hasil :0,
             
         };
    }

    hitungluas = () => {
        let hasil = parseFloat(this.state.alas) * parseFloat(this.state.tinggi) /2 ;
        this.setState({hasil:hasil});
    }

      hitungkeliling = () => {
        let hasil = parseFloat(this.state.alas) * 3 ;
        this.setState({hasil:hasil});
    }

    render() {
        return (
            <View style={{
                flex :1,
            }}>
            {/* { INI ADALAH HEADER} */}
                <View style={{
                    backgroundColor : "#2FA4FF",
                    flex :1,
                    elevation : 5,
                    justifyContent: "center",
                    alignItems : "center"
                }}>
                    <Text 
                    style={{
                        color: "#fff",fontWeight:"bold", fontSize:30
                    }}
                    >
                    ALAT UKUR SEGITIGA 
                    </Text>


                 </View>
            {/* { INI ADALAH COntent} */} 
                <View style={{
                    backgroundColor : "#FFF1CE",
                    flex :9
                }}>
              
                <TextInput 
                    // autoFocus
                    keyboardType='numeric'
                    placeholder=' Masukan alas '
                    value={this.state.alas}
                    textContentType='number'
                    style={{
                        marginTop: 30,
                        marginHorizontal:10,
                        paddingHorizontal :15,
                        paddingVertical:10,
                        backgroundColor:'#F0FFC2' ,
                        borderBottomWidth :2,
                        borderRadius :15,
                    }}
                    onChangeText ={(value) =>this.setState({alas:value})}

                />
 
                  <TextInput 
                    
                    keyboardType='numeric'
                    placeholder=' Masukan tinggi '
                    value={this.state.tinggi}
                    textContentType='number'
                    style={{
                        marginTop: 30,
                        marginHorizontal:10,
                        paddingHorizontal :15,
                        paddingVertical:10,
                        backgroundColor:'#F0FFC2' ,
                        borderBottomWidth :2,
                        borderRadius :15,
                        
                    }}
                    onChangeText ={(value) =>this.setState({tinggi:value})}

                />

                <TouchableOpacity 
                style={{
                    backgroundColor :'#85F4FF',
                    marginTop: 20,
                    marginHorizontal:50,
                    marginVertical:15,
                    paddingHorizontal:15,
                    paddingVertical:20,
                    justifyContent: "center",
                    alignItems : "center",
                    borderRadius :15,

                }}
                onPress={()=> this.hitungluas()}
                > 
                     <Text
                     style={{
                         color:'#000',
                         textAlign:'center',
                         fontWeight:'bold',
                         fontSize: 20,
                     }}> Hitung Luas</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{
                    backgroundColor :'#85F4FF',
                    marginTop: 10,
                    marginHorizontal:50,
                    marginVertical:15,
                    paddingHorizontal:15,
                    paddingVertical:20,
                    justifyContent: "center",
                    alignItems : "center",
                    borderRadius :15,

                }}
                
                  onPress={()=> this.hitungkeliling()}> 
                     <Text
                     style={{
                         color:'#000',
                         textAlign:'center',
                         fontWeight:'bold',
                         fontSize: 20,
                     }}> Hitung Keliling</Text>
                </TouchableOpacity>

                <View style={{
                    backgroundColor: '#fff',
                    marginHorizontal: 50,
                    marginVertical :10,
                    justifyContent: 'center',
                    alignItems :'center',
                    paddingVertical : 50,

                   

                }}>
                    <Text
                    style={{
                        color:'#000',
                        fontSize :50,
                        fontWeight : 'bold'
                    }}>
                    {this.state.hasil}</Text>
                </View>

                </View>


                   {/* { INI ADALAH FOOTER} */}
                <View
                 style={{
                    backgroundColor : "#2FA4FF",
                    flex :1,
                    elevation : 5,
                    justifyContent :'center',
                    alignItems : 'flex-end',
                    paddingRight :10
                }}
                >
                    <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize : 14  
                    }}> Produksi By JofanF</Text>
                </View>

            </View>
        );
    }
}

export default App;