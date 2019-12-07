import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: [
      {
        id: 11,
        img: require('../assets/people/people_1.jpg'),
        clicks: 0
      },
      {
        id: 12,
        img: require('../assets/people/people_2.jpg'),
        clicks: 0
      },
      {
        id: 13,
        img: require('../assets/people/people_3.jpg'),
        clicks: 0
      },
      {
        id: 14,
        img: require('../assets/people/people_4.jpg'),
        clicks: 0
      },
      {
        id: 15,
        img: require('../assets/people/people_5.jpg'),
        clicks: 0
      },
      {
        id: 16,
        img: require('../assets/people/people_6.jpg'),
        clicks: 0
      },
      {
        id: 17,
        img: require('../assets/people/people_7.jpg'),
        clicks: 0
      },
      {
        id: 18,
        img: require('../assets/people/people_8.jpg'),
        clicks: 0
      }
    ],
    nature: [
      {
        id: 21,
        img: require('../assets/nature/nature_1.jpg'),
        clicks: 0
      },
      {
        id: 22,
        img: require('../assets/nature/nature_2.jpg'),
        clicks: 0
      },
      {
        id: 23,
        img: require('../assets/nature/nature_3.jpg'),
        clicks: 0
      },
      {
        id: 24,
        img: require('../assets/nature/nature_4.jpg'),
        clicks: 0
      },
      {
        id: 25,
        img: require('../assets/nature/nature_5.jpg'),
        clicks: 0
      },
      {
        id: 26,
        img: require('../assets/nature/nature_6.jpg'),
        clicks: 0
      },
      {
        id: 27,
        img: require('../assets/nature/nature_7.jpg'),
        clicks: 0
      },
      {
        id: 28,
        img: require('../assets/nature/nature_8.jpg'),
        clicks: 0
      },
      {
        id: 29,
        img: require('../assets/nature/nature_9.jpg'),
        clicks: 0
      }
    ],
    events: [
      {
        id: 31,
        img: require('../assets/events/event_1.jpg'),
        clicks: 0
      },
      {
        id: 32,
        img: require('../assets/events/event_2.jpg'),
        clicks: 0
      },
      {
        id: 33,
        img: require('../assets/events/event_3.jpg'),
        clicks: 0
      },
      {
        id: 34,
        img:  require('../assets/events/event_4.jpg'),
        clicks: 0
      },
      {
        id: 35,
        img:  require('../assets/events/event_5.jpg'),
        clicks: 0
      },
      {
        id: 36,
        img:  require('../assets/events/event_6.jpg'),
        clicks: 0
      },
      {
        id: 37,
        img:  require('../assets/events/event_7.jpg'),
        clicks: 0
      },
      {
        id: 38,
        img:  require('../assets/events/event_8.jpg'),
        clicks: 0
      },
      {
        id: 39,
        img:  require('../assets/events/event_9.jpg'),
        clicks: 0
      },
      {
        id: 310,
        img:  require('../assets/events/event_10.jpg'),
        clicks:0
      }
    ],
  },
  getters: {
    people: (state) => state.people,
    nature: (state) => state.nature,
    events: (state) => state.events,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
