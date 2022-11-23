// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'

const navigation = () => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/home'
    },
    {
      title: 'Second Page',
      icon: EmailOutline,
      path: '/second-page'
    },
    {
      title: 'Access Control',
      icon: ShieldOutline,
      path: '/acl',
      action: 'read',
      subject: 'acl-page'
    },
    {
      title: 'Customer',
      icon: EmailOutline,
      path: '/customer'
    },
    {
      title: 'Purchase',
      icon: EmailOutline,
      path: '/purchase'
    },
    {
      title: 'Sale',
      icon: EmailOutline,
      path: '/sale'
    },
    {
      title: 'Supplier',
      icon: EmailOutline,
      path: '/supplier'
    }
  ]
}

export default navigation
