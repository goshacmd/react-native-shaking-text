# `<ShakingText />`

Grab your user's attention by shaking a `<Text>` that has changed.

![](demo.gif)

## Install

```
$ yarn add react-native-shaking-text
```

Or, if you use NPM:

```
$ npm install --save react-native-shaking-text
```

## Use

Use it like you would use a `<Text>` — no configuration required.

It will automatically detect when the content has changed, and shake the view.

```js
import ShakingText from 'reactn-native-shaking-text';

export default class App extends React.Component {
  state = {
    word: 'Hey',
  };

  componentDidMount() {
    setTimeout(() => this.setState({ word: "Much attentive" }), 2000);
  }

  render() {
    return (
      <View>
        <ShakingText>
          {this.state.word}
        </ShakingText>
      </View>
    );
  }
}
```

## License

MIT.
