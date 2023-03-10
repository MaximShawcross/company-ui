import squareIcon from '../../resources/icons/square-caret-left-solid.svg';
import bellIcon from '../../resources/icons/bell-regular.svg';

import "./dashboard-header.scss";

export const DashboardHeader = () => {

	return (
		<header className="header">
			<div className="header__container">
				<div className="header__container__item">
					<button 
						style={{backgroundColor: "inherit", border: "none", cursor: "pointer"}}
						onClick = {() => {
							localStorage.clear();
							// eslint-disable-next-line no-restricted-globals
							location.reload();
						}}
					>
						<img src={squareIcon} alt="square" className="header__container__item__icon"></img>
					</button>
				</div>
				<div className="header__container__item">
					{/* <input className="header__container__item__input" placeholder="Search..." type="text"></input> */}
						<img src={bellIcon} alt="bell" className="header__container__item__icon"></img>
				</div>
			</div>
		</header>
	)
} 