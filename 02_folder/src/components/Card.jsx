import { BookmarkPlus } from 'lucide-react'

const Card = (props) => {
  console.log(props);
    
  return (
        <div className='card'>
            <div className="top">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yQuKUFG8GfKlDK_F5Tfkvh2-TMw77rL5HZ9kDWjUoA&s=10' alt='logo'></img>
              <button>Save <BookmarkPlus strokeWidth={1.75} /></button>
            </div>
            <div className="center">
                <h3>Amazon<span>% days ago</span></h3>
                <h2>Senior Dev</h2>
                <div>
                  <h4>Part Time</h4>
                  <h4>Senior Level</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>$120/hr</h3>
                    <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>
    </div>
  )
}

export default Card
