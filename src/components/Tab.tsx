import { useState } from 'react'
import './Tab.css'

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="mb-5">
      <h3>Work experience</h3>
      <div className="tab">
        <button
          className={activeTab === 0 ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab(0)}
        >
          Metrisk
        </button>
        <button
          className={activeTab === 1 ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab(1)}
        >
          Palringo (WOLF)
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <div>Metrisk ipsum dolor sit amet consectetur adipisicing elit. Error iure quia voluptate laudantium eum ratione optio magnam consequuntur eaque, sed quod, hic aliquam incidunt rerum laboriosam deserunt cumque commodi consectetur reprehenderit dolorum impedit, harum doloremque molestiae. Cupiditate vero doloremque, laborum obcaecati illum esse, mollitia quibusdam nam, laudantium reprehenderit unde dolorem!</div>}
        {activeTab === 1 && <div>Palringo ipsum, dolor sit amet consectetur adipisicing elit. Ex natus assumenda, amet nemo cupiditate culpa dolorum suscipit, explicabo veniam voluptatem maiores illo. Porro nobis corporis exercitationem. Veniam voluptatem sapiente eveniet ex fugit, illum laboriosam odio reiciendis totam ab cupiditate ipsum.</div>}
      </div>
    </div>
  )
}

export default Tab