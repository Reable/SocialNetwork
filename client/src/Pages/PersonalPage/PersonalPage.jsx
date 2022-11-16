import React from 'react';
import './PersonalPage.css'
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
            <div className={'personal_data'}>
              <div className={'personal_image'}>
                <img src="https://png.pngtree.com/element_our/png_detail/20181206/users-vector-icon-png_260862.jpg" alt=""/>
              </div>
              <div className={"personal_name"}>
                <p>Ivan</p>
                <p>Razmyslov</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
