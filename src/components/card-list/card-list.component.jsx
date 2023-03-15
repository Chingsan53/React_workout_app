import { Component } from "react";

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className='container mx-auto items-center'>
                <div className='p-5 sm:p-0 flex flex-wrap justify-between'>
                    {monsters.map(monster => (
                        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' key={monster.id}>
                            <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set4&size=180x180`} />
                            <h2 className='text-2xl font-medium'>{monster.name}</h2>
                            <p>{monster.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default CardList;