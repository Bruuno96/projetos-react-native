import React from 'react';
import { StatusBar, Image, View, Button } from 'react-native';

import dino1 from './assets/dino1.png'
import dino2 from './assets/dino2.png'
import dino3 from './assets/dino3.png'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagem: dino1
    }
  }

  render() {
    return (
      <View style={{ padding: 16 }}>
        <Image
          resizeMode="center"
          source={this.state.imagem}
          style={{ alignSelf: "center", width: 200, height: 200 }}
        />
        <View style={{ padding: 16 }}>
          <Button
            title={"Imagem 1"}
            onPress={_ => this.setState({ imagem: dino1 })}
          />
          <View style={{ marginBottom: 20 }} />
          <Button
            title={"Imagem 2"}
            onPress={_ => this.setState({ imagem: dino2 })}
          />
          <View style={{ marginBottom: 20 }} />
          <Button
            title={"Imagem 3"}
            onPress={_ => this.setState({ imagem:  dino3 })}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}