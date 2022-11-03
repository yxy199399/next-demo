import { flow } from 'mobx'
class UserInfo {
  userInfo = {}
  state = 'pending'
  fetchProjects = flow(function* () {
    // <- 注意*号，这是生成器函数！
    // this.userInfo = {}
    // this.state = "pending"
    // try {
    //     // const projects = yield fetchGithubProjectsSomehow() // 用 yield 代替 await
    //     // const filteredProjects = somePreprocessing(projects)
    //     // 异步代码块会被自动包装成动作并修改状态
    //     this.state = "done"
    //     // this.githubProjects = filteredProjects
    // } catch (error) {
    //     this.state = "error"
    // }
  })
}
const loginUser = new UserInfo()
export default loginUser
