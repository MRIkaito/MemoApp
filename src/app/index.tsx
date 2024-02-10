import { Redirect, router } from 'expo-router'
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from '../config'

const Index = (): JSX.Element | null => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        router.replace('/memo/list')
        // return <Redirect href='auth/log_in' />
      } else {
        signInAnonymously(auth)
          .then(() => {
            // alert('匿名ログイン')
          })
          .catch((error) => {
            alert(error.message)
          })
      }
    })
  }, [])

  // return <Redirect href='auth/log_in' />
}

export default Index
