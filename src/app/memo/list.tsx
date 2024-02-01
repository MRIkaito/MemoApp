import { View, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import Header from '../../components/Header'
import MemoListItems from '../../components/MemoListItems'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <MemoListItems />
        <MemoListItems />
        <MemoListItems />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name='plus' size={40} color='#ffffff'/>
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
