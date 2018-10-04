import React from 'react';
import { Image, View } from 'react-native';
import { RkComponent } from 'react-native-ui-kitten';

export class Avatar extends RkComponent {
  componentName = 'Avatar';
  typeMapping = {
    container: {},
    image: {}
  };

  renderImg = (styles) => (
    <View>
      <Image style={styles.image} source={this.props.img} />
    </View>
  );

  render() {
    const { container, ...other } = this.defineStyles();
    return (
      <View style={[container, this.props.style]}>
        {this.renderImg(other)}
      </View>
    );
  }
}
