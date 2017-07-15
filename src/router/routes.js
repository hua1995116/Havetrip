/**
 * Created by huayi on 2017/7/8.
 */
import Index from '../pages/page/Index.vue'
import Detail from '../pages/page/Detail.vue'
import Notes from '../pages/page/Notes.vue'
import Person from '../pages/page/Person.vue'

export const Main = {
  path: '/index',
  name: 'index',
  component: Index
}

export const ShowIndex = {
  path: '/show',
  name: 'show',
  component: Detail
}

export const TravelNotes = {
  path: '/notes',
  name: 'notes',
  component: Notes
}

export const Personal = {
  path: '/person',
  name: 'person',
  component: Person
}
