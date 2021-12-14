import "./app-info.css";

const AppInfo = ({countEmpoyees, countEmpoyeesIncreased, countEmpoyeesLiked}) => {

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {countEmpoyees}</h2>
            <h2>Премию получат: {countEmpoyeesIncreased}</h2> 
            <h2>Сотрудников в избранном: {countEmpoyeesLiked}</h2> 
        </div>
    )
}

export default AppInfo;