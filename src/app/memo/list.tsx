import { View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import MemoListItems from '../../components/MemoListItems'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <MemoListItems />
        <MemoListItems />
        <MemoListItems />
      </View>
      <CircleButton>
        <Icon />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default List
