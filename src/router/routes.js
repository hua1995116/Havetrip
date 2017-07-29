/**
 * Created by huayi on 2017/7/8.
 */
import Index from '../pages/page/Index.vue'
import Detail from '../pages/page/Detail.vue'
import Notes from '../pages/page/Notes.vue'
import Person from '../pages/page/Person.vue'
import Tab1 from '../pages/page/Tab1.vue'
import Tab2 from '../pages/page/Tab2.vue'
import Tab3 from '../pages/page/Tab3.vue'
import Youji from '../pages/page/Youji.vue'
import Country from '../pages/page/Country.vue'
import Gerenzhongxin from '../pages/page/Gerenzhongxin.vue'
import Tongzhi from '../pages/page/Tongzhi.vue'

export const Main = {
  path: 'index',
  name: 'index',
  component: Index,
  children: [
    {
      path: 'detail1',
      name: 'detail1',
      component: Tab1
    },
    {
      path: 'detail2',
      name: 'detail2',
      component: Tab2
    },
    {
      path: 'detail3',
      name: 'detail3',
      component: Tab3
    }
  ]
}

export const ShowIndex = {
  path: 'show',
  name: 'show',
  component: Detail
}

export const TravelNotes = {
  path: 'notes',
  name: 'notes',
  component: Notes
}

export const Personal = {
  path: 'person',
  name: 'person',
  component: Person,
  children: [
    {
      path: 'youji',
      name: 'youji',
      component: Youji
    },
    {
      path: 'country',
      name: 'country',
      component: Country
    },
    {
      path: 'gerenziliao',
      name: 'gerenziliao',
      component: Gerenzhongxin
    },
    {
      path: 'tongzhi',
      name: 'tongzhi',
      component: Tongzhi
    }
  ]
}
