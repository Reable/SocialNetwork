import React from 'react';
import './PersonalPage.css'
import cl from './PersonalPage.css'
import {Link} from "react-router-dom";

const PersonalPage = () => {
  return (
    <div className={'personaPage'}>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda consectetur distinctio dolorum illum impedit inventore iusto laudantium, libero nisi possimus repudiandae veniam voluptas. Autem necessitatibus nihil nostrum quisquam repudiandae!
        <div className="flex">
          <div className={"navigations"}>
            <Link to={'/'}>Тест 1</Link>
            <Link to={'/'}>Тест 2</Link>
          </div>
          <div className={"application"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, alias amet atque ducimus ipsum iusto nam nostrum perspiciatis totam. Beatae eveniet nam, nobis nostrum qui recusandae reprehenderit sequi totam!
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
