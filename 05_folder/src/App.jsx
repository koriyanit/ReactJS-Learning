import Section1 from '../src/component/section1/section1'
import Section2 from '../src/component/section2/section2'
const App = () => {

  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZmVzdGlvbmFscyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag: "Satisfied"
    },
    {
      img: "https://images.unsplash.com/photo-1616587894417-b93dfd1f700a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2ZmZXN0aW9uYWxzJTIwcGVyc29ufGVufDB8fDB8fHww",
      intro: "",
      tag: "Underbanked"
    },
    {
      img: "https://images.unsplash.com/photo-1657727534676-cac1bb160d64?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2ZmZXN0aW9uYWxzJTIwcGVyc29ufGVufDB8fDB8fHww",
      intro: "",
      tag: "Underserved"
    }
  ]
  return (
    <div className="">
        <Section1 users={users}/>
        <Section2/>
    </div>
  )
}

export default App