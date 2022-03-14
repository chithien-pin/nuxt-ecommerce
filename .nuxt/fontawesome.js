import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faChevronRight as freeFasFaChevronRight,
  faChevronLeft as freeFasFaChevronLeft,
  faChevronDown as freeFasFaChevronDown,
  faChevronUp as freeFasFaChevronUp,
  faSearch as freeFasFaSearch,
  faStar as freeFasFaStar,
  faCircle as freeFasFaCircle,
  faMobileAlt as freeFasFaMobileAlt,
  faUserCircle as freeFasFaUserCircle,
  faMapMarkerAlt as freeFasFaMapMarkerAlt,
  faListAlt as freeFasFaListAlt,
  faBirthdayCake as freeFasFaBirthdayCake,
  faCalendarCheck as freeFasFaCalendarCheck,
  faCheckCircle as freeFasFaCheckCircle,
  faAward as freeFasFaAward,
  faCreditCard as freeFasFaCreditCard,
  faEye as freeFasFaEye,
  faComments as freeFasFaComments,
  faTimes as freeFasFaTimes,
  faTrashAlt as freeFasFaTrashAlt,
  faPlus as freeFasFaPlus,
  faMinus as freeFasFaMinus,
  faShoppingCart as freeFasFaShoppingCart,
  faCartPlus as freeFasFaCartPlus,
  faAddressCard as freeFasFaAddressCard,
  faBoxOpen as freeFasFaBoxOpen,
  faQuestionCircle as freeFasFaQuestionCircle,
  faFrown as freeFasFaFrown,
  faEdit as freeFasFaEdit,
  faSignOutAlt as freeFasFaSignOutAlt,
  faGift as freeFasFaGift,
  faPaperPlane as freeFasFaPaperPlane
} from '@fortawesome/free-solid-svg-icons'

library.add(
  freeFasFaChevronRight,
  freeFasFaChevronLeft,
  freeFasFaChevronDown,
  freeFasFaChevronUp,
  freeFasFaSearch,
  freeFasFaStar,
  freeFasFaCircle,
  freeFasFaMobileAlt,
  freeFasFaUserCircle,
  freeFasFaMapMarkerAlt,
  freeFasFaListAlt,
  freeFasFaBirthdayCake,
  freeFasFaCalendarCheck,
  freeFasFaCheckCircle,
  freeFasFaAward,
  freeFasFaCreditCard,
  freeFasFaEye,
  freeFasFaComments,
  freeFasFaTimes,
  freeFasFaTrashAlt,
  freeFasFaPlus,
  freeFasFaMinus,
  freeFasFaShoppingCart,
  freeFasFaCartPlus,
  freeFasFaAddressCard,
  freeFasFaBoxOpen,
  freeFasFaQuestionCircle,
  freeFasFaFrown,
  freeFasFaEdit,
  freeFasFaSignOutAlt,
  freeFasFaGift,
  freeFasFaPaperPlane
)

config.autoAddCss = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component('FontAwesomeLayers', FontAwesomeLayers)
Vue.component('FontAwesomeLayersText', FontAwesomeLayersText)
