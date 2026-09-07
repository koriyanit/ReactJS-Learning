import Section1 from '../src/component/section1/section1'
import Section2 from '../src/component/section2/section2'
const App = () => {

  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZmVzdGlvbmFscyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      color: "bg-blue-300",
      tag: "Satisfied"
    },
    {
      img: "https://images.unsplash.com/photo-1616587894417-b93dfd1f700a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2ZmZXN0aW9uYWxzJTIwcGVyc29ufGVufDB8fDB8fHww",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      color: "bg-green-300",
      tag: "Underbanked"
    },
    {
      img: "https://images.unsplash.com/photo-1657727534676-cac1bb160d64?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2ZmZXN0aW9uYWxzJTIwcGVyc29ufGVufDB8fDB8fHww",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      color: "bg-yellow-300",
      tag: "Underserved"
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      color: "bg-red-300",
      tag: "Patient"
    },
    {
      img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      color: "bg-purple-300",
      tag: "Patient"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      color: "bg-pink-300",
      tag: "Patient"
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