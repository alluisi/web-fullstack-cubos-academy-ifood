import { Galery } from './Galery';

export const Main = () => {
    return (
        <main className="main">
            <h1 className="main__title">Início</h1>
            <div className="galery flex-row flex-wrap justify-center">
                <Galery />
            </div>
        </main>
    )
}