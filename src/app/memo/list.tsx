import { View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import MemoListItems from '../../components/MemoListItems'
import CircleButton from '../../components/CircleButton'

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
        <Feather name='plus' size={40}/>
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
