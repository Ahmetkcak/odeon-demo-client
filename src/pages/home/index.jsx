import CreateFlight from "@/components/pagesComponents/CreateFlight";
import FlightList from "@/components/pagesComponents/FlightList";

function Home() {

    const isAdmin = true;

    return (
        <div>
            {isAdmin ? (
                <div className="flex flex-row">
                    <div className="w-[50%]">
                        <FlightList />
                    </div>
                    <div className="w-[50%]">
                        <CreateFlight />
                    </div>
                </div>
            ) : (
                <FlightList />
            )}
        </div>
    );
}

export default Home;
