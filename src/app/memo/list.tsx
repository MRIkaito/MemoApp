import { Text, View, StyleSheet } from 'react-native'
import { router, useNavigation } from 'expo-router'

import MemoListItems from '../../components/MemoListItems'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const navigation = useNavigation()
  navigation.setOptions({
    headerRight: () => { return <Text>Test</Text> }
  })
  return (
    <View style={styles.container}>
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
