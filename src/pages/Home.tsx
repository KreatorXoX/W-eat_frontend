type Props = {}

import MenuItemList from '../components/MenuItems/MenuItemList'
import TopSection from '../components/TopSection/TopSection'

const Home = (props: Props) => {
  return (
    <>
      <TopSection />
      <MenuItemList />
    </>
  )
}

export default Home
