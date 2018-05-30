import Forum from '@/components/TheForum'
import TheBillboard from '@/components/TheBillboard'

const content = {
  template: ` 
  <Forum>
  </Forum>`,
  components: {
    Forum
  }
}

export default {
  Forum: content,
  SideBar: TheBillboard
}
