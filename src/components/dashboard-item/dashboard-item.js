import "./dashboard-item.scss";

export const DashboardItem = ({ name, image }) => {
	return (
		<div className="dashboard__item">
			<img src={image} alt="Company icons" className="dashboard__item__img"></img>
			<div className="dashboard__item__title">{name}</div>
		</div>
	)
}
