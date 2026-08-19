import GoalItem from "./GoalItem";

function GoalList () {
    return (
        <ul>
            <GoalItem title='Nauczyć się Reacta'>Chcę jak najwięcej wynieść z tej książki i nauczyć się wszystkiego o Reactie</GoalItem>
            <GoalItem title='Wypróbować zdobytą wiedzę'>Uczenie się przez lekturę jest ciekawe, jednak aby w pełni opanować zdobytą wiedzę, trzeba praktykować</GoalItem>
            <GoalItem title='Chcę kontynuować później naukę'>Programista uczy się przez całe życie. Nauka powina być dla mnie przyjemnością. Po zakończeniu tej książki sięgnę po zaawansowane materiały.</GoalItem>
        </ul>
    );
}

export default GoalList;
